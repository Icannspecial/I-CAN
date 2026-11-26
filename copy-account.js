document.addEventListener("DOMContentLoaded",function(){
var cp=document.getElementById("copy-acct");
if(cp)cp.addEventListener("click",function(){var t=document.getElementById("acct-num").textContent,done=function(){cp.textContent="Copied";setTimeout(function(){cp.textContent="Copy"},1800)};
 try{navigator.clipboard.writeText(t).then(done,fb)}catch(e){fb()}
 function fb(){try{var r=document.createRange();r.selectNodeContents(document.getElementById("acct-num"));var s=getSelection();s.removeAllRanges();s.addRange(r);document.execCommand("copy");done()}catch(e){}}});
});