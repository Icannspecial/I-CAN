
(function(){
var lb=document.getElementById("mb-lb");if(!lb)return;
var items=[].slice.call(document.querySelectorAll(".mb-item")),cur=0,opener=null;
var img=lb.querySelector("img"),cap=lb.querySelector(".mb-cap");
function show(i){cur=(i+items.length)%items.length;var s=items[cur].querySelector("img");img.src=s.src;img.alt=s.alt;cap.textContent=s.alt+" ("+(cur+1)+" / "+items.length+")";}
function open(i){opener=items[i];show(i);lb.hidden=false;document.body.style.overflow="hidden";lb.querySelector(".mb-x").focus();}
function close(){lb.hidden=true;document.body.style.overflow="";if(opener)opener.focus();}
items.forEach(function(b,i){b.addEventListener("click",function(){open(i);});});
lb.querySelector(".mb-x").addEventListener("click",close);
lb.querySelector(".mb-prev").addEventListener("click",function(){show(cur-1);});
lb.querySelector(".mb-next").addEventListener("click",function(){show(cur+1);});
lb.addEventListener("click",function(e){if(e.target===lb)close();});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(cur-1);else if(e.key==="ArrowRight")show(cur+1);});
window.addEventListener("hashchange",function(){if(!lb.hidden)close();});
})();
