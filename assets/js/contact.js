/* Formulaire de contact — prototype : ouvre le client mail avec le message pré-rempli.
   À remplacer par un vrai traitement (Contact Form 7 / backend) lors de l'intégration finale. */

(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = "Contact site — " + name;
    const body = message + "\n\n" + email;

    window.location.href =
      "mailto:info@tandem-architectes.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
})();
