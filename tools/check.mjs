import {execFileSync} from 'node:child_process';
import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
for(const dir of ['public','src','tools'])for(const name of await readdir(path.join(root,dir)))if(name.endsWith('.js')||name.endsWith('.mjs'))execFileSync(process.execPath,['--check',path.join(root,dir,name)],{stdio:'inherit'});
const data=JSON.parse(await readFile(path.join(root,'public/catalog-preview.json'),'utf8'));
if(!data.ok||!data.items.length||!data.items.every(item=>item.canBuy===false))throw Error('Invalid preview catalog');
console.log('Syntax and preview catalog checks passed: '+data.items.length+' products');
