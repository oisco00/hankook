
document.addEventListener('DOMContentLoaded', function(){
  const btn=document.querySelector('.menu-toggle');
  const panel=document.querySelector('.mobile-panel');
  if(btn && panel){
    btn.addEventListener('click',()=>panel.classList.toggle('open'));
  }
});
