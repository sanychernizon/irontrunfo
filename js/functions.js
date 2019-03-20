
// Função selecionar carta aleatóriamente

function randomCard() {
    let randomNum = Math.floor(Math.random() * cards.length);
    console.log(randomNum);
    let cardSelected = cards[randomNum];
    cards = cards.filter(function (item) {
        return item !== cardSelected;
    })
    return cardSelected;
}

function lifeHeart(life, box) {
    box.innerHTML = '';
    for (i=0; i < life; i++) {
        box.innerHTML += '<img src="img/heart.png">'
    }
}

function revealUserCard() {
    userCardImg.innerHTML = user.card.image;
    userCardName.innerHTML = user.card.name;
    userJsLevel.innerHTML = user.card.js;
    userHtmlLevel.innerHTML = user.card.html;
    userCssLevel.innerHTML = user.card.css;
    userSpecial.innerHTML = user.card.special;
    userSpecialDescription.innerHTML = user.card.description;
    var listActivator = user.card.activator.reduce(function (acc, item) {
        return acc += '<li>' + item + '</li>'
    }, "")
    userActivator.innerHTML = listActivator;

    var userBarJs = document.querySelector('#bar-user-js');
    var userBarHtml = document.querySelector('#bar-user-html');
    var userBarCss = document.querySelector('#bar-user-css');

    userBarJs.style.width = user.card.js + '%';
    userBarHtml.style.width = user.card.html + '%';
    userBarCss.style.width = user.card.css + '%';
}

function revealPcCard() {

    pcCardImg.innerHTML = pc.card.image;
    pcCardName.innerHTML = pc.card.name;
    pcJsLevel.innerHTML = pc.card.js;
    pcHtmlLevel.innerHTML = pc.card.html;
    pcCssLevel.innerHTML = pc.card.css;
    pcSpecial.innerHTML = pc.card.special;
    pcSpecialDescription.innerHTML = pc.card.description;
    var listActivator = pc.card.activator.reduce(function (acc, item) {
        return acc += '<li>' + item + '</li>'
    }, "")
    pcActivator.innerHTML = listActivator;

    var pcBarJs = document.querySelector('#bar-pc-js');
    var pcBarHtml = document.querySelector('#bar-pc-html');
    var pcBarCss = document.querySelector('#bar-pc-css');

    pcBarJs.style.width = pc.card.js + '%';
    pcBarHtml.style.width = pc.card.html + '%';
    pcBarCss.style.width = pc.card.css + '%';

    pcCard.classList.add('card-show');
}

function selectedPcSkill(skill) {
    if (skill == 'js') {
        barSkillJs.classList.add('selected');
    }
    if (skill == 'html') {
        barSkillHtml.classList.add('selected');
    }
    if (skill == 'css') {
        barSkillCss.classList.add('selected');
    }
}

function game(skill) {
    if (skill == 'js') {
        revealPcCard();
        selectedPcSkill(skill);
        setTimeout(function () {
            userSpecialActive(user.card.name);
            pcSpecialActive(pc.card.name);
            gameJs(user, pc);
        }, 1000)
    }
    if (skill == 'html') {
        revealPcCard();
        selectedPcSkill(skill);
        setTimeout(function () {
            userSpecialActive(user.card.name);
            pcSpecialActive(pc.card.name);
            gameHtml(user, pc);
        }, 1000)
    }
    if (skill == 'css') {
        revealPcCard();
        selectedPcSkill(skill);
        setTimeout(function () {
            userSpecialActive(user.card.name);
            pcSpecialActive(pc.card.name);
            gameCss(user, pc);
        }, 1000)    
    }
};

function gameJs(user, pc) {
    if (user.card.js > pc.card.js) {
        pc.life--
        setTimeout(function () {
            lifeHeart(pc.life, lifePc);
            consoleMsg.innerHTML = 'VENCEU a partida!';
        }, 1000);
    }
    if (user.card.js < pc.card.js) {
        user.life--
        setTimeout(function () {
            lifeHeart(user.life,lifeUser);
            consoleMsg.innerHTML = 'PERDEU a partida... :(';
        }, 1000);
    }
    if (user.card.js == pc.card.js) {
        setTimeout(function () {
            consoleMsg.innerHTML = 'Empatou!';
        }, 1000);
    }
    setTimeout(function () {
        btnPartida.style = 'display: flex;';
        isWinner();
    }, 1000);
}

function gameHtml(user, pc) {
    if (user.card.html > pc.card.html) {
        pc.life--
        setTimeout(function () {
            lifeHeart(pc.life, lifePc);
            consoleMsg.innerHTML = 'VENCEU a partida!';
        }, 1000);
    }
    if (user.card.html < pc.card.html) {
        user.life--
        setTimeout(function () {
            lifeHeart(user.life,lifeUser);
            consoleMsg.innerHTML = 'PERDEU a partida... :(';
        }, 1000);
    }
    if (user.card.html == pc.card.html) {
        setTimeout(function () {
            consoleMsg.innerHTML = 'Empatou!';
        }, 1000);
    }
    setTimeout(function () {
        btnPartida.style = 'display: flex;';
        isWinner();
    }, 1000);
}

function gameCss(user, pc) {
    if (user.card.css > pc.card.css) {
        pc.life--
        setTimeout(function () {
            lifeHeart(pc.life, lifePc);
            consoleMsg.innerHTML = 'VENCEU a partida!';
        }, 1000);
    }
    if (user.card.css < pc.card.css) {
        user.life--
        setTimeout(function () {
            lifeHeart(user.life,lifeUser);
            consoleMsg.innerHTML = 'PERDEU a partida... :(';
        }, 1000);
    }
    if (user.card.css == pc.card.css) {
        setTimeout(function () {
            consoleMsg.innerHTML = 'Empatou!';
        }, 1000);
    }
    setTimeout(function () {
        btnPartida.style = 'display: flex;';
        isWinner();
    }, 1000);
}

function zerarUserCard() {

    userCardImg.innerHTML = '';
    userCardName.innerHTML = '';
    userJsLevel.innerHTML = '';
    userHtmlLevel.innerHTML = '';
    userCssLevel.innerHTML = '';
    userSpecial.innerHTML = '';
    userSpecialDescription.innerHTML = '';
    userActivator.innerHTML = '';
}

function zerarPcCard() {

    pcCardImg.innerHTML = '';
    pcCardName.innerHTML = '';
    pcJsLevel.innerHTML = '';
    pcHtmlLevel.innerHTML = '';
    pcCssLevel.innerHTML = '';
    pcSpecial.innerHTML = '';
    pcSpecialDescription.innerHTML = '';
    pcActivator.innerHTML = '';
}

function zerarEstilos() {
    cssBox.classList.remove('selected');
    htmlBox.classList.remove('selected');
    jsBox.classList.remove('selected');
    barSkillJs.classList.remove('selected');
    barSkillHtml.classList.remove('selected');
    barSkillCss.classList.remove('selected');
    pcCard.classList.remove('card-show');
    esconder.style = 'display: none;';
    btnPartida.style = 'display: none;';
    consoleMsg.innerHTML = '';
}

function isWinner() {
    if (user.life == 0) {
        msgFinal.innerHTML = 'Você perdeu o jogo... :(';
        modalBox.style = 'display: flex;';
    }
    if (pc.life == 0) {
        msgFinal.innerHTML = 'Você ganhou! :)';
        modalBox.style = 'display: flex;';
    }
}

function isWinnerRodada(user, pc) {
    if (rodadaNum == 0) {
        if (user.life == pc.life) {
            msgFinal.innerHTML = 'Empatou!';
            modalBox.style = 'display: flex;';
        }
        if (user.life > pc.life) {
            msgFinal.innerHTML = 'Você ganhou! :)';
            modalBox.style = 'display: flex;';
        } else {
            msgFinal.innerHTML = 'Você perdeu o jogo... :(';
            modalBox.style = 'display: flex;';
        }
    }
}

