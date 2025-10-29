gsap.fromTo(".section2 h2",
  {
    y: 100,
    opacity: 0.5
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section2",
      start: "top 50%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".section2 p",
  {
    y: 100,
    opacity: 0.5
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section2",
      start: "top 50%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".section2 img",
    { scale: 0.1 }, 
    { 
        scale: 1, 
        scrollTrigger: {
            trigger: ".section2",
            start: "top 50%",  
            end: "center", 
            scrub: 0.5,      
            toggleActions: "play none none none" 
        }
    }
);