/* Page "Projets" : construit la nav de filtres + la grille complète à partir de data.js.
   Lit ?filter=<slug> dans l'URL pour préselectionner une catégorie (liens du footer / sous-menu). */

(function () {
  const nav = document.getElementById("categoryNav");
  const grid = document.getElementById("projectGrid");
  const params = new URLSearchParams(window.location.search);
  const initialFilter = params.get("filter") || "all";

  CATEGORIES.forEach(function (cat) {
    const btn = document.createElement("button");
    btn.className = "category-nav__item";
    btn.dataset.filter = cat.slug;
    btn.textContent = cat.label;
    nav.appendChild(btn);
  });

  function renderGrid(filter) {
    grid.innerHTML = "";
    const list = filter === "all"
      ? PROJECTS
      : PROJECTS.filter(function (p) { return p.categories.indexOf(filter) !== -1; });

    if (list.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Aucun projet dans cette catégorie pour le moment.";
      grid.appendChild(empty);
      return;
    }

    list.forEach(function (project) {
      const a = document.createElement("a");
      a.className = "project-tile";
      a.href = "project.html?slug=" + encodeURIComponent(project.slug);

      const photo = project.cover
        ? '<img src="' + project.cover + '" alt="' + project.title + (project.description ? ' — ' + project.description : '') + '" loading="lazy">'
        : '<span class="project-tile__placeholder">' + project.title + '</span>';

      a.innerHTML =
        photo +
        '<span class="project-tile__label">' +
          '<span class="project-tile__title">' + project.title + '</span>' +
          (project.description ? '<p class="project-tile__desc">' + project.description + '</p>' : '') +
        '</span>';

      grid.appendChild(a);
    });
  }

  function setActive(filter) {
    nav.querySelectorAll(".category-nav__item").forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.filter === filter);
    });
  }

  nav.addEventListener("click", function (e) {
    const btn = e.target.closest(".category-nav__item");
    if (!btn) return;
    setActive(btn.dataset.filter);
    renderGrid(btn.dataset.filter);

    const url = new URL(window.location.href);
    if (btn.dataset.filter === "all") {
      url.searchParams.delete("filter");
    } else {
      url.searchParams.set("filter", btn.dataset.filter);
    }
    window.history.replaceState({}, "", url);
  });

  setActive(initialFilter);
  renderGrid(initialFilter);
})();
