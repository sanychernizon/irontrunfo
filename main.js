// Qual o nome do jogador?

// var playerName = prompt('Qual seu nome?')

// if (playerName != null) {
//     document.getElementById("player-name").innerHTML = playerName;
// }

var consoleBox = document.querySelector('.box-console');
var jsBtn = document.querySelector('#user-js-btn');
var htmlBtn = document.querySelector('#user-html-btn');
var cssBtn = document.querySelector('#user-css-btn');
var jsBox = document.querySelector('#user-js-btn');
var htmlBox = document.querySelector('#user-html-btn');
var cssBox = document.querySelector('#user-css-btn');
var btnStart = document.querySelector('#start-game');
var homeBox = document.querySelector('.home');
var containerBox = document.querySelector('.container');
var lifeUser = document.querySelector('#user-life');
var lifePc = document.querySelector('#pc-life');
var btnComecar = document.querySelector('.deck-comecar');

// Entrar no jogo


btnStart.addEventListener('click', function () {
    homeBox.style = 'display: none;';
    containerBox.style = 'display: flex;';
})

// Vida dos players

lifeUser.innerHTML = user.life;
lifePc.innerHTML = pc.life;


// Sortear cartas

user.card = randomCard();
pc.card = randomCard();

// Mostrar card do user

btnComecar.addEventListener('click', function () {
    revealUserCard();
});

// DISPUTA

var clickFlag = false;

jsBtn.addEventListener('click', function () {
    if (clickFlag == false) {
        jsBox.classList.add('selected');
        game('js');
        clickFlag = true;
    }
})

htmlBtn.addEventListener('click', function () {
    if (clickFlag == false) {
        htmlBox.classList.add('selected');
        game('html');
        clickFlag = true;
    }
})

cssBtn.addEventListener('click', function () {
    if (clickFlag == false) {
        cssBox.classList.add('selected');
        game('css');
        clickFlag = true;
    }
})