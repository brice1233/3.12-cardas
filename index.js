const cardList = document.querySelector('.cardList');
buildBoard();

let interval = setInterval(function () {
    addCard(cardList.children.length + 1) //make it start at 1 not 0
}, 2000);
addCard('test')

cardList.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.matches('.cardList')) {
        return
    }
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1) {
        clearInterval(interval)
    }
});

function addCard(value) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard() {
    for (let i = 0; i < 12; i++) {
        addCard('starter');
    }
}

    function winner(){
    if(currentScore >= 20)
    score.innerText="you won"
}
    let currentScore = 0;
    let score = document.getElementById('score');
    const click = document.getElementById('click');
    const points = document.getElementById('points');
     let clickValue = 1;

    click.addEventListener('click', function () {
    currentScore += clickValue;
    score.innerText = currentScore;
    winner()
})
    points.addEventListener('click', function () {
    score.innerText = currentScore;
});