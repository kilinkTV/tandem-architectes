/* Fiche projet : lit ?slug= dans l'URL et rend le contenu depuis data.js */

(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find(function (p) { return p.slug === slug; });
  const container = document.getElementById("projectDetail");

  if (!project) {
    container.innerHTML =
      '<a class="project-detail__back" href="projets.html">Retour à tous les projets</a>' +
      '<h1 class="project-detail__title">Projet introuvable</h1>';
    return;
  }

  const pageTitle = project.title + " | Tandem Architectes";
  const pageUrl = "https://tandem-architectes.com/project/" + project.slug + "/";
  const pageImage = project.heroCover || project.cover || "https://tandem-architectes.com/wp-content/uploads/2021/02/tandem.jpg";

  document.title = pageTitle;
  document.getElementById("pageDescription").setAttribute("content", project.description);
  document.getElementById("pageCanonical").setAttribute("href", pageUrl);
  document.getElementById("ogUrl").setAttribute("content", pageUrl);
  document.getElementById("ogTitle").setAttribute("content", pageTitle);
  document.getElementById("ogDescription").setAttribute("content", project.description);
  document.getElementById("ogImage").setAttribute("content", pageImage);
  document.getElementById("twitterTitle").setAttribute("content", pageTitle);
  document.getElementById("twitterDescription").setAttribute("content", project.description);

  const categoryLabels = project.categories
    .map(function (slug) {
      const cat = CATEGORIES.find(function (c) { return c.slug === slug; });
      return cat ? cat.label : slug;
    })
    .join(" · ");

  const fullText = [project.description, project.story]
    .filter(Boolean)
    .join("\n\n");

  let html = '';
  html += '<a class="project-detail__back" href="projets.html">Retour à tous les projets</a>';
  html += '<p class="project-detail__categories">' + categoryLabels + '</p>';
  html += '<h1 class="project-detail__title">' + project.title + '</h1>';

  if (fullText) {
    html += fullText
      .split(/\n{2,}/)
      .map(function (para) {
        return '<p class="project-detail__desc">' + para.replace(/\n/g, '<br>') + '</p>';
      })
      .join('');
  }

  const heroCover = project.heroCover || project.cover;
  const hasPhotos = Boolean(heroCover) || project.gallery.length > 0;

  if (!hasPhotos && !fullText) {
    html += '<p class="project-detail__notice">Le descriptif complet et les photos de ce projet sont en cours de mise à jour.</p>';
  } else if (!hasPhotos) {
    html += '<p class="project-detail__notice">Les photos de ce projet sont en cours de mise à jour.</p>';
  } else if (project.gallery.length === 0 && !fullText) {
    html += '<p class="project-detail__notice">Le descriptif complet et les autres photos de ce projet sont en cours de mise à jour.</p>';
  } else if (project.gallery.length === 0) {
    html += '<p class="project-detail__notice">Les autres photos de ce projet sont en cours de mise à jour.</p>';
  } else if (!fullText) {
    html += '<p class="project-detail__notice">Le descriptif de ce projet est en cours de mise à jour.</p>';
  }

  if (heroCover) {
    html += '<div class="project-detail__cover"><img src="' + heroCover + '" alt="' + project.title + '"></div>';
  }

  if (project.gallery.length > 0) {
    html += '<div class="project-detail__gallery">';
    project.gallery.forEach(function (src, i) {
      html += '<figure><img src="' + src + '" alt="' + project.title + ' — photo ' + (i + 1) + '" loading="lazy"></figure>';
    });
    html += '</div>';
  }

  html += '<div class="project-detail__back--bottom-wrap"><a class="project-detail__back project-detail__back--bottom" href="projets.html">Retour à tous les projets</a></div>';

  container.innerHTML = html;
})();
