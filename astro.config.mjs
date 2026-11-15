import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {articles} from './src/data/articles.ts';
import {articleDates} from './src/data/articleDates.ts';
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
   const links=article
    ?languages.flatMap(lang=>{const match=articles[lang].find(a=>a.id===article.id);return match?[{lang,url:`${site}/${lang}/${match.slug}/`}]:[];})
    :languages.map(lang=>({lang,url:`${site}/${lang}/${slug?slug+'/':''}`}));
   const xDefault=(links.find(l=>l.lang==='en')||links.find(l=>l.lang===locale)||links[0])?.url;
   if(xDefault)links.push({lang:'x-default',url:xDefault});
   return {...item,...(article?{lastmod:articleDates(article).modifiedDate}:{}),links};
  }
 })],
 build:{inlineStylesheets:'auto'},devToolbar:{enabled:false}
});
