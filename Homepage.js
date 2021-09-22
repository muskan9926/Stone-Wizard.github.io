TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const controller = new ScrollMagic.Controller();

const t1 = new TimelineMax();

t1.to("#js-slideContainer", 0.5, { xPercent: -20 });
t1.from(content[1], 0.5, { opacity: 0, scale: 2.5 });
t1.to("#js-slideContainer", 0.5, { xPercent: -40 });
t1.from(content[2], 0.5, { opacity: 0, scale: 2.5});
t1.to("#js-slideContainer", 0.5, { xPercent: -60 });
t1.from(content[3], 0.5, { opacity: 0, scale: 2.5});
t1.to("#js-slideContainer", 0.5, { xPercent: -80 });
t1.from(content[4], 0.5, { opacity: 0, scale: 2.5});

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "600%",
})
  .setPin("#js-wrapper")
  .setTween(t1)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller);
