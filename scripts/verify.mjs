import assert from 'node:assert/strict';
import {readdir,readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?walk(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
const files=await walk(root);const pages=files.filter(f=>f.endsWith('.html'));const origin='https://www.apps308.com';const htmls=new Map();
for(const file of pages)htmls.set(file,await readFile(file,'utf8'));
let articleCount=0,links=0,imageCount=0;const titles=new Set();const articleDates=new Map();
const arrowWinRoutes=new Map([
 ['en/arrow-win-invite-code/index.html','en/arrow-win-download/index.html'],
 ['es/codigo-de-invitacion-arrow-win/index.html','es/descargar-arrow-win/index.html'],
 ['pt/codigo-de-convite-arrow-win/index.html','pt/baixar-arrow-win/index.html']
].flatMap(([invite,download])=>[
 [invite,{copiesCode:true,sibling:download}],
 [download,{copiesCode:false,sibling:invite}]
]));
const arrowWinStore='https://play.google.com/store/apps/details?id=com.qrgame.arrowwin';
const runTeamRoutes=new Set(['en/run-team-invite-code/index.html','es/codigo-de-invitacion-run-team/index.html','pt/codigo-de-convite-run-team/index.html']);
const runTeamInviteUrl='https://d3oi8atn0xpwup.cloudfront.net/rt/index_3.html?id=67080261';
const attr=(tag,name)=>tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
function targetFile(url){const pathname=decodeURIComponent(url.pathname);return path.join(root,pathname.endsWith('/')?pathname+'index.html':pathname);}
for(const [file,html] of htmls){
 const relative=path.relative(root,file);if(relative==='404.html')continue;
 const locale=relative.split(path.sep)[0];assert.equal((html.match(/<h1\b/g)||[]).length,1,`${relative}: one h1`);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert(title?.includes('apps308'),relative+' branding');assert(!titles.has(title),relative+' unique title');titles.add(title);
 const canonical=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).find(t=>attr(t,'rel')==='canonical');assert(canonical,relative+' canonical');const canonicalUrl=attr(canonical,'href');assert(canonicalUrl?.startsWith(origin),relative+' canonical origin');
 const alternates=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(t=>attr(t,'rel')==='alternate');
 assert.equal(alternates.length,4,relative+' alternate count');
 for(const lang of ['en','es','pt','x-default']){const tag=alternates.find(t=>attr(t,'hreflang')===lang);assert(tag,relative+' '+lang);const url=new URL(attr(tag,'href'));assert(files.includes(targetFile(url)),relative+' alternate exists '+url);if(lang!=='x-default'&&['en','es','pt'].includes(locale)){const counterpart=htmls.get(targetFile(url));assert(counterpart?.includes(`hreflang="${locale}" href="${canonicalUrl}"`),relative+' reciprocal alternate');}}
 for(const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)){const tag=match[0];const raw=attr(tag,'href')||attr(tag,'src');if(!raw||raw.startsWith('#')||raw.startsWith('data:')||raw.startsWith('mailto:'))continue;const url=new URL(raw,canonicalUrl);if(url.origin!==origin)continue;assert(files.includes(targetFile(url)),relative+' internal target '+raw);links++;}
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap(m=>JSON.parse(m[1]));
 const articleSchema=schemas.find(s=>s['@type']==='Article');
 if(articleSchema){
  assert(/^\d{4}-\d{2}-\d{2}$/.test(articleSchema.datePublished),relative+' publication date');
  assert(/^\d{4}-\d{2}-\d{2}$/.test(articleSchema.dateModified)&&articleSchema.dateModified>=articleSchema.datePublished,relative+' modification date');
  const visibleDate=html.match(/<time\b[^>]*datetime="([^"]+)"/i)?.[1];
  assert.equal(visibleDate,articleSchema.dateModified,relative+' visible/schema updated date');
  articleDates.set(canonicalUrl,articleSchema.dateModified);
 }
 const arrowWinRoute=arrowWinRoutes.get(relative);
 const analyticsTag='<script>\n  window.dataLayer = window.dataLayer || [];\n  window.dataLayer.push({\'gtm.start\': new Date().getTime(), event: \'gtm.js\'});\n</script><script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NZJRRRLM"></script>';
 assert(html.includes(analyticsTag),relative+' analytics tag');
 if(schemas.some(s=>s['@type']==='Article')){articleCount++;assert(schemas.some(s=>s['@type']==='FAQPage'),relative+' faq');if(!arrowWinRoute?.copiesCode&&!runTeamRoutes.has(relative)&&!relative.includes('freecash')&&!relative.includes('pawns')&&!relative.includes('prime')&&!relative.includes('attapoll')&&!relative.includes('tiktok-lite'))assert(!/<script(?![^>]*type="application\/ld\+json")[^>]*>/g.test(html.replace(analyticsTag,'')),relative+' zero client JS');assert(html.includes('srcset=')||html.includes('<img'),relative+' screenshot included');if(relative.includes('swagbucks')&&!relative.includes('prime')){assert(html.includes('https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&amp;rp=1'),relative+' swagbucks affiliate link');assert(html.includes('rel="sponsored noopener"'),relative+' sponsored rel');}if(relative.includes('pawns')){assert(html.includes('https://discoverpawns.eu/6823713'),relative+' pawns affiliate link');}if(relative.includes('prime')){assert(html.includes('https://primeopinion.com/register?ref=a32dad65-3bc5-4c37-af10-4f7590595b0d'),relative+' primeopinion affiliate link');}if(relative.includes('attapoll')){assert(html.includes('https://attapoll.app/join/cgfky'),relative+' attapoll invite link');assert(html.includes('rel="sponsored noopener"'),relative+' attapoll sponsored rel');}if(relative.includes('tiktok-lite')){assert(html.includes('https://www.tiktok.com/d/4/ZS9fcGCx9xhYn-v2KXS/'),relative+' tiktoklite invite link');assert(html.includes('rel="sponsored noopener"'),relative+' tiktoklite sponsored rel');}}
 if(arrowWinRoute){
  assert(articleSchema,relative+' Arrow Win article schema');
  assert(schemas.some(s=>s['@type']==='SoftwareApplication'&&s.url===arrowWinStore),relative+' verified store schema');
  const anchors=[...html.matchAll(/<a\b[^>]*>/g)].map(([tag])=>tag);
  assert(!html.includes('aw.shareearn3.com'),relative+' no referral landing page');
  const callout=html.match(/<aside class="article-callout"[\s\S]*?<\/aside>/)?.[0];
  const calloutLinks=[...(callout||'').matchAll(/<a\b[^>]*>/g)].map(([tag])=>attr(tag,'href'));
  assert.deepEqual(calloutLinks,[arrowWinStore],relative+' one direct Google Play CTA');
  assert(anchors.some(tag=>attr(tag,'href')==='/'+arrowWinRoute.sibling.replace('index.html','')),relative+' localized sibling link');
  assert.equal((html.match(/<figure class="article-figure"/g)||[]).length,arrowWinRoute.copiesCode?3:2,relative+' editorial screenshots (3 invite, 2 download)');
  const copyButtons=[...html.matchAll(/<button\b[^>]*>/g)].filter(([tag])=>attr(tag,'data-copy')==='V15TT');
  assert.equal(copyButtons.length,Number(arrowWinRoute.copiesCode),relative+' copy only in invite guide');
  const scripts=html.replace(analyticsTag,'').match(/<script(?![^>]*type="application\/ld\+json")[^>]*>/g)||[];
  assert.equal(scripts.length,Number(arrowWinRoute.copiesCode),relative+' script only for invite copy button');
 }
 if(runTeamRoutes.has(relative)){
  assert(articleSchema,relative+' Run Team article schema');
  assert(schemas.some(s=>s['@type']==='SoftwareApplication'&&s.url==='https://play.google.com/store/apps/details?id=com.runteam.android'),relative+' verified Run Team store schema');
  const copyButtons=[...html.matchAll(/<button\b[^>]*>/g)].filter(([tag])=>attr(tag,'data-copy')==='67080261');
  assert.equal(copyButtons.length,1,relative+' runteam copy button');
  assert(html.includes(runTeamInviteUrl),relative+' runteam invite link');
  assert(html.includes('rel="sponsored noopener"'),relative+' runteam sponsored rel');
  const scripts=html.replace(analyticsTag,'').match(/<script(?![^>]*type="application\/ld\+json")[^>]*>/g)||[];
  assert.equal(scripts.length,1,relative+' script only for invite copy button');
  assert.equal((html.match(/<figure class="article-figure"/g)||[]).length,7,relative+' seven editorial screenshots');
 }
 for(const m of html.matchAll(/<img\b[^>]*>/g)){assert(attr(m[0],'alt'),relative+' alt');assert(attr(m[0],'width')&&attr(m[0],'height'),relative+' dimensions');assert(attr(m[0],'loading')==='lazy',relative+' lazy image');imageCount++;}
 for(const schema of schemas)assert(!schema.aggregateRating,relative+' no invented ratings');
}
assert.equal(articleCount,168,'168 localized articles');
for(const route of arrowWinRoutes.keys())assert(htmls.has(path.join(root,route)),route+' generated');
const sitemap=await readFile(path.join(root,'sitemap-0.xml'),'utf8');assert(sitemap.includes('x-default'),'sitemap x-default');for(const lang of ['en','es','pt'])assert(sitemap.includes(`hreflang="${lang}"`),'sitemap '+lang);
const sitemapEntries=new Map([...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].map(match=>[match[1].match(/<loc>(.*?)<\/loc>/)?.[1],match[1]]));
for(const [url,date] of articleDates){const entry=sitemapEntries.get(url);assert(entry,url+' sitemap entry');assert.equal(entry.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.slice(0,10),date,url+' sitemap modification date');}
assert(files.includes(path.join(root,'robots.txt')));assert(files.includes(path.join(root,'social.png')));
console.log(`PASS: ${pages.length} HTML pages, ${articleCount} articles, ${links} local references, ${imageCount} optimized images; canonical, reciprocal hreflang, schema and sitemap verified.`);
