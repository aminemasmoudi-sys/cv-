var form = document.getElementById("contactForm");
var feedback = document.getElementById("feedback");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (nom === "" || email === "" || message === "") {
        feedback.textContent = "Veuillez remplir tous les champs.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "Message envoyé avec succès !";
    feedback.style.color = "#0a4ebf";

    alert("Merci " + nom + "! Votre message a été envoyé.");

    form.reset();
});
