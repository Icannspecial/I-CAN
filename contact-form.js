(function(){
var c=document.getElementById("Contact");if(!c)return;
var b=c.querySelector("button.btn");if(!b)return;
var note=document.createElement("p");note.style.cssText="margin-top:12px;font-weight:600";b.insertAdjacentElement("afterend",note);
b.addEventListener("click",function(){
var g=function(i){return document.getElementById(i).value.trim();};
var e=g("email"),n=g("name"),m=g("message"),ph=g("phone");
if(!e||!n||!m){note.textContent="Please fill in your email, name and message.";return;}
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)){note.textContent="Please enter a valid email address.";return;}
var body="Name: "+n+"\nEmail: "+e+(ph?"\nPhone: "+ph:"")+"\n\n"+m;
note.textContent="Opening your email app\u2026";
window.location.href="mailto:info@icanspecialneeds.org?subject="+encodeURIComponent("Website enquiry from "+n)+"&body="+encodeURIComponent(body);
});
})();