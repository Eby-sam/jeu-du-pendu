let user = document.getElementById('champ');
let result = document.getElementById('resulta');
let tab = [
    "orange","pomme","poire","banane","telephone","ordinateur","android","apple","linux","mac","ios","windows",
    "confiture","voiture","porche","camion","manga","anime","drama",'live-action',"livre","music","film","sourie",
    "chat","chien","dragon","serpen","poison","scorpion","couleur","ancien","nouveau","neuf","beau","belle","moche"
]


for(let i = 0 ; i < tab.length ; i++){
    result.innerHTML = tab[Math.floor(Math.random() * tab.length)];
}