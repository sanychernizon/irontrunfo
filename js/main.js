// Entrar no jogo
var nomePlayer = ''

btnJogar.addEventListener('click', function () {
    modalHome.style = 'display: none;';
    nomePlayer = inputName.value;
    nameBox.innerHTML = nomePlayer;
});

// Vida dos players

lifeHeart(user.life, lifeUser);
lifeHeart(pc.life, lifePc);

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
        backImg.style = 'display: none;';
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
    backImg.style = 'display: flex;';
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