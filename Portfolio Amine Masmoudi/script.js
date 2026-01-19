document.addEventListener("DOMContentLoaded", function() {
    var quizForm = document.getElementById("quizForm");
    var resultEl = document.getElementById("result");
    var correctionEl = document.getElementById("correction");

    var answers = {
        q1: "a",
        q2: "c",
        q3: "b",
        q4: "a",
        q5: "c",
        q6: "b",
        q7: "a",
        q8: "c",
        q9: "b",
        q10: "a"
    };

    quizForm.addEventListener("submit", function(e) {
        e.preventDefault();
        var score = 0;

        
        for (var q in answers) {
            var selected = document.querySelector('input[name="' + q + '"]:checked');
            if (!selected) {
                resultEl.textContent = "⚠ Veuillez répondre à toutes les questions avant de valider le quiz.";
                resultEl.style.color = "red";
                resultEl.scrollIntoView({ behavior: "smooth" });
                return;
            }
        }

        
        for (var q2 in answers) {
            var selected2 = document.querySelector('input[name="' + q2 + '"]:checked');
            if (selected2 && selected2.value === answers[q2]) score++;
        }

        resultEl.textContent = "✅ Note : " + score + "/" + Object.keys(answers).length;
        resultEl.style.color = "#1e73be";

        
        correctionEl.innerHTML = "";
        var index = 0;
        for (var q3 in answers) {
            var li = document.createElement("li");
            li.textContent = "Question " + (index + 1) + " → Réponse correcte : " + answers[q3].toUpperCase();
            correctionEl.appendChild(li);
            index++;
        }

        resultEl.scrollIntoView({ behavior: "smooth" });
    });
});
