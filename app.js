let input = document.getElementById("user-letter");
let buttonVerify = document.getElementById("letterTry");
let divEssai = document.getElementById("essai");
let guessWord = document.getElementById("guessWord");
let answerTableau = [];
let essais = 10;
let divPropose = document.getElementById("lettreP");
let tab = [
    "orange","pomme","poire","banane","telephone","ordinateur","android","apple","linux","mac","ios","windows",
    "confiture","voiture","porche","camion","manga","anime","drama",'live-action',"livre","music","film","sourie",
    "chat","chien","dragon","serpen","poison","scorpion","couleur","ancien","nouveau","neuf","beau","belle","moche"
]
let motRandom = tab[Math.floor(Math.random()*tab.length)];

divEssai.innerHTML = "essais restant " + essais;


for (let x = 0; x < motRandom.length; x++) {
    answerTableau[x] = "_";
    guessWord.innerHTML = answerTableau.join(" ");
}

buttonVerify.addEventListener("click", function () {
    let letter = input.value;
    let nice = true;

    for (let x = 0; x < motRandom.length; x++) {
        if (motRandom[x] === letter) {
            answerTableau[x] = letter;
            guessWord.innerHTML = answerTableau.join(" ");
            divPropose.innerHTML += " - " + letter;
        }
        else if (!motRandom.includes(letter)) {
            nice = false;
        }
    }
    if (!nice) {
        essais--;
        divEssai.innerHTML = "essais restant " + essais;
        divPropose.innerHTML += " - " + letter;
    }
    if (essais <= 0) {
        alert("Perdu ! Le mot était : " + motRandom);
        window.location.reload();
    }
    if (!answerTableau.includes("_")) {
        alert("Gagné !");
        window.location.reload();
    }

})