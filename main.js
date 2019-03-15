// Qual o nome do jogador?

// var playerName = prompt('Qual seu nome?')

// if (playerName != null) {
//     document.getElementById("player-name").innerHTML = playerName;
// }

// Entrar no jogo

var btnStart = document.querySelector('#start-game');
var homeBox = document.querySelector('.home');
var containerBox = document.querySelector('.container');

btnStart.addEventListener('click', function(){
    homeBox.style = 'display: none;';
    containerBox.style = 'display: flex;';
})

// Sortear cartas

user.card = randomCard();
pc.card = randomCard();

// Mostrar card do user

revealUserCard();


// O que vai ser disputado?

var jsBtn = document.querySelector('#user-js-btn');
var htmlBtn = document.querySelector('#user-html-btn');
var cssBtn = document.querySelector('#user-css-btn');
var jsBox = document.querySelector('#user-js-btn');
var htmlBox = document.querySelector('#user-html-btn');
var cssBox = document.querySelector('#user-css-btn');

var clickFlag = false;

jsBtn.addEventListener('click', function(){
    if (clickFlag == false) {
    game('js');
    jsBox.classList.add('selected');
    clickFlag = true;
    }
})

htmlBtn.addEventListener('click', function(){
    if (clickFlag == false) {
    game('html');
    htmlBox.classList.add('selected');
    clickFlag = true;
    }
})

cssBtn.addEventListener('click', function(){
    if (clickFlag == false) {
    cssBox.classList.add('selected');
    game('css');
    clickFlag = true;
    }
})