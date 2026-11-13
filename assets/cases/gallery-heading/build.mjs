import {build} from 'esbuild';
import {readFile,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,resolve,basename} from 'node:path';
import {createHash} from 'node:crypto';
import {extendGalleryModule} from './src/motion-extension.mjs';

const root=dirname(fileURLToPath(import.meta.url));
const registry=JSON.parse(await readFile(resolve(root,'source-bundle.json'),'utf8'));
// Fail rather than silently building a different registered revision.
for(const file of registry.files){
  const content=await readFile(resolve(root,'vendor',file.path));
  if(createHash('sha256').update(content).digest('hex')!==file.sha256)throw new Error('Source hash mismatch: '+file.path);
}
const rawSources={
  name:'threeui-registered-raw-sources',
  setup(build){
    build.onLoad({filter:/NeuformIsolatedEffects\.tsx$/},async args=>({contents:extendGalleryModule(await readFile(args.path,'utf8')),loader:'tsx',resolveDir:dirname(args.path)}));
    build.onResolve({filter:/\.html\?raw$/},async args=>{
      const path=resolve(dirname(args.importer),args.path.replace(/\?raw$/,''));
      try{await access(path);return {path,namespace:'registered-html'}}catch{}
      // The shared upstream module also imports the library's other effects.
      // Resolve those from its official release, without stubbing or editing it.
      const support=resolve(root,'node_modules/@designcodeio/threeui/lib-dist/shaders/neuform-isolated/sources',basename(path)+'.js');
      await access(support);
      return {path:support};
    });
    build.onLoad({filter:/.*/,namespace:'registered-html'},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));
  }
};
await build({
  entryPoints:[resolve(root,'src/main.tsx')],outfile:resolve(root,'app.bundle.js'),
  alias:{'@designcodeio/threeui/style.css':resolve(root,'vendor/src/shaders/threeui.css'),'@designcodeio/threeui':resolve(root,'vendor/src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx')},
  plugins:[rawSources],loader:{'.woff2':'file'},assetNames:'fonts/[name]-[hash]',
  bundle:true,jsx:'automatic',minify:true,format:'iife',platform:'browser',target:['safari16','chrome110'],
  define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked'
});
