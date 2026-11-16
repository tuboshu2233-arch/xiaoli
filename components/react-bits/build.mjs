import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const root=dirname(fileURLToPath(import.meta.url));
const cases=resolve(root,'../../assets/cases');
for(const name of ['DepthCarousel','AnimatedList','ScrollStack','CardNav']){
 const registry=JSON.parse(await readFile(resolve(root,name,'registry.json'),'utf8'));
 for(const file of registry.files){
  const nameOnDisk=file.path.split('/').at(-1);
  if(!/\.(jsx|css)$/.test(nameOnDisk))continue;
  const actual=await readFile(resolve(root,name,nameOnDisk),'utf8');
  if(actual!==file.content)throw new Error(`Upstream source modified: ${name}/${nameOnDisk}`);
  console.log('Verified upstream:',nameOnDisk,createHash('sha256').update(actual).digest('hex').slice(0,12));
 }
}
const names=['depth-carousel','animated-list','scroll-stack','card-nav','icon-click-toggle','icon-hover','loading-ldrs','payment-orbit','payment-pop'];
await build({entryPoints:Object.fromEntries(names.map(name=>[`${name}/app.bundle`,resolve(cases,name,'src/main.jsx')])),outdir:cases,bundle:true,jsx:'automatic',minify:true,format:'iife',platform:'browser',target:['safari16','chrome110'],define:{'process.env.NODE_ENV':'"production"'},alias:{react:resolve(root,'node_modules/react'),'react-dom':resolve(root,'node_modules/react-dom'),'lottie-web':resolve(root,'node_modules/lottie-web')},legalComments:'linked',nodePaths:[resolve(root,'node_modules')]});
console.log('Built',names.length,'collection previews.');
await build({entryPoints:[resolve(cases,'pie3d-shared/main.js')],outfile:resolve(cases,'pie3d-shared/app.bundle.js'),bundle:true,minify:true,format:'iife',platform:'browser',target:['safari16','chrome110'],legalComments:'linked',nodePaths:[resolve(root,'node_modules')]});
console.log('Built shared interactive 3D pie previews.');
await build({entryPoints:[resolve(cases,'perspective-area/chart.js')],outfile:resolve(cases,'perspective-area/chart.bundle.js'),bundle:true,minify:true,format:'iife',platform:'browser',target:['safari16','chrome110'],legalComments:'linked',nodePaths:[resolve(root,'node_modules')]});
console.log('Built shared orbit-controlled area/bar previews.');
