import sharp from 'sharp';
import {fileURLToPath} from 'node:url';
import {mkdir,writeFile} from 'node:fs/promises';
const output=new URL('../src/assets/screenshots/',import.meta.url);await mkdir(output,{recursive:true});
// Original USB captures are kept in /tmp, never committed. Exclude the status bar,
// account avatar and financial balance. No interface or result is fabricated.
const captures=[
 {app:'opinion',path:'/tmp/apps308-opinion-main.png',crop:{left:0,top:550,width:1080,height:1450}},
 {app:'microsoft',path:'/tmp/apps308-microsoft.png',crop:{left:0,top:100,width:1080,height:2170}},
 {app:'lens',path:'/tmp/apps308-lens.png',crop:{left:0,top:100,width:1080,height:2170}},
 {app:'freecash',path:'/tmp/apps308-freecash-referral-link.png',crop:{left:0,top:530,width:1080,height:720}},
 {app:'freecash-main',path:'/tmp/apps308-freecash-main.png',crop:{left:0,top:300,width:1080,height:1710}}
];
const log=[];
for(const capture of captures){for(const locale of ['en','es','pt']){const destination=new URL(`${locale}-${capture.app}.webp`,output);await sharp(capture.path).extract(capture.crop).resize({width:640,withoutEnlargement:true}).webp({quality:80}).toFile(fileURLToPath(destination));}log.push({app:capture.app,captureMethod:'adb exec-out screencap -p',captured:'2026-11-05',crop:capture.crop,privacy:'Status bar, account avatar and financial balance excluded where present',sourceLanguage:capture.app==='lens'?'en':'pt'});}
await writeFile(new URL('../docs/capture-manifest.json',import.meta.url),JSON.stringify(log,null,2)+'\n');
