
const pageMap = {
  home:{title:'메인', eyebrow:'HAN KOOK PRECISION', file:'pages/home.html'},
  company:{title:'회사소개', eyebrow:'COMPANY PROFILE', file:'pages/company.html'},
  history:{title:'연혁', eyebrow:'HISTORY', file:'pages/history.html'},
  products:{title:'주요 생산 품목', eyebrow:'PRODUCTS', file:'pages/products.html'},
  facility:{title:'설비 · 계측기', eyebrow:'FACILITY & MEASUREMENT', file:'pages/facility.html'},
  automation:{title:'자동화 설비', eyebrow:'SMART AUTOMATION', file:'pages/automation.html'},
  certifications:{title:'인증현황', eyebrow:'CERTIFICATIONS', file:'pages/certifications.html'},
  contact:{title:'문의 / 오시는 길', eyebrow:'CONTACT', file:'pages/contact.html'}
};
const pageOrder = Object.keys(pageMap);
const frame = document.getElementById('contentFrame');
const titleEl = document.getElementById('pageTitle');
const eyebrowEl = document.getElementById('pageEyebrow');
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('menuToggle');
const prevBtn = document.getElementById('prevPageBtn');
const nextBtn = document.getElementById('nextPageBtn');
let currentKey = 'home';

function setActiveLinks(key){
  document.querySelectorAll('[data-page]').forEach(el=>{
    el.classList.toggle('active', el.dataset.page === key);
  });
}
function loadPage(key, push=true){
  if(!pageMap[key]) key = 'home';
  currentKey = key;
  const page = pageMap[key];
  titleEl.textContent = page.title;
  eyebrowEl.textContent = page.eyebrow;
  frame.src = page.file;
  setActiveLinks(key);
  if(push) history.replaceState(null,'',`#${key}`);
  if(window.innerWidth <= 960) sidebar.classList.remove('open');
}
function getKeyFromHref(href){
  const match = Object.entries(pageMap).find(([,v])=>href.includes(v.file));
  return match ? match[0] : 'home';
}

document.querySelectorAll('a[data-page]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    loadPage(a.dataset.page);
  });
});
prevBtn.addEventListener('click', ()=>{
  let idx = pageOrder.indexOf(currentKey) - 1;
  if(idx < 0) idx = pageOrder.length - 1;
  loadPage(pageOrder[idx]);
});
nextBtn.addEventListener('click', ()=>{
  let idx = pageOrder.indexOf(currentKey) + 1;
  if(idx >= pageOrder.length) idx = 0;
  loadPage(pageOrder[idx]);
});
toggle.addEventListener('click', ()=> sidebar.classList.toggle('open'));
window.addEventListener('keydown', e=>{
  if(e.key === 'ArrowLeft') prevBtn.click();
  if(e.key === 'ArrowRight') nextBtn.click();
});
const initial = location.hash.replace('#','') || 'home';
loadPage(initial, false);
