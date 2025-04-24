document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".channel");

  const revealOnScroll = () => {
    sections.forEach((el) => {
      const pos = el.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#32cd32" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#32cd32",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } },
  },
  retina_detect: true,
});
