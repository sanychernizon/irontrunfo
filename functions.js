
// Função selecionar carta aleatóriamente

function randomCard() {
    let randomNum = Math.round(Math.random() * cards.length);
    let cardSelected = cards[randomNum];
    cards = cards.filter(function (item) {
        return item !== cardSelected;
    })
    return cardSelected;
}

function isUserSpecialActive(user, pc) {
    if (user.card.name == pc.card.activator[0] ||
        user.card.name == pc.card.activator[1] ||
        user.card.name == pc.card.activator[2]) {
        return true;
    } else {
        return false;
    }
}

function isPcSpecialActive(user, pc) {
    if (pc.card.name == user.card.activator[0] ||
        pc.card.name == user.card.activator[1] ||
        pc.card.name == user.card.activator[2]) {
        return true;
    } else {
        return false;
    }
}

function revealUserCard() {
    var userCardImg = document.querySelector('#user-card-img');
    var userCardName = document.querySelector('#user-card-name');
    var userJsLevel = document.querySelector('#user-js-level');
    var userHtmlLevel = document.querySelector('#user-html-level');
    var userCssLevel = document.querySelector('#user-css-level');
    var userSpecial = document.querySelector('#user-special');
    var userSpecialDescription = document.querySelector('#user-special-description');
    var userActivator = document.querySelector('#user-activator');

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

    var pcCardImg = document.querySelector('#pc-card-img');
    var pcCardName = document.querySelector('#pc-card-name');
    var pcJsLevel = document.querySelector('#pc-js-level');
    var pcHtmlLevel = document.querySelector('#pc-html-level');
    var pcCssLevel = document.querySelector('#pc-css-level');
    var pcSpecial = document.querySelector('#pc-special');
    var pcSpecialDescription = document.querySelector('#pc-special-description');
    var pcActivator = document.querySelector('#pc-activator');

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

    var pcCard = document.querySelector('.card-pc');
    pcCard.classList.add('card-show');
}

function selectedPcSkill(skill) {
    if (skill == 'js') {
        var barSkillJs = document.querySelector('#pc-js-btn')
        barSkillJs.classList.add('selected');
    }
    if (skill == 'html') {
        var barSkillHtml = document.querySelector('#pc-html-btn')
        barSkillHtml.classList.add('selected');
    }

    if (skill == 'css') {
        var barSkillCss = document.querySelector('#pc-css-btn')
        barSkillCss.classList.add('selected');
    }
}

function game(skill) {
    if (skill == 'js') {
        revealPcCard();
        selectedPcSkill(skill);
    }

    if (skill == 'html') {
        revealPcCard();
        selectedPcSkill(skill);
    }

    if (skill == 'css') {
        revealPcCard();
        selectedPcSkill(skill);
    }
};