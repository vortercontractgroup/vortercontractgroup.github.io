const slides=[...document.querySelectorAll('.slide')];
const dotsWrap=document.querySelector('.dots');
let index=0,timer;
slides.forEach((_,i)=>{const d=document.createElement('span');d.className='dot'+(i===0?' active':'');d.addEventListener('click',()=>show(i));dotsWrap.appendChild(d);});
const dots=[...document.querySelectorAll('.dot')];
function show(i){slides[index].classList.remove('active');dots[index].classList.remove('active');index=(i+slides.length)%slides.length;slides[index].classList.add('active');dots[index].classList.add('active');reset();}
function reset(){clearInterval(timer);timer=setInterval(()=>show(index+1),6500);}
document.querySelector('.next').onclick=()=>show(index+1);
document.querySelector('.prev').onclick=()=>show(index-1);
reset();
document.getElementById('year').textContent=new Date().getFullYear();