/* Comportement de l'en-tête, partagé par toutes les pages :
   - bascule transparente/blanche au-dessus d'un hero (page d'accueil)
   - menu mobile plein écran */

(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const hero = document.querySelector(".hero");
  if (hero) {
    const toggleOverlay = function () {
      const threshold = hero.offsetHeight - header.offsetHeight;
      if (window.scrollY < threshold) {
        header.classList.add("site-header--overlay");
      } else {
        header.classList.remove("site-header--overlay");
      }
    };
    toggleOverlay();
    window.addEventListener("scroll", toggleOverlay, { passive: true });
  }

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      header.classList.remove("site-header--overlay");
    });
  }
})();
