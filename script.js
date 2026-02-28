gsap.registerPlugin(ScrollTrigger);

const car = document.getElementById("man");
const trail = document.getElementById("trail");
const letters = gsap.utils.toArray(".value-letter");
const valueAdd = document.querySelector(".value-add");

const valueRect = valueAdd.getBoundingClientRect();
const letterOffsets = letters.map((letter) => letter.offsetLeft);

const manrWidth = 150;
const endX = window.innerWidth - manWidth;

gsap.to(man, {
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: ".track",
  },
  x: endX,
  ease: "none",
  onUpdate: function () {
    const manX = gsap.getProperty(man, "x") + manWidth / 2;
    letters.forEach((letter, i) => {
      const letterX = valueRect.left + letterOffsets[i];
      letter.style.opacity = manX >= letterX ? 1 : 0;
    });
    gsap.set(trail, { width: manX });
  },
});

gsap.to("#box1", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=400 top",
    end: "top+=600 top",
    scrub: true,
  },
  opacity: 1,
});

gsap.to("#box2", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=600 top",
    end: "top+=800 top",
    scrub: true,
  },
  opacity: 1,
});

gsap.to("#box3", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=800 top",
    end: "top+=1000 top",
    scrub: true,
  },
  opacity: 1,
});

gsap.to("#box4", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=1000 top",
    end: "top+=1200 top",
    scrub: true,
  },
  opacity: 1,
});
