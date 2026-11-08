import assert from 'node:assert/strict';
import {readdir,readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?walk(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
const files=await walk(root);const pages=files.filter(f=>f.endsWith('.html'));const origin='https://www.apps308.com';const htmls=new Map();
for(const file of pages)htmls.set(file,await readFile(file,'utf8'));
let articleCount=0,links=0,imageCount=0;const titles=new Set();
const attr=(tag,name)=>tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
function targetFile(url){const pathname=decodeURIComponent(url.pathname);return path.join(root,pathname.endsWith('/')?pathname+'index.html':pathname);}
for(const [file,html] of htmls){
 const relative=path.relative(root,file);if(relative==='404.html')continue;
 const locale=relative.split(path.sep)[0];assert.equal((html.match(/<h1\b/g)||[]).length,1,`${relative}: one h1`);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert(title?.includes('apps308'),relative+' branding');assert(!titles.has(title),relative+' unique title');titles.add(title);
 const canonical=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).find(t=>attr(t,'rel')==='canonical');assert(canonical,relative+' canonical');const canonicalUrl=attr(canonical,'href');assert(canonicalUrl?.startsWith(origin),relative+' canonical origin');
 const alternates=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(t=>attr(t,'rel')==='alternate');assert.equal(alternates.length,4,relative+' alternate count');
 for(const lang of ['en','es','pt','x-default']){const tag=alternates.find(t=>attr(t,'hreflang')===lang);assert(tag,relative+' '+lang);const url=new URL(attr(tag,'href'));assert(files.includes(targetFile(url)),relative+' alternate exists '+url);if(lang!=='x-default'&&['en','es','pt'].includes(locale)){const counterpart=htmls.get(targetFile(url));assert(counterpart?.includes(`hreflang="${locale}" href="${canonicalUrl}"`),relative+' reciprocal alternate');}}
 for(const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)){const tag=match[0];const raw=attr(tag,'href')||attr(tag,'src');if(!raw||raw.startsWith('#')||raw.startsWith('data:')||raw.startsWith('mailto:'))continue;const url=new URL(raw,canonicalUrl);if(url.origin!==origin)continue;assert(files.includes(targetFile(url)),relative+' internal target '+raw);links++;}
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap(m=>JSON.parse(m[1]));
 if(schemas.some(s=>s['@type']==='Article')){articleCount++;assert(schemas.some(s=>s['@type']==='FAQPage'),relative+' faq');if(!relative.includes('freecash')&&!relative.includes('pawns')&&!relative.includes('prime'))assert(!/<script(?![^>]*type="application\/ld\+json")[^>]*>/g.test(html),relative+' zero client JS');assert(html.includes('srcset=')||html.includes('<img'),relative+' screenshot included');if(relative.includes('swagbucks')&&!relative.includes('prime')){assert(html.includes('https://www.swagbucks.com/p/register?rb=NPHSOu1zhQuqNHgx&amp;rp=1'),relative+' swagbucks affiliate link');assert(html.includes('rel="sponsored noopener"'),relative+' sponsored rel');}if(relative.includes('pawns')){assert(html.includes('https://discoverpawns.eu/6823713'),relative+' pawns affiliate link');}if(relative.includes('prime')){assert(html.includes('https://primeopinion.com/register?ref=a32dad65-3bc5-4c37-af10-4f7590595b0d'),relative+' primeopinion affiliate link');}}
 for(const m of html.matchAll(/<img\b[^>]*>/g)){assert(attr(m[0],'alt'),relative+' alt');assert(attr(m[0],'width')&&attr(m[0],'height'),relative+' dimensions');assert(attr(m[0],'loading')==='lazy',relative+' lazy image');imageCount++;}
 for(const schema of schemas)assert(!schema.aggregateRating,relative+' no invented ratings');
}
assert.equal(articleCount,63,'63 localized articles');
const sitemap=await readFile(path.join(root,'sitemap-0.xml'),'utf8');assert(sitemap.includes('x-default'),'sitemap x-default');for(const lang of ['en','es','pt'])assert(sitemap.includes(`hreflang="${lang}"`),'sitemap '+lang);
assert(files.includes(path.join(root,'robots.txt')));assert(files.includes(path.join(root,'social.png')));
console.log(`PASS: ${pages.length} HTML pages, ${articleCount} articles, ${links} local references, ${imageCount} optimized images; canonical, reciprocal hreflang, schema and sitemap verified.`);
