import sharp from 'sharp';
import {fileURLToPath} from 'node:url';
import {access,mkdir,writeFile} from 'node:fs/promises';
const output=new URL('../src/assets/screenshots/',import.meta.url);await mkdir(output,{recursive:true});
// Original captures are kept in /tmp, never committed. Exclude device status
// bars and personal account details. No interface or result is fabricated.
const captures=[
 {app:'opinion',path:'/tmp/apps308-opinion-main.png',crop:{left:0,top:550,width:1080,height:1450},captured:'2026-11-05',method:'adb exec-out screencap -p',lang:'pt'},
 {app:'microsoft',path:'/tmp/apps308-microsoft.png',crop:{left:0,top:100,width:1080,height:2170},captured:'2026-11-05',method:'adb exec-out screencap -p',lang:'pt'},
 {app:'lens',path:'/tmp/apps308-lens.png',crop:{left:0,top:100,width:1080,height:2170},captured:'2026-11-05',method:'adb exec-out screencap -p',lang:'en'},
 {app:'freecash',path:'/tmp/apps308-freecash-referral-link.png',crop:{left:0,top:530,width:1080,height:720},captured:'2026-11-05',method:'adb exec-out screencap -p',lang:'pt'},
 {app:'freecash-main',path:'/tmp/apps308-freecash-main.png',crop:{left:0,top:300,width:1080,height:1710},captured:'2026-11-05',method:'adb exec-out screencap -p',lang:'pt'},
 {app:'dramastack',path:'/tmp/apps308-dramastack-benefits-main.png',crop:{left:0,top:240,width:1080,height:1850},captured:'2026-11-05',method:'adb exec-out screencap -p',lang:'pt'},
 {app:'dramastack-payout',path:'/tmp/apps308-dramastack-cashout-info.png',crop:{left:0,top:220,width:1080,height:1650},captured:'2026-11-05',method:'adb exec-out screencap -p',lang:'pt'},
 {app:'swagbucks-shop',path:'/tmp/apps308-swagbucks-shop.png',crop:{left:132,top:66,width:735,height:432},captured:'2026-11-07',method:'browser capture',lang:'en'},
 {app:'swagbucks-games',path:'/tmp/apps308-swagbucks-games.png',crop:{left:145,top:44,width:690,height:484},captured:'2026-11-07',method:'browser capture',lang:'en'},
 {app:'swagbucks-offer',path:'/tmp/apps308-swagbucks-offer.png',crop:{left:10,top:6,width:974,height:649},captured:'2026-11-07',method:'browser capture',lang:'en'},
 {app:'swagbucks-goals',path:'/tmp/apps308-swagbucks-offer.png',crop:{left:430,top:6,width:554,height:649},captured:'2026-11-07',method:'browser capture',lang:'en'}
];
const log=[];
for(const capture of captures){
 const exists=await access(capture.path).then(()=>true,()=>false);
 if(exists){
  for(const locale of ['en','es','pt']){const destination=new URL(`${locale}-${capture.app}.webp`,output);await sharp(capture.path).extract(capture.crop).resize({width:640,withoutEnlargement:true}).webp({quality:82}).toFile(fileURLToPath(destination));}
 }
 log.push({app:capture.app,captureMethod:capture.method,captured:capture.captured,crop:capture.crop,privacy:'Status bar, account avatar and financial balance excluded where present',sourceLanguage:capture.lang});
}
await writeFile(new URL('../docs/capture-manifest.json',import.meta.url),JSON.stringify(log,null,2)+'\n');
