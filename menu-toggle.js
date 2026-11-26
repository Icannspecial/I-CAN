(function(){var b=document.querySelector('[aria-label="Open menu"]'),m=document.querySelector(".f1riac97");if(!b||!m)return;
b.addEventListener("click",function(){m.style.display=m.style.display==="flex"?"none":"flex"});
b.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();b.click()}});
m.addEventListener("click",function(e){if(e.target.closest("a"))m.style.display="none"});})();