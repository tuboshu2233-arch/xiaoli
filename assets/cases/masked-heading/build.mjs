import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
const root=dirname(fileURLToPath(import.meta.url));
await build({entryPoints:[resolve(root,'src/main.jsx')],outfile:resolve(root,'app.bundle.js'),bundle:true,jsx:'automatic',minify:true,format:'iife',platform:'browser',target:['safari16','chrome110'],define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked'});
