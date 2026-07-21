// Hamburgermeny — åpne/lukke på mobil
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-links');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Lukk menyen om man trykker på en lenke
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
