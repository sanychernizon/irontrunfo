// Qual o nome do jogador?

// var playerName = prompt('Qual seu nome?')

// if (playerName != null) {
//     document.getElementById("player-name").innerHTML = playerName;
// }


// Entrar no jogo


// btnStart.addEventListener('click', function () {
//     homeBox.style = 'display: none;';
//     containerBox.style = 'display: flex;';
// })

// Vida dos players

lifeUser.innerHTML = user.life;
lifePc.innerHTML = pc.life;

//Sortear e mostrar card

var clickFlagS = false;
var rodadaNum = 7;
rodada.innerHTML = 'Rodada: ' + rodadaNum;

btnSortear.addEventListener('click', function () {
    if(clickFlagS == false){
        user.card = randomCard();
        pc.card = randomCard();
        revealUserCard();
        esconder.style = 'display: flex;';
        clickFlagS = true;
    }
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

btnPartida.addEventListener('click', function(){
    zerarUserCard();
    zerarPcCard();
    clickFlag = false;
    clickFlagS = false;
    zerarEstilos();
    rodadaNum--
    rodada.innerHTML = 'Rodada: ' + rodadaNum;
    
    isWinnerRodada(user,pc);
})

btnRestart.addEventListener('click', function(){
    location.reload();
});

btnOk.addEventListener('click', function () {
    modalSpecialBox.style = 'display: none;';
    pcBarJs.style.width = pc.card.js + '%';
    pcBarHtml.style.width = pc.card.html + '%';
    pcBarCss.style.width = pc.card.css + '%';
    userBarJs.style.width = user.card.js + '%';
    userBarHtml.style.width = user.card.html + '%';
    userBarCss.style.width = user.card.css + '%';
});