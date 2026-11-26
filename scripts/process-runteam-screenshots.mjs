import sharp from 'sharp';
import {fileURLToPath} from 'node:url';
import {copyFile,mkdir,readFile,writeFile} from 'node:fs/promises';
const output=new URL('../src/assets/screenshots/',import.meta.url);await mkdir(output,{recursive:true});
// Run Team captures extracted from the Android screen recording of 2026-11-26
// (/home/josivaldof/Downloads/screen-20261126-184535.mp4). Frames with the soft
// keyboard, the notification shade or any personal device data are excluded.
// Pure-black letterbox bars are trimmed automatically; no interface is fabricated.
const captures=[
 {key:'run-team-home',path:'/tmp/opencode/runteam-frames/f_001.jpg',at:'00:00',note:'Home screen before entry: Invite tile (R$10K) and ID icon (R$5).'},
 {key:'run-team-invite-rules',path:'/tmp/opencode/runteam-frames/f_005.jpg',at:'00:04',note:'Invite page: Invitation ID bar, Reward rules (levels 2/4/6), 40-reward cap.'},
 {key:'run-team-my-inviter',path:'/tmp/opencode/runteam-frames/f_007.jpg',at:'00:06',note:'My inviter: None, Fill in ID Reward button, Will get R$5.'},
 {key:'run-team-invitation-form',path:'/tmp/opencode/runteam-fine/g_08.jpg',at:'00:30',note:'Invitation ID dialog with 67080261 entered above Submit (keyboard dismissed).'},
 {key:'run-team-congratulations',path:'/tmp/opencode/runteam-frames/f_032.jpg',at:'00:31',note:'Congratulations popup with R$5 cash and I understand.'},
 {key:'run-team-code-accepted',path:'/tmp/opencode/runteam-frames/f_038.jpg',at:'00:37',note:'Invitation code has been filled in, rewards have been issued; Filled in button.'},
 {key:'run-team-balance',path:'/tmp/opencode/runteam-frames/f_047.jpg',at:'00:46',note:'Home screen after entry: cash balance R$5 with 10% badge.'}
];
async function blackBounds(path){
 const {data,info}=await sharp(path).raw().toBuffer({resolveWithObject:true});
 const {width,height,channels}=info;
 const rowMax=new Array(height).fill(0),colMax=new Array(width).fill(0);
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){const i=(y*width+x)*channels;const m=Math.max(data[i],data[i+1],data[i+2]);if(m>rowMax[y])rowMax[y]=m;if(m>colMax[x])colMax[x]=m;}
 let top=0,bottom=height,left=0,right=width;
 while(top<bottom&&rowMax[top]<16)top++;
 while(bottom>top&&rowMax[bottom-1]<16)bottom--;
 while(left<right&&colMax[left]<16)left++;
 while(right>left&&colMax[right-1]<16)right--;
 return {left,top,width:right-left,height:bottom-top};
}
const manifestPath=new URL('../docs/capture-manifest.json',import.meta.url);
const manifest=JSON.parse(await readFile(manifestPath,'utf8'));
for(const capture of captures){
 const crop=await blackBounds(capture.path);
 const en=new URL(`en-${capture.key}.webp`,output);
 await sharp(capture.path).extract(crop).resize({width:640,withoutEnlargement:true}).webp({quality:82}).toFile(fileURLToPath(en));
 for(const locale of ['es','pt'])await copyFile(fileURLToPath(en),fileURLToPath(new URL(`${locale}-${capture.key}.webp`,output)));
 manifest.push({app:capture.key,captureMethod:'ffmpeg frame extraction from Android screen recording (1080x2400, 60fps)',captured:'2026-11-26',videoTimestamp:capture.at,crop,privacy:'No status bar, notification shade, keyboard or personal device data in selected frames; black letterbox bars trimmed',sourceLanguage:'en',note:capture.note});
 console.log(capture.key,JSON.stringify(crop));
}
await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n');
console.log('Run Team screenshots written for en/es/pt and manifest updated.');
