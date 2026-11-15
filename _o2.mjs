import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium', args:['--no-sandbox'] });
const p = await b.newPage({ viewport:{width:360,height:800} });
for (const path of ['/','/services','/training','/lagos','/pest-control','/faqs','/clients','/gallery','/about','/abuja','/terms','/blog','/contact','/blog/why-trained-cleaners-matter']) {
  await p.goto('http://localhost:3000'+path,{waitUntil:'networkidle'});
  const o = await p.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
  if (o>0) console.log('OVERFLOW', path, o);
}
console.log('overflow scan done');
await b.close();
