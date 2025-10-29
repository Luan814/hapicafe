
const toggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
  });


gsap.registerPlugin(ScrollTrigger);


// 

const videos = [
    "./img/video1.mp4",
    "./img/video2.mp4",
    "./img/video3.mp4"
  ];

let currentIndex = 0;
const player = document.getElementById("bgVideo");

player.src = videos[currentIndex];
player.play();

player.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex >= videos.length) {
    currentIndex = 0;
  }
  player.src = videos[currentIndex];
  player.play();
});



// 

gsap.fromTo(".section2 .img-wrap",
  {
    scale: 0.6,
    opacity: 0.5
  },
  {
    scale: 1,    
    opacity: 1,
    scrollTrigger: {
      trigger: ".section2",
      start: "top 80%",
      end: "center center",
      scrub: true
    },
    ease: "power2.out"
  }
);

gsap.to(".section2 .img-wrap", 
  {
    y: -100, 
    scrollTrigger: {
      trigger: ".section2",
      start: "center center",
      end: "bottom center",
      scrub: true
    }
  }
);

gsap.fromTo(".section2 h2",
  {
    y: 100,
    opacity: 0
  },
  {
    y: 50,
    opacity: 1,
    scrollTrigger: {
      trigger: ".section2",
      start: "center center",
      end: "bottom bottom",
      scrub: true
    }
  }
);

gsap.fromTo(".section2 p",
  {
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".section2 p",
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  }
);


// 

gsap.fromTo(".section5 h2",
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
      trigger: ".section5",
      start: "top 30%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".section5 p",
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
      trigger: ".section5",
      start: "top 30%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.fromTo(".section5 button",
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
      trigger: ".section5",
      start: "top 30%",
      toggleActions: "play none none reverse"
    }
  }
);
gsap.fromTo(".section5 .all-box",
  {
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section5",
      start: "top 30%",
      toggleActions: "play none none reverse"
    }
  }
);

