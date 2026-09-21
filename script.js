const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%';});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.navbar nav').classList.toggle('open'));
document.querySelectorAll('.navbar nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navbar nav').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
