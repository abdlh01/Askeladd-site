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
