// Product-specific, locally bundled artwork. No generic character substitutes.
const brand=name=>'./assets/brands/'+name;
const gameFiles={mlbb:'ml',pubg:'pubg',freefire:'ff',cod:'cod',bloodstrike:'bloodstrike',arena:'arena',hok:'hok'};
export const categoryArtwork=id=>'./assets/catalog/'+id+'-collage.webp';
export const gameArtwork=id=>gameFiles[id]?brand(gameFiles[id]+'.webp'):categoryArtwork('games');
const apps={facebook:'facebook.svg',instagram:'instagram.svg',twitter:'x.svg',whatsapp:'whatsapp.webp',telegram:'telegram.webp',tgnew:'telegram.webp',qq:'qq.webp',chatgpt:'chatgpt.webp'};
export const appArtwork=id=>apps[id]?brand(apps[id]):categoryArtwork('numbers');
const matches=[
 [/telegram.*premium|premium.*telegram|بريميوم|تېلېگرام.*پىرو/i,'telegram_premium.webp'],
 [/chatgpt|chat gpt|چات.*جى|چات.*گى|شات.*جي/i,'chatgpt.webp'],
 [/gemini|جېمىنى|جېمىناي|جيميني/i,'gemini.webp'],
 [/duolingo|دۇئولىنگو|دۇلىنگو|دولينجو/i,'duolingo.webp'],
 [/canva|كانۋا|كانفا/i,'canva.webp'],
 [/proton|پروتون|پروتۇن/i,'protonvpn.webp'],
 [/nord|نورد|نورت/i,'nordvpn.webp'],
 [/google.?one|گوگۇل.*one/i,'google_one.webp'],
 [/gmail|گىمايىل|جىمايىل|جيميل/i,'gmail.svg'],
 [/apple|itunes|ئالما|ئاپپىل|ئاپىل|آبل|أبل/i,'apple.webp'],
 [/netflix|نېتفلىكس|نتفليكس/i,'netflix.webp'],
 [/spotify|سپوتىفاي|سبوتيفاي/i,'spotify.webp'],
 [/facebook|فېسبۇك|فىسبۇك|فيسبوك/i,'facebook.svg'],
 [/instagram|ئىنستىگرام|ئىنسىتگرام|انستغرام|انستقرام/i,'instagram.svg'],
 [/whatsapp|ۋاتساپ|واتساب/i,'whatsapp.webp'],
 [/twitter|تۋىتتېر|تىۋىتتېر|تويتر|\bX\b/i,'x.svg'],
 [/telegram|تېلېگرام|تىلىگرام|تيليجرام|stars|يۇلتۇز/i,'telegram.webp'],
 [/\bQQ\b|چ چ/i,'qq.webp'],
 [/mobile.?legends|\bMLBB\b|موبايل ليجند|موبىل.*لەگېند/i,'ml.webp'],
 [/\bPUBG\b|پۇبجى|پوبجى|ببجي/i,'pubg.webp'],
 [/free.?fire|فرى فاير|فري فاير|فرى فاير|فرىفاير|فىرى.?فاير/i,'ff.webp'],
 [/call.?of.?duty|كال.*ديوتي|كول.*دۇتى/i,'cod.webp'],
 [/blood.?strike|بلود.*سترايك/i,'bloodstrike.webp'],
 [/arena.?breakout|ارينا/i,'arena.webp'],
 [/honor.?of.?kings/i,'hok.webp']
];
export function labelArtwork(label,fallback){
 const match=matches.find(([pattern])=>pattern.test(String(label||'')));
 return match?brand(match[1]):fallback;
}
export function productArtwork(item){
 if(item.category==='games')return gameArtwork(item.group);
 const key=String(item.key||'');
 const prefixes={gemini:'gemini.webp',chatgpt:'chatgpt.webp',duo:'duolingo.webp',canva:'canva.webp',pvpn:'protonvpn.webp',nordvpn:'nordvpn.webp',premium:'telegram_premium.webp',stars:'telegram.webp'};
 for(const [prefix,file]of Object.entries(prefixes))if(key.startsWith(prefix+'_'))return brand(file);
 return labelArtwork(item.label,categoryArtwork(item.category));
}
export function flowArtwork(kind,messages=[]){
 if(kind.startsWith('recharge:'))return categoryArtwork('recharge');
 if(gameFiles[kind])return gameArtwork(kind);
 const fallback=categoryArtwork(kind==='wallet'?'recharge':kind);
 const text=messages.length?messages[messages.length-1].text:'';
 return labelArtwork(text,fallback);
}
export function buttonArtwork(label,kind){
 if(/قايتىش|قايتى|قايتۇر|العودة|رجوع|back|cancel|بىكار|إلغاء|جەزملەش|تأكيد|confirm|تەكشۈر|تحقق|verify/i.test(label))return null;
 return labelArtwork(label,gameFiles[kind]?gameArtwork(kind):null);
}
