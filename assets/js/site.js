
(function(){
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.mobile-nav');
  if(btn && mobile){
    btn.addEventListener('click', () => mobile.classList.toggle('open'));
  }
  const path = location.pathname.split('/').pop() || 'main.html';
  document.querySelectorAll('.topnav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'main.html')) a.classList.add('active');
  });
})();
