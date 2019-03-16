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

function userSpecialActive(nome) {
    if (isUserSpecialActive(user, pc)) {
        switch (nome) {
            case 'Sany':
                sanySpecial(user);
                break;
            case 'Romulo':
                romuloSpecial(user);
                break;
            case 'Clé':
                cleSpecial(user);
                break;
            case 'Gabriel':
                gabrielSpecial(user);
                break;
            case 'Professor Coe':
                coeSpecial(user);
                break;
            case 'Kerlyn':
                kerlynSpecial(user);
                break;
            case 'Lucas':
                lucasSpecial(user);
                break;
            case 'Manu':
                manuSpecial(user);
                break;
            case 'Paul':
                paulSpecial(user);
                break;
            case 'Pedro':
                pedroSpecial(user);
                break;
            case 'Rafa':
                rafaSpecial(user);
                break;
            case 'Wilkor':
                wilkorSpecial(user);
                break;
            case 'Marcelo':
                marceloSpecial(user);
                break;
            case 'Fred':
                fredSpecial(user);
                break;
            case 'Gui':
                guiSpecial(user);
                break;
        }
    }
}

function pcSpecialActive(nome) {
    if (isPcSpecialActive(user, pc)) {
        switch (nome) {
            case 'Sany':
                sanySpecial(pc);
                break;
            case 'Romulo':
                romuloSpecial(pc);
                break;
            case 'Clé':
                cleSpecial(pc);
                break;
            case 'Gabriel':
                gabrielSpecial(pc);
                break;
            case 'Professor Coe':
                coeSpecial(pc);
                break;
            case 'Kerlyn':
                kerlynSpecial(pc);
                break;
            case 'Lucas':
                lucasSpecial(pc);
                break;
            case 'Manu':
                manuSpecial(pc);
                break;
            case 'Paul':
                paulSpecial(pc);
                break;
            case 'Pedro':
                pedroSpecial(pc);
                break;
            case 'Rafa':
                rafaSpecial(pc);
                break;
            case 'Wilkor':
                wilkorSpecial(pc);
                break;
            case 'Marcelo':
                marceloSpecial(pc);
                break;
            case 'Fred':
                fredSpecial(pc);
                break;
            case 'Gui':
                guiSpecial(pc);
                break;
        }
    }
}

function sanySpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 3;
        user.card.html += 3;
        user.card.css += 3;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 3;
        pc.card.html += 3;
        pc.card.css += 3;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function romuloSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 4;
        user.card.html += 4;
        user.card.css += 4;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 4;
        pc.card.html += 4;
        pc.card.css += 4;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function cleSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 15;
        user.card.html += 15;
        user.card.css += 15;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 15;
        pc.card.html += 15;
        pc.card.css += 15;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function gabrielSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 10;
        user.card.html += 10;
        user.card.css += 10;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 10;
        pc.card.html += 10;
        pc.card.css += 10;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }

}

function coeSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == pc) {
        user.card.js += 5;
        user.card.html += 5;
        user.card.css += 5;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 5;
        pc.card.html += 5;
        pc.card.css += 5;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function kerlynSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 32;
        user.card.html += 32;
        user.card.css += 32;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 32;
        pc.card.html += 32;
        pc.card.css += 32;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function lucasSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 5;
        user.card.html += 5;
        user.card.css += 5;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 5;
        pc.card.html += 5;
        pc.card.css += 5;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function manuSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == pc) {
        user.card.js -= 5;
        user.card.html -= 5;
        user.card.css -= 5;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js -= 5;
        pc.card.html -= 5;
        pc.card.css -= 5;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function paulSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 5;
        user.card.html += 5;
        user.card.css += 5;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 5;
        pc.card.html += 5;
        pc.card.css += 5;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function pedroSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 10;
        user.card.html += 10;
        user.card.css += 10;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 10;
        pc.card.html += 10;
        pc.card.css += 10;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function rafaSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == pc) {
        user.card.js -= 20;
        user.card.html -= 20;
        user.card.css -= 20;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js -= 20;
        pc.card.html -= 20;
        pc.card.css -= 20;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function wilkorSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 10;
        user.card.html += 10;
        user.card.css += 10;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 10;
        pc.card.html += 10;
        pc.card.css += 10;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function marceloSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == user) {
        user.card.js += 6;
        user.card.html += 6;
        user.card.css += 6;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js += 6;
        pc.card.html += 6;
        pc.card.css += 6;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function fredSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == pc) {
        user.card.js -= 40;
        user.card.html -= 40;
        user.card.css -= 40;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js -= 40;
        pc.card.html -= 40;
        pc.card.css -= 40;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}

function guiSpecial(player) {
    msgSpecial.innerHTML = player.card.description;
    modalSpecialBox.style = 'display: flex;';
    if (player == pc) {
        user.card.js -= 5;
        user.card.html -= 5;
        user.card.css -= 5;
        userJsLevel.innerHTML = user.card.js;
        userHtmlLevel.innerHTML = user.card.html;
        userCssLevel.innerHTML = user.card.css;
    } else {
        pc.card.js -= 5;
        pc.card.html -= 5;
        pc.card.css -= 5;
        pcJsLevel.innerHTML = pc.card.js;
        pcHtmlLevel.innerHTML = pc.card.html;
        pcCssLevel.innerHTML = pc.card.css;
    }
}