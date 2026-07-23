/* Page d'accueil : sélection éditoriale de projets (un par domaine environ) */

(function () {
  const featuredSlugs = [
    "comme-un-roc",
    "sur-la-bonne-piste",
    "rehabiliter-la-jeunesse",
    "dans-la-boite",
    "a-votre-sante",
    "amplitude"
  ];

  const grid = document.getElementById("projectPreview");
  if (!grid) return;

  featuredSlugs.forEach(function (slug) {
    const project = PROJECTS.find(function (p) { return p.slug === slug; });
    if (!project) return;

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
})();
