import type {Article} from './articles';

// Preserve the original publication dates when an existing guide is revised.
export function articleDates(article:Article){
 const publishedDate=article.app==='arrowwin'?'2026-11-23':(article.app==='cashfortunedrama'||article.id==='short-drama-apps-compared'||article.id==='opinion-vs-primeopinion-attapoll'||article.id==='dramabox-recharge'||article.id==='microsoft-catalog')?'2026-11-18':(article.app==='tiktoklite'||article.app==='dramagood')?'2026-11-16':article.app==='attapoll'?'2026-11-15':(article.app==='cashdrama'||article.app==='dramabox'||['nordvpn-vs-surfshark','freecash-reviews','freecash-bonus-cashout','freecash-games-offers'].includes(article.id))?'2026-11-14':article.app==='pinedrama'?'2026-11-13':['nordvpn','surfshark','kaspersky'].includes(article.app)?'2026-11-12':article.app==='primeopinion'?'2026-11-08':article.app==='pawns'?'2026-11-08':article.app==='swagbucks'?'2026-11-07':'2026-11-05';
 const modifiedDate=article.modifiedDate||(publishedDate>'2026-11-11'?publishedDate:'2026-11-11');
 return {publishedDate,modifiedDate};
}
