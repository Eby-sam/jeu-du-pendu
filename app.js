let user = document.getElementById('champ');
let result = document.getElementById('resulta');
let add = document.getElementById('envois');
let trial = 10;
let victory = 0;
let letterUtil = [];
let array = [];
let tab = [
    "orange","pomme","poire","banane","telephone","ordinateur","android","apple","linux","mac","ios","windows",
    "confiture","voiture","porche","camion","manga","anime","drama",'live-action',"livre","music","film","sourie",
    "chat","chien","dragon","serpen","poison","scorpion","couleur","ancien","nouveau","neuf","beau","belle","moche"
]

let wordA = '';

function recup () {
    wordA = tab[Math.floor(Math.random() * tab.length)];
}

function actualWord () {
    let space = tab.join(' ');
    result.innerHTML = space;
}

function attendNum () {
    document.getElementById('attent').innerHTML = ' ' + trial.toString();
}

function vicNumber () {
    document.getElementById('vicNum').innerHTML = victory.toString();
}

function letterU () {
    let space = letterUtil.join(', ');
    letterUtil.innerHTML = space;
}

user = user.value;

function addLetter (user) {
    let repeatLetter = letterUtil.some(function (item) {
        return item === user;
    })
    if(repeatLetter) {
        alert('cette lettre a deja était utilisé !!!');
    }

    else {
        letterUtil.push(user);
        letterU();
        letterW(user);
    }
}

function letterW (carac) {
    let good = false;
    let current = wordA.split('');
    for(let i = 0 ; i < current.length ; i++) {
        if(carac.toLowerCase() === current[i]) {
            array[i] = carac.toLowerCase();
            actualWord();
            good = true;
            if(array.join('') === wordA) {
                alert('trouvé !!!');
                victory = victory +1;
                vicNumber();
            }
        }
    }
    if (good === false) {
        trial = trial -1;
        attendNum();
        if(trial === 0) {
            alert('perdu !!!' + wordA);
        }
    }
}

function elder () {
    array.length = wordA.length;
    array.fill('_');
}

function reset () {
    letterUtil = [];
    array = [];
    trial = 10;
}

function start () {
    reset();
    recup();
    actualWord();
    attendNum();
    vicNumber();
    letterW();
    elder();
}

document.getElementById('envois').addEventListener('click', function () {
    addLetter();
})



document.getElementById('go').addEventListener('click', function() {
    start();
})