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

        console.log(user.card.image)
        console.log(pc.card.image)

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