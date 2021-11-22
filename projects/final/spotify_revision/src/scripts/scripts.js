import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    
    scrollTrigger: {
        scroller: "#path-container",
        trigger: ".recent-artist-section",
      }, // start the animation when ".box" enters the viewport (once)
    x: 100
  });