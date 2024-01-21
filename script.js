const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
//   console.log( dets.x);
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
document.addEventListener("mousemove", function (dets) {
//   console.log(dets.x);
  cursorBlur.style.left = dets.x - 65 + "px";
  cursorBlur.style.top = dets.y - 65 + "px";
});

const h4all=document.querySelectorAll("h4");
h4all.forEach(function(elem){
  elem.addEventListener("mouseover",function(){
    cursor.style.scale=3;
    cursor.style.border="1px solid white";
    cursor.style.backgroundColor="transparent"
  })
  elem.addEventListener("mouseout",function(){
    cursor.style.scale=1;
    cursor.style.border="0px solid #95c11e";
    cursor.style.backgroundColor="#95c11e"
  })
})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: " 60px ",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true ,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -60%",
    end: "top -100%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    //markers:true,
    start:"top 60%",
    end:"top 55%",
    scrub:1
  }
})

gsap.from(".card", {
  scale:0.8,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1
  }
})
gsap.from("#colon1", {
 y:-50,
 x:-50,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",  
    // markers:true,
    start:"top 50%",
    end:"top 45%",
    scrub:3
  }
})
gsap.from("#colon2", {
  y:50,
  x:50,
   scrollTrigger:{
     trigger:"#colon1",
     scroller:"body",  
    //  markers:true,
     start:"top 45%",
     end:"top 40%",
     scrub:3
   }
 })

 gsap.from("#page4 h1", {
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"top 85%",
    scrub:1
  }
 })
 
