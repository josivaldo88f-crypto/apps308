import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {articles} from './src/data/articles.ts';
const site='https://www.apps308.com';
const languages=['en','es','pt'];
export default defineConfig({
 site,output:'static',trailingSlash:'always',
 i18n:{defaultLocale:'en',locales:languages,routing:{prefixDefaultLocale:true,redirectToDefaultLocale:false}},
 integrations:[sitemap({
  filter:page=>!page.endsWith('/404/')&&!page.endsWith('/404.html')&&!page.endsWith('/privacy/'),
  serialize(item){
   const parts=new URL(item.url).pathname.split('/').filter(Boolean);
   if(parts.length===0){
    const links=languages.map(lang=>({lang,url:`${site}/${lang}/`}));
    links.push({lang:'x-default',url:`${site}/en/`});
    return {...item,links};
   }
   const [locale,slug]=parts;
   if(!languages.includes(locale))return item;
   const article=articles[locale].find(a=>a.slug===slug);
   const links=languages.map(lang=>({lang,url:`${site}/${lang}/${article?articles[lang].find(a=>a.id===article.id).slug+'/':slug?slug+'/':''}`}));
   links.push({lang:'x-default',url:links.find(l=>l.lang==='en').url});
   return {...item,links};
  }
 })],
 build:{inlineStylesheets:'auto'},devToolbar:{enabled:false}
});
