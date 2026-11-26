
(function(){
var ds=document.querySelectorAll("#Gallery .carousel-item>div");
for(var i=0;i<ds.length;i++){var im=ds[i].querySelector("img");if(!im)continue;
var b=document.createElement("span");b.className="bgblur";b.setAttribute("aria-hidden","true");
b.style.backgroundImage='url("'+im.getAttribute("src")+'")';ds[i].insertBefore(b,im);}
})();
