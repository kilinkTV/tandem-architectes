/* Hero d'accueil : mosaïque fixe de 40 photos piochées dans toutes les galeries de projets
   (couvertures + intérieurs), en couleur, avec un voile qui l'estompe légèrement
   pour inciter à regarder les projets en détail plus bas.
   Liste figée (plutôt qu'un tirage aléatoire) pour pouvoir ajuster une case précise si besoin. */

(function () {
  const mosaic = document.getElementById("heroMosaic");
  if (!mosaic) return;

  const MOSAIC_PHOTOS = [
    "https://tandem-architectes.com/wp-content/uploads/2024/03/vignette.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2024/03/carre-image-ornex.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-vignette2.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/10/01-PETITE-HALLE-copie.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-10-2.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-17-vignette.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3542-scaled-1.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/12/03-BOUQUET-PAYSAN.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/04-7-SUR-7.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/10/vignette-5.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/10/07-METROVELO.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/01/01-VIGNETTE-PORTFOLIO-green-er-HOTELS-RESTAURANTS.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/12/16-CASERNE-VERCORS.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/01/01-VIGNETTE-PORTFOLIO-absiskey-TRAVAILLER.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/10/vignette-1.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/11/13-AGENCE-TAG.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/12/17-CRECHE-CLELLES.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/12/16-CENTRE-SOCIAL.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_20200207_18122n72-3.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/12/17-ECOLE-FLORENCE-ARTHAUD.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/vignette-2.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/P1110357-13-7-4.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/06/23-CABINET-DENTAIRE.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/vue-avant-soleil-copie2.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/10/23-CNAMTS.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/10/vignette-12.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/12/vignette-cretets-2.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2020/12/18-MSP-GS2.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-03.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/03/02-MSP-GIERES.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-10-scaled.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-1-scaled.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-08.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-3-scaled.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/medecins-77-01.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-bureaux-canopée-meylan-02.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-05.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/green-er-02-2.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2019/12/IMG_0992-copie-scaled.jpg",
    "https://tandem-architectes.com/wp-content/uploads/2021/01/tandem-architectes-ecole-alpe-d_huez-04.jpg"
  ];

  MOSAIC_PHOTOS.forEach(function (src, i) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = i < 12 ? "eager" : "lazy";
    mosaic.appendChild(img);
  });
})();
