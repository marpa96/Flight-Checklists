// Node 22; dependencies vendored for a reproducible, offline-capable build.
import fs from 'node:fs';import path from 'node:path';
import {checklistIDs,validatePackage} from './catalog.mjs';
const root=path.resolve(import.meta.dirname,'..');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.name.startsWith('.')?[]:d.isDirectory()?walk(path.join(dir,d.name)):d.isFile()&&d.name.endsWith('.md')?[path.join(dir,d.name)]:[]);}
const documents=walk(root).map(file=>({name:path.relative(root,file),markdown:fs.readFileSync(file,'utf8')})).filter(d=>checklistIDs(d.markdown).length);
const pkg={format:'flitechek-library-v1',catalog:fs.readFileSync(root+'/catalog.yaml','utf8'),documents};
if(process.env.GITHUB_SHA)pkg.source_commit=process.env.GITHUB_SHA;
const items=validatePackage(pkg);
// Keep author-entered revisions, but automatically bump a changed document's
// published revision so normal edit/commit/push does not need manual bookkeeping.
const previousPath=process.argv[3];
if(previousPath&&fs.existsSync(previousPath)){
 const previous=validatePackage(JSON.parse(fs.readFileSync(previousPath,'utf8')));
 const entries=items.map(c=>{
  const old=previous.find(o=>o.catalogId===c.catalogId),meta={...c.metadata};
  if(old){const a={...meta,revision:0},b={...old.metadata,revision:0};const changed=c.markdown!==old.markdown||JSON.stringify(a)!==JSON.stringify(b);meta.revision=Math.max(meta.revision,old.metadata.revision+(changed?1:0));}
  return meta;
 });
 // JSON is valid YAML 1.2. Only this generated package uses that representation;
 // the human-authored catalog.yaml is never rewritten by the build.
 pkg.catalog=JSON.stringify({schema_version:1,checklists:entries});
}
validatePackage(pkg);
const output=path.resolve(process.argv[2]||root+'/library.flitechek.json');fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,JSON.stringify(pkg,null,2)+'\n');
console.log(`Validated ${items.length} checklists; wrote ${output}`);
