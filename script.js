

document.getElementById("quizForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let score = 0;
    const total = 2;

    
    const answers = {
        q1: "a",
        q2: "c"
    };

    Object.keys(answers).forEach(q => {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    });

   
    document.getElementById("result").innerHTML = `Note : ${score}/${total}`;

    let correctionList = document.getElementById("correction");
    correctionList.innerHTML = "";
    Object.keys(answers).forEach(q => {
        let li = document.createElement("li");
        li.textContent = `Question ${q.substring(1)} → Réponse correcte : ${answers[q].toUpperCase()}`;
        correctionList.appendChild(li);
    });
});
