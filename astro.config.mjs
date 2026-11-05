import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {articles} from './src/data/articles.ts';
const site='https://www.apps308.com';
const languages=['en','es','pt'];
export default defineConfig({
 site,output:'static',trailingSlash:'always',
 i18n:{defaultLocale:'en',locales:languages,routing:{prefixDefaultLocale:true,redirectToDefaultLocale:false}},
 integrations:[sitemap({
  i18n:{defaultLocale:'en',locales:{en:'en',es:'es',pt:'pt'}},
  filter:page=>!page.endsWith('/404/')&&!page.endsWith('/404.html'),
  serialize(item){
   const [locale,slug]=new URL(item.url).pathname.split('/').filter(Boolean);
   if(!languages.includes(locale))return item;
   const article=articles[locale].find(a=>a.slug===slug);
   const links=languages.map(lang=>({lang,url:`${site}/${lang}/${article?articles[lang].find(a=>a.id===article.id).slug+'/':slug?slug+'/':''}`}));
   links.push({lang:'x-default',url:links.find(l=>l.lang==='en').url});
   return {...item,links};
  }
 })],
 build:{inlineStylesheets:'auto'},devToolbar:{enabled:false}
});
