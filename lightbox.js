(function(){
var keys=["home","about-us","team","gallery","faq","donate","contact"],T={home:"Empowering Special Needs Children","about-us":"About us",team:"Team",gallery:"Gallery",faq:"FAQ",donate:"Donate",contact:"Contact"};
var main=document.querySelector("main"),menu=document.querySelector(".f1riac97");
function show(k){keys.forEach(function(x){document.getElementById("view-"+x).style.display=x===k?"":"none"});
 document.title=T[k]+" - I CAN SPECIAL NEEDS FOUNDATION";
 document.querySelectorAll(".nav-link,.btn").forEach(function(a){if(a.getAttribute("href")==="#"+k&&a.closest("header,[class*=f1wj6qa5]"))a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});}
function route(){var h=location.hash.slice(1),k=keys.indexOf(h)>-1?h:null,el=null;
 if(!k&&h){el=document.getElementById(h);var v=el&&el.closest(".view");k=v?v.id.slice(5):"home"}
 show(k||"home");if(el)el.scrollIntoView();else main.scrollTop=0;if(menu)menu.style.display="none";}
window.addEventListener("hashchange",route);route();
})();