/* Données du prototype — extraites du site WordPress existant (tandem-architectes.com)
   Catégories : rehabilitation, logements, equipements, montagne, interieur

   cover      : vignette carrée (grille d'accueil / page Projets)
   heroCover  : photo principale utilisée en tête de la fiche projet (quand disponible)
   gallery    : reste des photos du projet */

const CATEGORIES = [
  { slug: "rehabilitation", label: "Réhabilitation" },
  { slug: "logements", label: "Logements" },
  { slug: "equipements", label: "Équipements" },
  { slug: "montagne", label: "Montagne" },
  { slug: "interieur", label: "Intérieur" },
];

const PROJECTS = [
  {
    slug: "techno",
    title: "Techno",
    description: "Rénovation - extension du collège des pierres plantées à Montalieu Vercieu (38)",
    categories: ["rehabilitation", "equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2024/03/vignette.jpg",
    gallery: []
  },
  {
    slug: "circulez-2",
    title: "Circulez !",
    description: "Construction de 38 logements à Ornex (01)",
    categories: ["logements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2024/03/carre-image-ornex.jpg",
    gallery: []
  },
  {
    slug: "rehabiliter-la-jeunesse",
    title: "Réhabiliter la jeunesse",
    description: "Réhabilitation et extension de l’unité éducative d’hébergement collectif à Corenc (38)",
    categories: ["rehabilitation", "logements", "equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-vignette2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2024/03/image-principale-UEHC-Corenc-PJJ-Tandem-architectes-vigne.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-10-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-11-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-12-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-14-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-16-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-02-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-03-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-04-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-06-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-07-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-08-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/03/UEHC-Corenc-PJJ-Tandem-architectes-09-scaled.jpg"
    ]
  },
  {
    slug: "passe-industriel-2",
    title: "Tout se transforme",
    description: "Restructuration d’une halle industrielle à Grenoble (38)",
    story: "Restructuration en hôtel d'entreprises d'une Halle, ancienne usine de fabrication de conduites forcées datant du début du siècle.\n\nLes bureaux constituants deux volumes courbes de teinte vive se déploient sur la longueur du bâtiment dans un esprit industriel.\n\nIls délimitent un hall central et mettent en valeur par un effet de contraste l'architecture du lieu.",
    categories: ["rehabilitation", "equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/10/01-PETITE-HALLE-copie.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/VISUEL-PRINCIPAL-petite-halle.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2019/12/tandem-architectes-petite-halle-grenoble-bouchayet-viallet-05.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/rehabilitation-patrimoniale.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/petite-halle-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/smartphone-tandem-architectes-petite-halle-grenoble-bouchayet-viallet-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/COUPE-LONGITUDINALE-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/revivant-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/PLANCHE-FACADE-LONGITUDINALE-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P0604-PETITE-HALLE-BV-NB.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/hommes-et-femmes-travail-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/revivant-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/165_6561.jpg"
    ]
  },
  {
    slug: "coup-de-frais",
    title: "Coup de frais",
    description: "Rénovation et extension de l'office de tourisme d'Oz-en-Oisans (38)",
    story: "Rénovation et extension de l'office de tourisme d'Oz-en-Oisans.\n\nPartenaires de maîtrise d'œuvre : AIM – SORAETEC – HIGH B TECH – ECI NEYTON INGENIERIE – STUDIOFOLK // Denis Carrier\n\nCrédit photos : J. Guillou",
    categories: ["rehabilitation", "equipements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-10-2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-0-2.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-7-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/carre-noir-logo-oz.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-1-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/carre-noir-partenaires.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-2-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-8-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-12.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-5-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-6-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/carre-noir-prix-surface-oz.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-3-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-14.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/office-de-tourisme-oz-en-oisans-TANDEM-13-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2024/01/carre-noir-lieu-date-oz-1.jpg"
    ]
  },
  {
    slug: "coup-denvoi",
    title: "Coup d’envoi",
    description: "Construction d'un vestiaire de football à Coublevie (38)",
    story: "Construction du vestiaire de football de Coublevie (38) – La Dalmassière\n\nLe projet propose une intégration discrète dans le village en reprenant gabarits et les teinte des constructions environnantes.\n\nL'emploi de matériaux bruts comme le béton teinté dans la masse, la maille métallique et l'agglo peint confèrent au projet un aspect contemporain discret et une pérennité certaine.\n\nCrédit photos : J. Guillou",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-17-vignette.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2023/01/VISUEL-PRINCIPAL-Page-gabarit-la-dalmassiere-coublevie-football.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-08.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-12.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-06.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-15.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-07.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-09.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-13.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-11.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-14.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-10.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/01/la-dalmassiere-coublevie-football-vestiaire-05.jpg"
    ]
  },
  {
    slug: "a-votre-sante",
    title: "À votre santé",
    description: "Construction d'une maison de santé pluridisciplinaire à Gières (38)",
    story: "Gestion de la concertation avec les professionnels de santé, programmation et construction de la maison médicale de la commune de Gières comprenant :\n8 cabinets de médecins généralistes, 11 cabinets paramédicaux et 1 cabinet de kinésithérapeutes.\nUn bâtiment aux lignes épurées en béton préfabriqué qui accueille 3 niveaux de plateaux médicaux. Le travail des façades permet une évolutivité dans le temps de l'usage du bâtiment.",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/03/02-MSP-GIERES.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/VISUEL-PRINCIPALMSP-GIERES.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2022/01/maison-de-sante-gieres-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/msp-i1-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/IMG_20201208_102222-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/msp-i3-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/maison-de-sante-gieres-4.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/maison-de-sante-gieres-3.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/maison-de-sante-gieres-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/ELEGIA-netb.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/IMG_20201208_102258-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/IMG_20201208_102345-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/maison-de-sante-gieres-6.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/msp-i2-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/surface-845-budget-1440.png",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/maison-de-sante-gieres-5.jpg"
    ]
  },
  {
    slug: "vitamines",
    title: "Vitamines",
    description: "Construction d’un point de vente fermier à Apprieu (38)",
    story: "Réalisation d'un magasin point de vente fermier « Le Bouquet Paysan » comprenant bureaux, zones de stockage et préparation.\n\nBâtiment en ossature et bardage bois avec une entrée protégée aux couleurs « gourmandes ».\n\nAménagement intérieur conçu dans le même esprit que le bâtiment avec des matériaux brut (triply) ponctué de métal et d'orange.",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/12/03-BOUQUET-PAYSAN.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-bouquet-paysan.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/05/logo-bievre-est.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-3-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-8-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Vitaminesville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-5-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1040457-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Vitaminessurface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-13-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-9-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-10-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/bouquet-paysan-exterieur-HD-15-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/IMGP4107-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/IMGP4151-copie-scaled.jpg"
    ]
  },
  {
    slug: "7-jours-sur-7",
    title: "7 jours sur 7",
    description: "Création d'un cabinet médical d'urgence à Grenoble (38)",
    story: "Concept d'espace / Aménagement / Agencement / Mobilier / Signalétique\n\nMédecins 7/7 est un cabinet médical d'urgence ouvert de 8h à minuit, 7 jours sur 7.\n\nIl comporte quatre cabinets de consultation, deux infirmeries, un espace de formation, un accueil et une salle d'attente.\n\nL'idée était, dans une approche décomplexée du rapport médecin-patient, de proposer une autre image du rendez-vous médical. De l'accueil à la consultation, tendre la main au patient pour une médecine plus humaine dans un contexte d'urgence.\n\nNotre démarche s'est inscrite dans un travail pluridisciplinaire pour proposer une approche de design globale du projet : un bureau d'études fluides, une agence de communication, un designer, un illustrateur, un architecte.\n\nDéfinition d'un concept spatial duplicable : un cabinet urgentiste d'un nouveau genre.\n\nConception de l'espace pour que le lieu se vive comme une déambulation où chaque individu traverse différentes fonctionnalités, tour à tour celui qui attend, celui qui rencontre, celui qui est écouté.\n\nPensé pour que le cabinet puisse être identifié rapidement comme lieu d'accueil dans la ville, le design global du projet communique une énergie positive par le choix du graphisme, des couleurs et des matériaux.",
    categories: ["equipements", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/04-7-SUR-7.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2020/01/02-VISUEL-PRINCIPAL-medecins-7-sur-7.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/01/medecins-77-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/medecins-7sur7.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/medecins-77-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/medecins-77-03-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/medecins-77-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/Localite.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/medecins-77-03-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/medecins-77-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/7jours-sur7-surface-budget.png"
    ]
  },
  {
    slug: "mise-au-vert",
    title: "Mise au vert",
    description: "Construction d'un bâtiment de bureaux à Meylan (38)",
    story: "Construction des bureaux Canopée\nRéalisation de l'extension des bureaux du bureau d'études fluides CET à Meylan pour accueillir le bureau d'étude HQE Canopée.\nUn élément de forme cubique vient compléter le bâtiment existant à l'architecture modulaire hexagonale proliférante datant des années 1970. Le cube de teinte verte nous apparaît depuis la rue dans son écrin de végétation.\nLe bâtiment 100% en ossature bois est à haute qualité environnementale : chauffage avec un petit poêle étanche à granulés bois, isolation performante en laine de bois et liège, gestion des apports solaires, protections des baies par brises soleil orientables, ventilation traversante.",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/10/vignette-5.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/10/canopee-entête-L_1024-575.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-bureaux-canopée-meylan-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/mise-au-vert-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-bureaux-canopée-meylan-06.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2020/01/INSERT-SPECIFICITE-canopee.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-bureaux-canopée-meylan-05.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/mise-au-vert-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/SMARTPHONE-tandem-architectes-bureaux-canopée-meylan-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-bureaux-canopée-meylan-04.jpg"
    ]
  },
  {
    slug: "ca-va-rouler",
    title: "Ça va rouler",
    description: "Construction du technicentre de Métrovélo à Sassenage (38)",
    story: "Construction d'un atelier de réparation et de stockage des vélos.\n\nLe projet répond à 2 enjeux majeurs :\n\nLa lumière traverse la halle existante et éclaire le bâtiment via un patio central. Ce patio devient le cœur du projet, à la fois espace de détente et nœud de circulation.\n\nLe bâtiment doit capter l'attention des milliers de véhicules qui passent de manière à promouvoir l'image dynamique de Métrovélo.\n\nLe programme comprend des bureaux – ateliers de réparations – hangar de stockage.",
    categories: ["rehabilitation", "equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/10/07-METROVELO.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/VISUEL-PRINCIPAL-METROVELO.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/GAM.gif",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-05.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-24.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/ca-va-rouler-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-12.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/duneuf.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-21.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-23.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-20.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/ca-va-rouler-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-18.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-19.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-17.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/SMARTPHONE-tandem-architectes-atelier-metrovelo-sassenage-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-07.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-GIF-ANIME.gif",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-atelier-metrovelo-sassenage-25.jpg"
    ]
  },
  {
    slug: "a-table",
    title: "À table",
    description: "Aménagement d'un restaurant universitaire dans le bâtiment Green-Er à Grenoble",
    story: "Aménagement / Agencement / Mobilier / Design mural / Signalétique\n\nAménagement d'un restaurant universitaire de 320 couverts dans le bâtiment Green-ER à Grenoble.\n\nGreen-ER regroupe les acteurs de la formation et de la recherche autour des nouvelles technologies de l'énergie. Le site héberge l'école d'ingénieurs Grenoble INP – Ense³, des formations licence et master de l'Université Grenoble Alpes (PhiTEM), le laboratoire G2Elab et des plateformes formation/recherche (PREDIS et MEE).\n\nL'enjeu était de différencier les espaces, travailler plusieurs ambiances, signaler efficacement dans un grand volume.\n\nNotre proposition a été de créer un environnement avec des zones différenciées, à la fois douce et tonique et en lien avec la thématique de l'établissement : écologie et innovation.\n\nSeul ou à plusieurs, l'espace laisse un choix sur la manière de consommer son repas : à différentes hauteurs d'assise, dans un espace plus ou moins ouvert.\n\nMélange de teintes anthracites, vertes et oranges, présence de tableaux végétaux et de graphismes abstraits, dynamiques et intemporels.",
    categories: ["equipements", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/01/01-VIGNETTE-PORTFOLIO-green-er-HOTELS-RESTAURANTS.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/01/02-VISUEL-PRINCIPAL-1.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2022/09/logo-3.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/green-er-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/green-er-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/green-er-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/localite-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/A-table-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/green-er-04-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/green-er-04-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/green-er-03.jpg"
    ]
  },
  {
    slug: "y-a-pas-le-feu",
    title: "Y a pas le feu",
    description: "Construction d’un centre d’incendie et de secours à Villard de Lans (38)",
    story: "Le bâtiment s'appuie sur un volume principal qui abrite la remise.\n\nEn emboitement deux volumes différenciés recouvrent la partie casernement.\n\nLes toitures de ces derniers sont à pente unique pour éviter toute décharge de neige sur les aires de circulation des véhicules.\n\nLe bâtiment est posé sur un socle de murs isolés, réhaussé d'une charpente bois.\n\nBéton, bois, bardage métallique à joint debout ; le vocabulaire des constructions d'altitudes habille une architecture essentiellement fonctionnelle.",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/12/16-CASERNE-VERCORS.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-caserne-vercors.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/SDIS-ISERE.gif",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/IMG_0992-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/IMG_0969-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Y-a-pas-le-feu-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/SMARTPHONE-tandem-architectes-caserne-pompier-villard-de-lans-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Y-a-pas-le-feu-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/IMGP6420-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2020/01/INSERT-SPECIFICITE-caserne-vercors.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/IMG_0959-copie-scaled.jpg"
    ]
  },
  {
    slug: "amplitude",
    title: "Open space",
    description: "Réhabilitation d'un espace commercial en espace tertiaire collaboratif à Grenoble",
    story: "Concept d'Aménagement / Agencement / Mobilier / Design mural / Signalétique\n\nCréation d'une antenne de l'agence d'innovation Absyskey à Grenoble.\n\nLe site de Grenoble comprend : un salon d'accueil, des bureaux individuels et des Open spaces, une salle de réunion, des box de micro-réunion, un petit salon et une cuisine.\n\nL'aménagement a été conçu pour correspondre aux nouvelles modalités de travail, plus nomades et flexibles, avec des espaces dédiés aux fonctions d'usage plutôt qu'à chacun de ses occupants.\n\nL'espace est caractérisé par la présence d'une grande verrière autour de laquelle s'articulent des volumes plus ou moins grands et plus ou moins fermés.\n\nL'ambiance composée d'éléments hétéroclites qui mêlent l'ancien (avec les garde-corps conservés) et le contemporain (avec notamment les fresques du graphiste NKDM que nous avons retenu pour l'occasion) donne au lieu un caractère atypique. Le choix des teintes (rouge, bleu, gris) et du mobilier donne à l'espace un esprit « comme à la maison » propice à la créativité et la collaboration.\n\nAbsisKey est une agence d'innovation dont l'objectif est de rendre ses clients et ses partenaires plus innovants en leur apportant la stratégie, les outils et les financements publics. L'agence est présente dans cinq villes de France, avec des bureaux physiques et ouverts au monde. Elle dispose en interne de consultants spécialisés en Montage et en Management du Financement des Projets Collaboratifs et Individuels de Recherche et d'Innovation, nationaux et européens, ainsi que d'experts évaluateurs auprès de la Commission Européenne.",
    categories: ["rehabilitation", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/01/01-VIGNETTE-PORTFOLIO-absiskey-TRAVAILLER.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/02-VISUEL-PRINCIPALabsiskey.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/abiskeyB.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3539-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3532-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3550-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3526-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/localite-3.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3536-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3542-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/amplitude-mk.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_3543-scaled-1.jpg"
    ]
  },
  {
    slug: "comme-un-roc",
    title: "Comme un roc",
    description: "Construction d'un groupe scolaire de l’Alpe d’Huez (38)",
    story: "En équipe de maîtrise d'œuvre avec Atelier D'is.\n\nLe bâtiment est conçu pour le bien-être des usagers dans des conditions climatiques fortes.\n\nL'école se développe en éventail sur deux niveaux pour s'ouvrir largement au soleil et profiter du grand paysage. Le programme comprend 3 salles de classe maternelle, 4 salles de classe élémentaire, une cuisine centrale et l'aménagement des espaces extérieurs.\n\nUne école ouverte sur l'extérieur :\n– Cuisine centrale permettant la livraison de repas à l'extérieur.\n– Salle d'activité et salles de classe fonctionnant en périscolaire et en centre de loisirs.\n– Liaison directe avec les pistes de ski.\n– Un chantier visité par les élèves, les professeurs et les parents pour faciliter l'appropriation des lieux.",
    categories: ["equipements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/10/vignette-1.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-ecole-Alpe.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/alpe-huez.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/tandem-architectes-ecole-alpe-d_huez-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/PLAN-MASSE-CADRE-pour-plan-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/Ecole-Alpe-d_Huez-Tandem-Architectes-3.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/laureat-de-concours.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/DSC_8491-corrigee-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/P1090624-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/DSC_8592-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMGP3492-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Comme-un-roc-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMGP3506-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/DSC_8532-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMGP3501-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMGP3497-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Comme-un-roc-surface-budget.png"
    ]
  },
  {
    slug: "circulez",
    title: "Circulez !",
    description: "Rénovation d'une agence de mobilité TAG, à Grenoble",
    story: "Aménagement / Agencement / Design mural / Signalétique\n\nCréation d'une agence de mobilité à Grenoble.\n\nLe site de Grenoble comprend : un espace de vente et d'accueil du public, des bureaux, une salle de réunion, un point téléphonie.\n\nConçue dans un design très dépouillé, l'agence mobilité Alsace Lorraine propose un espace ouvert et lumineux pour accueillir le public. En dehors des quelques touches de rose fuchsia, les volumes sont entièrement blancs et composés de formes géométriques très simples. L'écriture contemporaine dessine un lieu d'une élégance intemporelle.\n\nL'agence mobilité est un lieu d'informations sur les solutions de déplacements métropolitains, conseils, achat de titres de transports tous réseaux (TAG, TER, Transisère)…",
    categories: ["rehabilitation", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/11/13-AGENCE-TAG.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/11/02-VISUEL-PRINCIPAL-agence-mobilite.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/GAM.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/agence-mobilite-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/agence-mobilite-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/agence-mobilite-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/Localite-1-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/circulez-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/agence-mobilite-03.jpg"
    ]
  },
  {
    slug: "lagrapheuse",
    title: "L’agrapheuse",
    description: "Réhabilitation et extension d’une crèche à Clelles (38)",
    story: "Aménagement d'une crèche de 10 places et d'une salle communale dans un bâtiment existant typique de l'architecture du Trièves.\n\nDeux extensions sont créées pour abriter l'accueil, la cuisine et le préau.\n\nPour rester dans une volumétrie simple, les extensions sont conçues comme des boîtes en bois suspendues ou accrochées au corps du bâtiment.\n\nUne passerelle métallique permet l'accès depuis le parvis créé.",
    categories: ["rehabilitation", "equipements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/12/17-CRECHE-CLELLES.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-creche-Clelles.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/clelles.gif",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1040916-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1040921-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/l-agrapheuseville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/COUPE-PR-PLANCHE-copie-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1040947-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/lagrapheuse.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/tandem-architectes-crèche-clelles-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/l-agrapheusesurface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1050032-copie-scaled.jpg"
    ]
  },
  {
    slug: "comme-une-tomate",
    title: "Comme une tomate",
    description: "Réhabilitation d'un centre social à Fontaine (38)",
    story: "Réhabilitation du Centre Social Romain Rolland à Fontaine (38)\n\nExemplarité énergétique : réhabilitation thermique très performante.\n\nIntégration du bois dans l'isolation, le bardage et le chauffage.\n\nRestructuration lourde d'un équipement de quartier à vocation sociale.\n\nBâtiment repère de l'entrée de ZAC Bastille : habillage de façade rouge et bois.\n\nDéroulement du projet dans une démarche de concertation : « Disponibilité, écoute et communication » en réinterrogeant le programme avec les utilisateurs.\n\nRéaménagement des espaces intérieurs comprenant : 1 centre social, 1 centre de loisirs, 1 salle publique et ses annexes, 1 halte-garderie.",
    categories: ["rehabilitation", "equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/12/16-CENTRE-SOCIAL.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-centre-social.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/logo-ville-fontaine-netb.gif",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1080040-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/plan-masse-500-copie.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/FACADES-OUEST-ET-NORD-copie.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/ambiances-ext.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1070575-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/IMG_4863-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1080048-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Comme-une-tomate-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1070937-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1070669-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1110409-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1070699-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Comme-une-tomate-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1070800-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1070843-scaled.jpg"
    ]
  },
  {
    slug: "passe-industriel",
    title: "La turbine",
    description: "Restructuration d'une halle industrielle à Grenoble (38)",
    story: "Restructuration de la Halle Rebattet dans le quartier Bouchayer Viallet à Grenoble (38)\n\nRestructuration d'une halle industrielle avec création de bureaux, d'un espace co-working et d'un restaurant.\n\nProjet complexe dans son cadre urbain et par son programme.\n\nVolonté de renforcer le caractère patrimonial tout en apportant une image dynamique et exemplaire.\n\nDémarche environnementale poussée par la mise en place d'une chaufferie bois, une ventilation double flux et un système adiabatique pour le confort d'été. Mise en place de protection solaire et matériaux naturels (linoléum, peintures sans COV…)",
    categories: ["rehabilitation"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_20200207_18122n72-3.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/VISUEL-PRINCIPAL-halle-rebatet-1.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2019/12/20190606_192829-copie-scaled-e1610956718596.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1120079-copie-e1610957132454.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/passe-industriel-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1110840-copie-e1610956765782.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/PRO-12-FACADES-PROJET-SUD-et-OUEST_62-scaled-e1610956814435.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/20180709_141653-copie-scaled-e1610956871649.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/rehabilitation-patrimoniale-BANDEAU.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/20180226_140547-scaled-e1610956928624.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/20180404_142408-scaled-e1610956977125.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/passe-industriel-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/SIMUL-EXT-JOUR-scaled-e1610957025104.jpg"
    ]
  },
  {
    slug: "coeur-vert",
    title: "Cœur vert",
    description: "Réhabilitation et extension d'une école à Grenoble (38)",
    story: "Réhabilitation de l'école maternelle Florence Arthaud au cœur du quartier St Bruno – Grenoble (38)\n\nRéhabilitation lourde d'une ancienne école maternelle au cœur du quartier St Bruno / Berriat.\n\nCréation d'une boîte verte en extension pour aménager les circulations.\n\nAménagement de 4 salles de classe, d'un espace de restauration et d'une salle de motricité.\n\nRéfection complète des cours et réaménagement des espaces extérieurs.\n\nAménagement du parvis d'entrée et liaison des cours par la création d'un porche et d'une paroi miroir.",
    categories: ["rehabilitation", "equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/12/17-ECOLE-FLORENCE-ARTHAUD.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2023/11/VISUEL-PRINCIPAL-Florence-Arthaud.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2023/11/S25-TA02K2310-Credit.jguillou.cbl_0036-reduite.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/ville-de-grenoble.gif",
      "https://tandem-architectes.com/wp-content/uploads/2023/11/S25-TA02K2310-Credit.jguillou.cbl_0006-netb-reduite.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/vue-tisanerie.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/cour-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2020/01/INSERT-SPECIFICITE-florence-arthaud.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1120048entree-copie.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/esc.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/20190625_163207-copie-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/coeur-vert-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/classe-copie.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/20180117_092007-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/coeur-vert-ville-annee.png"
    ]
  },
  {
    slug: "sur-la-bonne-piste",
    title: "Tous en piste",
    description: "Construction d'une résidence de tourisme à Auris en Oisans (38)",
    story: "Construction d'une résidence de tourisme 3 étoiles au cœur de la station sur un terrain à fort dénivelé. Les orientations favorables, tant vers le paysage que vers le sud, sont des points forts du bâtiment.\n\nL'opération comprend 85 appartements, une piscine et un espace de balnéothérapie.",
    categories: ["logements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/vignette-2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2022/01/ViISUEL-PRINCIPAL-Page-gabarit-RT-AURIS-2-1.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/05/lieu-et-date-auris-rt.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/residence-de-tourisme-Auris-en-oisans-les-ecrins-dAuris-neige.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/residence-de-tourisme-Auris-en-oisans-les-ecrins-dAuris-piscine.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/interieur-RT-Auris-couloirs-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/02/RT-AURIS-carre-noir-surface-prix.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/interieur-RT-Auris-en-oisan.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/residence-de-tourisme-Auris-en-oisans-les-ecrins-d-Auris.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/specificite-auris.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/residence-de-tourisme-Auris-en-oisans-les-ecrins-dAuris-piscine-interieur.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/01/interieur-RT-Auris-en-oisans-chambre.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/logo-sata.jpg"
    ]
  },
  {
    slug: "recreation",
    title: "Récréation",
    description: "Extension d'une école maternelle à La Buisse (38)",
    story: "Création d'un bâtiment en extension de l'école maternelle existante, pour accueillir :\n– 3 salles de classes supplémentaires\n– une salle de motricité\n– des salles d'activités pour la Petite Enfance (associations et RAM) en mutualisation avec les associations locales (yoga, musique…)\n\nLe projet suit une démarche HQU (Haute Qualité d'Usage) de la conception à la réalisation.\n\nLes espaces du bâtiment se déploient le long d'une rue intérieure qui donne sur les cours de récréation.\n\nLes volumes des classes en béton brut sont accolés au corps linéaire de la circulation qui, lui, est habillé de bois.\n\nUn soin particulier a été porté sur le traitement de la lumière et de l'acoustique.",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/P1110357-13-7-4.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/10/ECOLE-LA-BUISSE-ESSAI-ENTETE-PAGE-PROJET-1.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/la-buisse.gif",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-ecole-la-buisse-07.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-ecole-la-buisse-05.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/projetRT2012.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-ecole-la-buisse-06.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-ecole-la-buisse-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/recreation-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-ecole-la-buisse-08.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-ecole-la-buisse-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-ecole-la-buisse-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/surface-prix-la-buisse.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/la-buisse-cours.jpg"
    ]
  },
  {
    slug: "souriez",
    title: "Souriez",
    description: "Construction d’un cabinet dentaire à La Côte Saint-André (38)",
    story: "Réalisation d'un cabinet dentaire pour 5 praticiens.\n\nLe bâtiment joue sur la dualité entre deux matériaux. Deux volumes maçonnés, simples et opaques à des hauteurs différentes sont liés entre eux par un volume métallique plus complexe qui joue sur des différences d'ombres et de lumières, de transparences et de profondeurs.\n\nProgramme : 1 accueil salle d'attente, 5 salles de soin, 1 salle blanche, 1 salle de stérilisation, 1 salle de radio, 1 atelier de prothésiste, 1 salle de repas + terrasse.",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/06/23-CABINET-DENTAIRE.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-cabinet-dentaire.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-12.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/souriez-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-11.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-13.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-10.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/souriez-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-09.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-06.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-07.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-cabinet-dentaire-la-côte-saint-andré-02.jpg"
    ]
  },
  {
    slug: "etre-au-top",
    title: "Être au top",
    description: "Construction d’un gite et d’un appartement à Valmeinier (73)",
    story: "Création d'un bâtiment divisé en deux parties, un appartement et un gîte rural à Valmeinier.\n\nLe gîte possède un caractère résolument contemporain tout en réutilisant les matériaux locaux traditionnels comme la pierre et le bois.\n\nPar son implantation contre la pente, le bâtiment s'intègre harmonieusement dans le paysage de montagne.\n\nLe gîte comprend 5 chambres avec salle de bains, grand salon, cuisine et sauna.\n\nLa partie d'habitation contiguë au gîte est intégrée dans son volume.",
    categories: ["logements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/vue-avant-soleil-copie2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-gite-valmeinier.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-07.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/architecturedemontagne.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-09.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Etre-au-top-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-06.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-08.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/tandem-architectes-gîte-valmenier-05.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Etre-au-top-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/10/SMARTPHONE-tandem-architectes-gîte-valmenier-01.jpg"
    ]
  },
  {
    slug: "peau-neuve",
    title: "Peau neuve",
    description: "Rénovation partielle du site déconcentré du CNAMTS à Grenoble",
    story: "Aménagement / Agencement / Mobilier / Design mural / Signalétique\n\nRénovation partielle du site déconcentré du CNAMTS à Grenoble.\n\nLe CNAMTS est une antenne de la Caisse d'Allocations familiales et regroupe environ 150 personnes (112 membres du personnel de la CNAMTS et 39 prestataires extérieurs) sur 7 niveaux.\n\nL'objectif était de requalifier l'environnement de travail. Le projet s'inscrit dans un contexte à risques psycho-sociaux.\n\nÉlaboration d'une solution participative avec soumission du projet aux utilisateurs dès la phase esquisse. Mise en place d'un processus d'accompagnement au changement.\n\nInvitation du personnel à s'impliquer en exploitant leurs propres photos pour le design mural.\n\nIntégration de photos de montagne, issues du paysage exceptionnel environnant, dans des espaces relativement coupés de l'extérieur afin de redonner une âme au lieu.\n\nUtilisation de la couleur pour réchauffer, identifier les niveaux et séquencer les espaces.",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/10/23-CNAMTS.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/01/02-VISUEL-PRINCIPALcnamts.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/logos-MO-NetB.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cnamts-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cnamts-05-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cnamts-04-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cnamts-04-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cnamts-03-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cnamts-03-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/Localite-6.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/peau-neuve-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cnamts-02-2.jpg"
    ]
  },
  {
    slug: "dans-la-boite",
    title: "Dans la boite",
    description: "Construction de 12 logements sociaux à Coublevie (38)",
    story: "Construction d'un bâtiment de 12 logements sociaux à Coublevie.\n\nPour la réalisation de ce projet, il a été choisi de développer une solution linéaire s'ouvrant au sud avec distribution des logements par des coursives et escaliers extérieurs au nord.\n\nLa priorité a été donnée à la création de logements traversants, avec balcons, terrasses et jardins pour le rdc, au sud.\n\nDes boîtes de rangement extérieur en stratifié compact de teinte verte viennent animer la façade sud. On retrouve une boîte de même type pour permettre de repérer visuellement l'accès à l'escalier desservant les étages.\n\nLes toitures du bâtiment logements et celles des garages sont végétalisées.",
    categories: ["logements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/10/vignette-12.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/12/02-VISUEL-PRINCIPAL-Pépinière.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/01/IMG_1139.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/pluralis.gif",
      "https://tandem-architectes.com/wp-content/uploads/2020/01/INSERT-SPECIFICITE-pépinière.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Dasn-la-boite-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/P1120808-scaled-e1610952914997.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/tandem-architectes-logements-coublevie-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/tandem-architectes-logements-coublevie-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2019/12/SMARTPHONE-tandem-architectes-logements-coublevie-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Dasn-la-boite-surface-budget.png"
    ]
  },
  {
    slug: "sur-la-bonne-pente",
    title: "Sur la bonne pente",
    description: "Construction de 40 logements aux Rousses (39)",
    story: "Construction de 40 logements\n\nLe projet se situe à 1 100 m d'altitude, dans le massif du Jura.\n\nL'enjeu du projet est de proposer un ensemble de 40 logements collectifs réussissant à s'intégrer dans un quartier majoritairement composé de maisons individuelles. Le projet joue sur une décomposition en trois volumes en partie haute et sur un jeu de terrasses en partie basse pour s'intégrer dans la forte pente et ainsi offrir des vues dégagées sur le grand paysage. Les trois volumes sont liés par deux noyaux de circulations verticales et de passerelles extérieures.",
    categories: ["logements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/12/vignette-cretets-2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/VISUEL-PRINCIPAL-Page-gabarit-cretets.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/05/shema-concpt-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/lieu-date-les-cretets.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/plan-masse-perspective.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/VUE-PC-DECEMBRE-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/cretets-vue-de-haut.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/logo-cefimmo.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/specificite-cretets.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/vue-e3.jpg"
    ]
  },
  {
    slug: "aux-petits-soins",
    title: "Aux petits soins",
    description: "Construction d'une maison de santé au grand-Serre (26)",
    story: "Construction d'une maison de santé pluridisciplinaire du Grand-Serre (26)\n\n• 3 médecins généralistes, 1 pharmacien,\n• 1 kinésithérapeute, 2 orthophonistes,\n• 1 infirmière, 1 psychologue,\n• 1 neurologue, 1 podologue.\n• Locaux sociaux de la commune",
    categories: ["equipements"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2020/12/18-MSP-GS2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/VISUEL-PRINCIPAL-Page-gabarit-MSP-GS.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/05/maisondesantelegrandserre04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/client-logo-msp-gs-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/specificite-msp-gs.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/18-MSP-GS.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/maisondesantelegrandserre01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/maisondesantelegrandserre07.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/lieu-et-date-msp-grand-serre.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/surface-et-prix-msp-grand-serre.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/maisondesantelegrandserre03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/maisondesantelegrandserre06-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/surface-et-prix-RT-auris-1.jpg"
    ]
  },
  {
    slug: "tous-en-classe",
    title: "Tous en classe !",
    description: "Construction d'un bâtiment scolaire à Sevrier (74)",
    story: "Construction d'un bâtiment d'enseignement agricole à Sevrier (74)\n\nLe projet comprend la construction de salles de cours, de locaux administratifs, d'une salle d'activités et de vestiaires.\n\nLes espaces extérieurs ont également dû être repensés : réaménagement de l'entrée du site et des cheminements, aménagements paysagers liés aux activités pédagogiques.",
    categories: ["equipements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-03.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2022/05/VISUEL-PRINCIPAL-ROSELIERES.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/carre-noir-1-sevrier-les-roselieres.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-05.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/carre-noir-3-sevrier-les-roselieres.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-06.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-07.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/05/sevrier-les-roselieres-02-scaled.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2023/02/carre-noir-surface-prix.jpg"
    ]
  },
  {
    slug: "687",
    title: "A vos côtés",
    description: "Rénovation lourde et extension de la pharmacie Championnet à Grenoble",
    story: "Aménagement / Agencement / Design mural / Signalétique\n\nRénovation lourde et extension de la pharmacie Championnet à Grenoble.\n\nDans le cadre d'une gestion automatisée des stocks de la pharmacie, un remaniement complet des espaces a été opéré, avec la création de bureaux au niveau 2 et un agrandissement de la pharmacie qui se déploie sur les deux premiers niveaux (liaison PMR par ascenseur).\n\nAgrandissement des ouvertures et mise en place de vitrines toute hauteur au niveau du rez-de-chaussée. Création d'une galerie surplombant l'espace de vente du rez-de-chaussée pour augmenter la surface de stockage. Stock dissimulé à l'arrière de grandes portes coulissantes recouvert de visuels grand format. À l'étage, aménagement d'un espace de vente et de conseil dans un esprit plus cosy en lien avec l'ancien usage d'habitation.",
    categories: ["rehabilitation", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/pharmacie-championnet-03-2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/05/02-VISUEL-PRINCIPAL-pharmacie-championnet-1.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2022/09/logo-4.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/pharmacie-championnet-03-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/pharmacie-championnet-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/localite-8.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/akt2-championnet-03-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/pharmacie-championnet-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Antiseptique-surface-budget.png"
    ]
  },
  {
    slug: "grand-froid",
    title: "Grand froid",
    description: "Rénovation des parties communes de la résidence Le Grand Sud à l'Alpe d'Huez (38)",
    story: "Rénovation / Design mural / Signalétique\n\nRénovation des parties communes de la résidence Le Grand Sud à l'Alpe d'Huez.\n\nRequalification du hall, des circulations et des cages d'escaliers pour une centaine d'appartements.\n\nLes orientations du projet ont été le travail sur la lumière, sur la création d'un rythme dans les couloirs et le travail sur une ambiance en lien avec la montagne.",
    categories: ["rehabilitation", "logements", "montagne"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/grand-sud-05.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/01/02-VISUEL-PRINCIPAL.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/alpe-huez.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/grand-sud-05.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/grand-sud-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/grand-sud-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/carre-noir.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/grand-sud-04.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/grand-sud-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/GrandFroidsurface-budget.png"
    ]
  },
  {
    slug: "chez-soi",
    title: "Chez soi",
    description: "Aménagement intérieur d'un appartement dans un bâtiment d'habitat participatif à Grenoble",
    story: "Conception de l'aménagement intérieur d'un appartement dans un bâtiment d'habitat participatif à Grenoble.\n\nRecherche d'une sobriété des matériaux et d'une esthétique minimaliste. La présence prépondérante de bois clair associé à des touches de couleur ponctuelles crée une ambiance douce et chaleureuse et donne à l'espace un caractère contemporain.",
    categories: ["logements", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/appart-b-01.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2020/01/02-VISUEL-PRINCIPAL-appart-b.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2022/09/localite-9.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/appart-b-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/appart-b-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/appart-b-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/chez-soi-surface-budget.png"
    ]
  },
  {
    slug: "au-sommet",
    title: "Au sommet",
    description: "",
    categories: ["logements", "montagne", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-01.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/01/02-VISUEL-PRINCIPAL-gite-valmeinier-1.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-03-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-03-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/au-sommet-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-04-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-04-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gite-valmeinier-04-3.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/GITE-16-scaled-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/au-sommet-surface-budget.png"
    ]
  },
  {
    slug: "514",
    title: "S'éveiller",
    description: "Rénovation d'un local d'entreprise en centre médico-social de soins et d'accompagnement des familles à Pontcharra (38)",
    story: "Rénovation d'un ancien local d'entreprise de 235 m² en centre médico-social de soins et d'accompagnement des familles à Pontcharra.\n\nLe CAMSP est un établissement dédié aux interventions précoces dans la prévention du dépistage, de l'évaluation et des premières réponses pour des enfants de 0 à 6 ans pour lesquels il y a interrogation sur des déficiences sensorielles, motrices, intellectuelles ou psychiques. Il regroupe des praticiens spécialisés dans le développement et l'accompagnement de l'enfant (kinésithérapeutes, assistantes sociales, psychologues, orthophonistes…)\n\nL'enjeu était de proposer un lieu ludique, fonctionnel et adapté aux jeunes enfants.\n\nConcertation avec les futurs utilisateurs.\n\nScénarisation d'un parcours pour raconter une histoire, s'immiscer dans un rêve d'enfant. Sur la thématique de la forêt et de ses habitants, l'idée était de transformer la circulation en promenade découverte. Une fresque se déploie sur toute la longueur du mur du couloir.\n\nLa linéarité de la circulation centrale a été cassée par des cloisons en pans coupés pour accentuer la notion de déambulation.\n\nL'espace d'attente se transforme en cabane bleu turquoise.\n\nLa signalétique et les visuels sont adaptés à l'enfant.",
    categories: ["equipements", "interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/apf-pontcharra-02-2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/01/02-VISUEL-PRINCIPAL-apf-pontcharra.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/moodys.gif",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/apf-pontcharra-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/apf-pontcharra-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/apf-pontcharra-03-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/localite-7.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/s-eveiller-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/apf-pontcharra-03-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/apf-pontcharra-01.jpg"
    ]
  },
  {
    slug: "vider-son-sac",
    title: "Vider son sac",
    description: "Restructuration complète de la maroquinerie Gandy du passage de l'Argue, à Lyon",
    story: "Aménagement / Agencement / Design mural / Signalétique\n\nÉlaboration du concept store de la marque et aménagement d'une dizaine de boutiques sur la région Rhône-Alpes.\n\nRestructuration complète de la maroquinerie Gandy du passage de l'Argue, à Lyon.",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/gandy-lyon-03.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/11/02-VISUEL-PRINCIPAL-gandy-lyon.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/01/akt2-gandy-lyon-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/logo-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gandy-lyon-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gandy-lyon-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/gandy-lyon-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/05/carre-noir-prix-surgace.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/Gandy-Voiron-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/carre-noir-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/Gandy-Voiron-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/Gandy-Voiron-03.jpg"
    ]
  },
  {
    slug: "pomodori",
    title: "Pomodori",
    description: "Création d'une cafétaria pizzeria pour le Crous Grenoble Alpes à Saint-Martin-d'Hères (38)",
    story: "Concept d'aménagement / cuisine professionnelle et agencement / mobilier / signalétique\n\nCréation d'une cafétaria pizzeria « Tutti Quanti ! » pour le Crous Grenoble Alpes sur le domaine universitaire, à Saint-Martin-d'Hères.\n\nL'aménagement intérieur et la décoration du restaurant sont nés d'une inspiration métissée : luminaires de consonance asiatique, motifs floraux au plafond, mobilier assez graphique de style seventies et banquettes capitonnées dans un esprit « diner » à l'américaine. Les parois en bois miel renforcent l'ambiance chaleureuse du lieu.",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/cafeteria-condilllac-01.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/11/02-VISUEL-PRINCIPAL-cafeteria-condillac.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2022/09/logo-3.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cafeteria-condilllac-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cafeteria-condilllac-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cafeteria-condilllac-02-3.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/localite-5.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Pomodori-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/cafeteria-condilllac-02-2.jpg"
    ]
  },
  {
    slug: "enigmatique",
    title: "Énigmatique",
    description: "Aménagement de l'espace Challenge The Room à Challes-les-Eaux (73)",
    story: "La marque Challenge The Room nous a confié l'étude de son concept d'espace pour aménager l'ensemble de ses franchises sur le territoire français. Après la création d'un espace à Grenoble, l'agence a conçu l'aménagement de l'espace de Challes-les-Eaux en Savoie.\n\nCe lieu est le projet pilote de la marque et sert de charte à décliner par les franchisés sur d'autres territoires.\n\nLe design, la scénographie, le mobilier et la signalétique ont été conçus comme des marqueurs d'espace participant pleinement à la stratégie de communication de la société. Ils sont devenus leur marque de fabrique.",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/challenge-the-room-02.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/01/02-VISUEL-PRINCIPAL-challenge-the-room-73.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/01/challenge-the-room-02.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Challenge-the-room.gif",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/Localite-4.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/challenge-the-room-03-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/challenge-the-room-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/challenge-the-room-03-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/Enigmatique-surface-budget.png"
    ]
  },
  {
    slug: "zigzag",
    title: "Zigzag",
    description: "Aménagement du Service Local de Solidarité de Fontaine sur un plateau de 1066 m²",
    story: "Aménagement du Service Local de Solidarité de Fontaine sur un plateau de 1066 m² comprenant 49 postes de travail, une salle de réunion et des salles d'attente pour les assistantes sociales, assistantes sociales à l'enfance et médecins PMI.\n\nL'enjeu était de rompre avec l'environnement tertiaire du lieu d'origine en proposant un espace plus convivial. Le parti a été d'introduire des obliques dans les circulations pour créer un cheminement en zigzag.\n\nLe choix d'introduire des couleurs pastel pour dessiner des volumes sans les cloisonner contribue également à casser les codes.",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/sls-03-2.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2020/01/02-VISUEL-PRINCIPAL-sls.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/departement-isere.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/sls-03-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/sls-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/sls-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2022/09/localite-10.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/sls-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/ZIgzag-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/sls-03-1.jpg"
    ]
  },
  {
    slug: "sous-locean",
    title: "Sous l'océan",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/bar-a-huitres-01.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2021/01/02-VISUEL-PRINCIPAL-bar-a-huitres.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/01/bar-a-huitres-01.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/sous-locean-ville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/bar-a-huitres-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/bar-a-huitres-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/bar-a-huitres-03-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/sous-locean-surface-budget.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/bar-a-huitres-03-2.jpg"
    ]
  },
  {
    slug: "gourmandise",
    title: "Gourmandise",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/01/01-VIGNETTE-PORTFOLIO-chardon-dore-HOTELS-RESTAURANTS.jpg",
    heroCover: "https://tandem-architectes.com/wp-content/uploads/2019/11/02-VISUEL-PRINCIPAL-chardon-dore.jpg",
    gallery: [
      "https://tandem-architectes.com/wp-content/uploads/2021/04/le-chardon-dore.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/chardon-dore-02-2.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/chardon-dore-02-1.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/chardon-dore-03.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/gourmandiseville-annee.png",
      "https://tandem-architectes.com/wp-content/uploads/2021/01/01-VIGNETTE-PORTFOLIO-chardon-dore-HOTELS-RESTAURANTS.jpg",
      "https://tandem-architectes.com/wp-content/uploads/2021/04/gourmandisesurface-budget.png"
    ]
  },
  {
    slug: "embellir",
    title: "Embellir",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2021/03/18-CABINET-CHIRURGIE.jpg",
    gallery: []
  },
  {
    slug: "nid-dabeilles",
    title: "Nid d’abeilles",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/11/01-VIGNETTE-PORTFOLIO-H3C-TERTIAIRE.jpg",
    gallery: []
  },
  {
    slug: "ca-tourne",
    title: "Ça tourne !",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/11/01-VIGNETTE-PORTFOLIO-bip-tv-TERTIAIRE.jpg",
    gallery: []
  },
  {
    slug: "coup-de-sifflet",
    title: "Coup de sifflet",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/11/16-VILLAGE-PARTENAIRE.jpg",
    gallery: []
  },
  {
    slug: "la-vie-en-rose",
    title: "La vie en rose",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/11/01-VIGNETTE-PORTFOLIO-cogedim-vendome-HABITAT.jpg",
    gallery: []
  },
  {
    slug: "latelier",
    title: "L’atelier",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/11/01-VIGNETTE-PORTFOLIO-appart-d-HABITAT.jpg",
    gallery: []
  },
  {
    slug: "revigorant",
    title: "Revigorant",
    description: "",
    categories: ["interieur"],
    cover: "https://tandem-architectes.com/wp-content/uploads/2019/11/Pharma-haut-meylan-02-2.jpg",
    gallery: []
  }
];
