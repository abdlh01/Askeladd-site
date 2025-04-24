// إظهار الكروت عند النزول
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.channel-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('revealed');
    }
  });
});