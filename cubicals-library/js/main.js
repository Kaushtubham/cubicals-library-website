(function(){
 var b=document.getElementById('burger'),m=document.getElementById('menu');
 b.onclick=function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};
 m.querySelectorAll('a').forEach(function(a){a.onclick=function(){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
 var t=document.getElementById('track'),n=t.children.length,d=document.getElementById('dots'),s=document.getElementById('slider'),i=0,timer,x0=0;
 for(var k=0;k<n;k++){(function(k){var e=document.createElement('button');e.setAttribute('aria-label','Photo '+(k+1));e.onclick=function(){go(k);auto()};d.appendChild(e)})(k)}
 function go(k){i=(k+n)%n;t.style.transform='translateX(-'+i*100+'%)';[].forEach.call(d.children,function(e,j){e.className=j===i?'on':''})}
 function auto(){clearInterval(timer);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)timer=setInterval(function(){go(i+1)},4000)}
 document.getElementById('prev').onclick=function(){go(i-1);auto()};
 document.getElementById('next').onclick=function(){go(i+1);auto()};
 s.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
 s.addEventListener('touchend',function(e){var x=e.changedTouches[0].clientX-x0;if(Math.abs(x)>45){go(x<0?i+1:i-1);auto()}},{passive:true});
 s.addEventListener('mouseenter',function(){clearInterval(timer)});s.addEventListener('mouseleave',auto);
 go(0);auto();
 var lb=document.getElementById('lb'),li=lb.querySelector('img');
 document.querySelectorAll('.gal button').forEach(function(e){e.onclick=function(){li.src=e.dataset.src;lb.hidden=false}});
 lb.onclick=function(){lb.hidden=true};
 document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true});
})();
