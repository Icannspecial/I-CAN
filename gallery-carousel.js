(function(){
var ride=false;
// Nearest element at or above "from" that contains a match, then the match
// itself. Bounded so a page with several carousels cannot reach across to a
// neighbour's controls.
function climb(from,selector){
  var node=from,depth=0;
  while(node&&depth<6){
    var found=node.querySelector(selector);
    if(found){return found;}
    node=node.parentElement;depth++;
  }
  return null;
}
function initCarousels(){
  if(!window.bootstrap||!window.bootstrap.Carousel){return;}
  var roots=document.querySelectorAll(".carousel");
  for(var i=0;i<roots.length;i++){(function(root){
    var items=root.querySelectorAll(".carousel-item");
    if(items.length<2){return;}
    var instance=new window.bootstrap.Carousel(root,{pause:"hover",ride:ride});
    // The chevrons and the page indicator are siblings of the carousel rather
    // than descendants, and they sit at different depths, so each needs its
    // own climb to the nearest ancestor that actually contains it.
    var prev=climb(root,".chev-btn:not(.next-btn)");
    var next=climb(root,".chev-btn.next-btn");
    if(prev){prev.addEventListener("click",function(){instance.prev();});}
    if(next){next.addEventListener("click",function(){instance.next();});}
    var indicator=climb(root,".page-indicator");
    if(indicator){
      root.addEventListener("slid.bs.carousel",function(event){
        indicator.textContent=(event.to+1)+" / "+items.length;
      });
    }
  })(roots[i]);}
}
function initAccordions(){
  var triggers=document.querySelectorAll('[role="button"][aria-controls]');
  for(var i=0;i<triggers.length;i++){(function(trigger){
    var panel=document.getElementById(trigger.getAttribute("aria-controls"));
    if(!panel||panel.className.indexOf("accordion-content")===-1){return;}
    function setOpen(open){
      trigger.setAttribute("aria-expanded",open?"true":"false");
      panel.classList.toggle("expanded",open);
      var icon=trigger.querySelector(".icon");
      if(icon){icon.classList.toggle("expanded-icon",open);}
      var label=trigger.getAttribute("aria-label");
      if(label){
        trigger.setAttribute("aria-label",
          label.replace(open?"Expand":"Collapse",open?"Collapse":"Expand"));
      }
      // The class alone is not enough. The panel styles its open state with the
      // grid 0fr -> 1fr trick, and the panel is a flex item, where that track
      // resolves to zero however it is set — so drive the height directly and
      // let the class carry the padding and icon state.
      var inner=panel.firstElementChild;
      panel.style.overflow="hidden";
      var tr0=panel.style.transition;panel.style.transition="none";var cs=getComputedStyle(panel),pad=(parseFloat(cs.paddingTop)||0)+(parseFloat(cs.paddingBottom)||0);void panel.offsetHeight;panel.style.transition=tr0;var nat=inner?Math.max(inner.scrollHeight,(inner.firstElementChild||inner).scrollHeight):0;panel.style.height=open&&inner?(nat+pad)+"px":"0px";
    }
    function toggle(){
      var open=trigger.getAttribute("aria-expanded")==="true";
      if(!open){
        // One panel at a time, matching the single expandedIndex the section
        // keeps in React state. The panels do not share a close parent, so
        // climb to the nearest ancestor that holds more than one of them.
        var group=trigger,depth=0;
        while(group&&depth<8){
          if(group.querySelectorAll('[role="button"][aria-controls]').length>1){break;}
          group=group.parentElement;depth++;
        }
        if(group){
          var others=group.querySelectorAll('[role="button"][aria-controls]');
          for(var j=0;j<others.length;j++){
            if(others[j]!==trigger&&others[j].getAttribute("aria-expanded")==="true"){
              others[j].click();
            }
          }
        }
      }
      setOpen(!open);
    }
    trigger.addEventListener("click",toggle);
    trigger.addEventListener("keydown",function(event){
      if(event.key==="Enter"||event.key===" "){event.preventDefault();toggle();}
    });
  })(triggers[i]);}
}
function start(){initCarousels();initAccordions();}
if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",start);
}else{start();}
})();