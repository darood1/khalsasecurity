
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open'));});}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('form[data-mailto]').forEach(form=>{
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const recipient=form.dataset.mailto;
  const subject=encodeURIComponent(form.dataset.subject||'Website enquiry');
  const body=encodeURIComponent([...data.entries()].map(([k,v])=>`${k}: ${v}`).join('\n'));
  window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;
 });
});
