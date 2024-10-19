/* Variables */

let namePlayerOne = '';
let namePlayerTwo = '';

let TeamPlayerOne = '';
let TeamPlayerTwo = '';

let Font = 'Crabby';

let CharacterPlayerOne = '';
let CharacterPlayerTwo = '';

let diceOne = 0;
let diceTwo = 0;

let winner = '';
let finalWinner = '';

let gamePlayerOne = document.getElementById('gamePlayerOne');
let healthPlayerOne = document.getElementById('healthPlayerOne');
let gamePlayerTwo = document.getElementById('gamePlayerTwo');
let healthPlayerTwo = document.getElementById('healthPlayerTwo');

/* Characters */

let HealthLevelOne = 30;
let HealthLevelTwo = 40;
let HealthLevelThree = 50;

let DamageLevelOne = 9;
let DamageLevelTwo = 12;
let DamageLevelThree = 15;

let SpongebobHealth = HealthLevelThree;
let SpongebobDamage = DamageLevelOne;

let PatrickHealth = HealthLevelOne;
let PatrickDamage = DamageLevelThree;

let SquidwardHealth = HealthLevelTwo;
let SquidwardDamage = DamageLevelTwo;

let MegHealth = HealthLevelTwo;
let MegDamage = DamageLevelTwo;

let PeterHealth = HealthLevelThree;
let PeterDamage = DamageLevelOne;

let StewieHealth = HealthLevelOne;
let StewieDamage = DamageLevelThree;

let lifePlayerOne;
let lifePlayerTwo;
let damagePlayerOne;
let damagePlayerTwo;



/* Name */

function submitNameOne() {
    let input_fieldOne = document.getElementById('nameOne');
    namePlayerOne = input_fieldOne.value;
    input_fieldOne.value = '';
    console.log(namePlayerOne);

    document.getElementById('playerOneChooseCharacter').innerHTML = 'Now <mark>' + namePlayerOne + '</mark> has to choose his Character';

    document.getElementById('succesPlayerOneName').style.display = 'block';

    setTimeout(() => {
        document.getElementById('succesPlayerOneName').style.display = 'none';
    }, 2000)

}



function submitNameTwo() {
    let input_fieldTwo = document.getElementById('nameTwo');
    namePlayerTwo = input_fieldTwo.value;
    input_fieldTwo.value = '';
    console.log(namePlayerTwo);

    document.getElementById('playerTwoChooseCharacter').innerHTML = 'Now <mark>' + namePlayerTwo + '</mark> has to choose his Character';

    document.getElementById('succesPlayerTwoName').style.display = 'block';

    setTimeout(() => {
        document.getElementById('succesPlayerTwoName').style.display = 'none';
    }, 2000)

}

function resetNameOne() {
    namePlayerOne = '';
    console.log(namePlayerOne);
    document.getElementById('nameOne').value = '';

    document.getElementById('playerOneChooseCharacter').innerHTML = 'Now Player One has to choose his Character';

    document.getElementById('succesPlayerOneNameReset').style.display = 'block';

    setTimeout(() => {
        document.getElementById('succesPlayerOneNameReset').style.display = 'none';
    }, 2000)

}

function resetNameTwo() {
    namePlayerTwo = '';
    console.log(namePlayerTwo);
    document.getElementById('nameTwo').value = '';

    document.getElementById('playerTwoChooseCharacter').innerHTML = 'Now Player Two has to choose his Character';

    document.getElementById('succesPlayerTwoNameReset').style.display = 'block';

    setTimeout(() => {
        document.getElementById('succesPlayerTwoNameReset').style.display = 'none';
    }, 2000)

}

/* Background Image */

function backgroundImageOne() {
    document.body.style.backgroundImage = 'url(../images/Background/Images/Background1.jpg)';
}

function backgroundImageTwo() {
    document.body.style.backgroundImage = 'url(../images/Background/Images/Background2.jpg)';
}

function backgroundImageThree() {
    document.body.style.backgroundImage = 'url(../images/Background/Images/Background3.jpg)';

}
function backgroundImageFour() {
    document.body.style.backgroundImage = 'url(../images/Background/Images/BackgroundFive.jpg)';
}
function backgroundImageFive() {
    document.body.style.backgroundImage = 'url(../images/Background/Images/BackgroundFour.jpg)';
}
function backgroundImageSix() {
    document.body.style.backgroundImage = 'url(../images/Background/Images/BackgroundSix.jpg)';
}

/* Back to Menu */

function backToMenu() {
    document.getElementById('warning').innerHTML = '<p class="warning" style="display:inline">Are you sure you want to <mark style="display:inline">leave</mark> the Gamepage?<br>' +
        'Your procces of customize your Game will be <mark style="display:inline">gone</mark> if you come back!</p><br>' +
        '<a class="backToHome" href="../index.html">Yes</a>' +
        '<div onclick="closeWarning()" class="close">No</div>';

}

function closeWarning() {
    document.getElementById('warning').innerHTML = '';
}

/* Change Font */

function changeFontCrabby() {

    document.getElementById("Crabby").style.display = "none";
    document.getElementById("FamilyGuy").style.display = "block";

    Font = 'Crabby';

    changeFont();
}

function changeFontFamilyGuy() {

    document.getElementById("Crabby").style.display = "block";
    document.getElementById("FamilyGuy").style.display = "none";

    Font = 'Griffins';

    changeFont();

}

function changeFont() {
    document.getElementById("headline").style.fontFamily = Font;
    document.getElementById("headlineNames").style.fontFamily = Font;
    document.getElementById("textSubmitOne").style.fontFamily = Font;
    document.getElementById("textResetNameOne").style.fontFamily = Font;
    document.getElementById("textSubmitTwo").style.fontFamily = Font;
    document.getElementById("textResetNameTwo").style.fontFamily = Font;
    document.getElementById("headlineFont").style.fontFamily = Font;
    document.getElementById("Crabby").style.fontFamily = Font;
    document.getElementById("FamilyGuy").style.fontFamily = Font;
    document.getElementById("headlineBackground").style.fontFamily = Font;
    document.getElementById("headlineCharacter").style.fontFamily = Font;
    document.getElementById("playerOneChooseCharacter").style.fontFamily = Font;
    document.getElementById("playerTwoChooseCharacter").style.fontFamily = Font;
    document.getElementById("buttonTeamSpongebobOne").style.fontFamily = Font;
    document.getElementById("buttonTeamFamilyGuyOne").style.fontFamily = Font;
    document.getElementById("chooseSpongebobOne").style.fontFamily = Font;
    document.getElementById("choosePatrickOne").style.fontFamily = Font;
    document.getElementById("chooseSquidwardOne").style.fontFamily = Font;
    document.getElementById("chooseMegOne").style.fontFamily = Font;
    document.getElementById("choosePeterOne").style.fontFamily = Font;
    document.getElementById("chooseStewieOne").style.fontFamily = Font;
    document.getElementById("buttonTeamSpongebobTwo").style.fontFamily = Font;
    document.getElementById("buttonTeamFamilyGuyTwo").style.fontFamily = Font;
    document.getElementById("chooseSpongebobTwo").style.fontFamily = Font;
    document.getElementById("choosePatrickTwo").style.fontFamily = Font;
    document.getElementById("chooseSquidwardTwo").style.fontFamily = Font;
    document.getElementById("chooseMegTwo").style.fontFamily = Font;
    document.getElementById("choosePeterTwo").style.fontFamily = Font;
    document.getElementById("chooseStewieTwo").style.fontFamily = Font;
    document.getElementById("overview").style.fontFamily = Font;
    document.getElementById("buttonOverview").style.fontFamily = Font;
    document.getElementById('starTextOne').style.fontFamily = Font;
    document.getElementById('starTextTwo').style.fontFamily = Font;
    document.getElementById('nameOne').style.fontFamily = Font;
    document.getElementById('nameTwo').style.fontFamily = Font;
    document.getElementById('back').style.fontFamily = Font;
    document.getElementById('succesPlayerOneName').style.fontFamily = Font;
    document.getElementById('succesPlayerTwoName').style.fontFamily = Font;
    document.getElementById('succesPlayerOneNameReset').style.fontFamily = Font;
    document.getElementById('succesPlayerTwoNameReset').style.fontFamily = Font;

    document.getElementById('overviewTextOne').style.fontFamily = Font;
    document.getElementById('overviewTextTwo').style.fontFamily = Font;
    document.getElementById('overviewTextThree').style.fontFamily = Font;
    document.getElementById('overviewTextFour').style.fontFamily = Font;

    document.getElementById('diceOne').style.fontFamily = Font;
    document.getElementById('diceTwo').style.fontFamily = Font;


}

/* Choose Character */

/* Player One Team */

function PlayerOneTeamSpongebob() {
    TeamPlayerOne = 'Spongebob';

    document.getElementById('buttonTeamSpongebobOne').style.display = 'none';
    document.getElementById('buttonTeamFamilyGuyOne').style.display = 'none';

    document.getElementById('SpongebobOne').style.display = 'block';
    document.getElementById('PatrickOne').style.display = 'block';
    document.getElementById('SquidwardOne').style.display = 'block';

}

function PlayerOneTeamFamilyGuy() {
    TeamPlayerOne = 'FamilyGuy';

    document.getElementById('buttonTeamSpongebobOne').style.display = 'none';
    document.getElementById('buttonTeamFamilyGuyOne').style.display = 'none';

    document.getElementById('MegOne').style.display = 'block';
    document.getElementById('PeterOne').style.display = 'block';
    document.getElementById('StewieOne').style.display = 'block';
}

/* Player One Character */

function PlayerOneCharacterSpongebob() {
    CharacterPlayerOne = 'Spongebob';

    document.getElementById('SpongebobOne').style.display = 'none';
    document.getElementById('PatrickOne').style.display = 'none';
    document.getElementById('SquidwardOne').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'block';
    document.getElementById('PlayerOneCharacter').style.display = 'none';
}

function PlayerOneCharacterPatrick() {
    CharacterPlayerOne = 'Patrick';

    document.getElementById('SpongebobOne').style.display = 'none';
    document.getElementById('PatrickOne').style.display = 'none';
    document.getElementById('SquidwardOne').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'block';
    document.getElementById('PlayerOneCharacter').style.display = 'none';
}

function PlayerOneCharacterSquidward() {
    CharacterPlayerOne = 'Squidward';

    document.getElementById('SpongebobOne').style.display = 'none';
    document.getElementById('PatrickOne').style.display = 'none';
    document.getElementById('SquidwardOne').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'block';
    document.getElementById('PlayerOneCharacter').style.display = 'none';
}

function PlayerOneCharacterMeg() {
    CharacterPlayerOne = 'Meg';

    document.getElementById('MegOne').style.display = 'none';
    document.getElementById('PeterOne').style.display = 'none';
    document.getElementById('StewieOne').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'block';
    document.getElementById('PlayerOneCharacter').style.display = 'none';
}

function PlayerOneCharacterPeter() {
    CharacterPlayerOne = 'Peter';

    document.getElementById('MegOne').style.display = 'none';
    document.getElementById('PeterOne').style.display = 'none';
    document.getElementById('StewieOne').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'block';
    document.getElementById('PlayerOneCharacter').style.display = 'none';
}

function PlayerOneCharacterStewie() {
    CharacterPlayerOne = 'Stewie';

    document.getElementById('MegOne').style.display = 'none';
    document.getElementById('PeterOne').style.display = 'none';
    document.getElementById('StewieOne').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'block';
    document.getElementById('PlayerOneCharacter').style.display = 'none';
}

/* Player Two Team */

function PlayerTwoTeamSpongebob() {
    TeamPlayerTwo = 'Spongebob';

    document.getElementById('buttonTeamSpongebobTwo').style.display = 'none';
    document.getElementById('buttonTeamFamilyGuyTwo').style.display = 'none';

    document.getElementById('SpongebobTwo').style.display = 'block';
    document.getElementById('PatrickTwo').style.display = 'block';
    document.getElementById('SquidwardTwo').style.display = 'block';
}

function PlayerTwoTeamFamilyGuy() {
    TeamPlayerTwo = 'FamilyGuy';

    document.getElementById('buttonTeamSpongebobTwo').style.display = 'none';
    document.getElementById('buttonTeamFamilyGuyTwo').style.display = 'none';

    document.getElementById('MegTwo').style.display = 'block';
    document.getElementById('PeterTwo').style.display = 'block';
    document.getElementById('StewieTwo').style.display = 'block';
}

/* Player Two Character */

function PlayerTwoCharacterSpongebob() {
    CharacterPlayerTwo = 'Spongebob';

    document.getElementById('SpongebobTwo').style.display = 'none';
    document.getElementById('PatrickTwo').style.display = 'none';
    document.getElementById('SquidwardTwo').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'none';
}

function PlayerTwoCharacterPatrick() {
    CharacterPlayerTwo = 'Patrick';

    document.getElementById('SpongebobTwo').style.display = 'none';
    document.getElementById('PatrickTwo').style.display = 'none';
    document.getElementById('SquidwardTwo').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'none';

}

function PlayerTwoCharacterSquidward() {
    CharacterPlayerTwo = 'Squidward';

    document.getElementById('SpongebobTwo').style.display = 'none';
    document.getElementById('PatrickTwo').style.display = 'none';
    document.getElementById('SquidwardTwo').style.display = 'none';


    document.getElementById('PlayerTwoCharacter').style.display = 'none';

}

function PlayerTwoCharacterMeg() {
    CharacterPlayerTwo = 'Meg';

    document.getElementById('MegTwo').style.display = 'none';
    document.getElementById('PeterTwo').style.display = 'none';
    document.getElementById('StewieTwo').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'none';

}

function PlayerTwoCharacterPeter() {
    CharacterPlayerTwo = 'Peter';

    document.getElementById('MegTwo').style.display = 'none';
    document.getElementById('PeterTwo').style.display = 'none';
    document.getElementById('StewieTwo').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'none';

}

function PlayerTwoCharacterStewie() {
    CharacterPlayerTwo = 'Stewie';

    document.getElementById('MegTwo').style.display = 'none';
    document.getElementById('PeterTwo').style.display = 'none';
    document.getElementById('StewieTwo').style.display = 'none';

    document.getElementById('PlayerTwoCharacter').style.display = 'none';

}

/* Overview */

function Overview() {
    if (namePlayerOne == '' || namePlayerTwo == '' || TeamPlayerOne == '' || TeamPlayerTwo == '' || CharacterPlayerOne == '' || CharacterPlayerTwo == '') {
        document.getElementById('overview').innerHTML = '<p style="font-family: ' + Font + '; display: block;" id="overviewTextOne">You have to fill in all the fields!</p>';

        setTimeout(function () {
            document.getElementById('overview').innerHTML = '';
        }, 2000)

    } else {
        document.getElementById('overview').innerHTML = '<p style="font-family: ' + Font + '" id="overviewTextTwo" class="overview"><img class="imageOverview" src="../images/character/image/' + CharacterPlayerOne + '.jpg" alt="">Player One: ' + namePlayerOne + '<br>' +
            'Team: ' + TeamPlayerOne + '<br>' +
            'Character: ' + CharacterPlayerOne + '</p>';

        document.getElementById('overview').innerHTML += '<p style="font-family: ' + Font + '" id="overviewTextThree" class="overview"><img class="imageOverview" src="../images/character/image/' + CharacterPlayerTwo + '.jpg" alt="">Player Two: ' + namePlayerTwo + '<br>' +
            'Team: ' + TeamPlayerTwo + '<br>' +
            'Character: ' + CharacterPlayerTwo + '</p>';


        document.getElementById('startGame').innerHTML = '<p style="font-family: ' + Font + '" id="overviewTextFour" class="startGame" onclick="startGame()">Start the Game!</p>';
    }
}

/* Start Game */

function initializeCharacter() {
    lifePlayerOne = eval(CharacterPlayerOne + 'Health');
    lifePlayerTwo = eval(CharacterPlayerTwo + 'Health');

    console.log("Life One Beginning: " + lifePlayerOne);
    console.log("Life Two Beginning: " + lifePlayerTwo);

    damagePlayerOne = eval(CharacterPlayerOne + 'Damage');
    damagePlayerTwo = eval(CharacterPlayerTwo + 'Damage');
}


function startGame() {

    initializeCharacter();

    document.getElementById('back').style.display = 'none';

    document.getElementById('OverviewPlayerOne').style.display = 'block';
    document.getElementById('OverviewPlayerTwo').style.display = 'block';

    document.getElementById('diceOne').style.display = 'block';
    document.getElementById('diceTwo').style.display = 'block';


    document.getElementById('customizeGame').style.display = 'none';

    gamePlayerOne.innerHTML = '<div id="playerOneBox"><p style="font-family: ' + Font + '; display: inline;" class="textGameStart" class="gamePlayerOne">Player One: ' + namePlayerOne + '<br>' +
        'Character: ' + CharacterPlayerOne + '<br>' +
        'Damage: ' + damagePlayerOne + '</p></div>';
    healthPlayerOne.innerHTML = '<p style="font-family: ' + Font + '; display: inline;" class="textGameStart" id="healthPlayerOne">Health: ' + lifePlayerOne + '</p></div>';


    gamePlayerTwo.innerHTML = '<div id="playerTwoBox"><p style="font-family: ' + Font + '; display: inline;" class="textGameStart" class="gamePlayerTwo">Player Two: ' + namePlayerTwo + '<br>' +
        'Character: ' + CharacterPlayerTwo + '<br>' +
        'Damage: ' + damagePlayerTwo + '</p></div>';
    healthPlayerTwo.innerHTML = '<p style="font-family: ' + Font + '; display: inline;" class="textGameStart" id="healthPlayerTwo">Health: ' + lifePlayerTwo + '</p>';

    document.getElementById('diceOnePackage').innerHTML = '<p id="diceOne" style="font-family: ' + Font + ';" onclick="rollDiceOne()">Throw the Dice!</p>'
    document.getElementById('diceTwoPackage').innerHTML = '<p id="diceTwo" style="font-family: ' + Font + ';" onclick="rollDiceTwo()">Throw the Dice!</p>'

    document.getElementById('gifCharacterOne').innerHTML = '<img class="positionGifsOne" src="../images/character/gif/PlayerOne' + CharacterPlayerOne + 'Standing.gif" alt="">'
    document.getElementById('gifCharacterTwo').innerHTML = '<img class="positionGifsTwo" src="../images/character/gif/PlayerTwo' + CharacterPlayerTwo + 'Standing.gif" alt="">'
}


/* Game Algorythm */

function rollDiceOne() {
    diceOne = Math.ceil(Math.random() * 6);

    document.getElementById('diceOnePackage').innerHTML = '<p style="font-family: ' + Font + ';" id="diceOne">Not your turn</p>'

    if (TeamPlayerOne == 'Spongebob') {
        document.getElementById('rolledDiceOne').innerHTML = '<img src="../images/dice/Spongebob' + diceOne + '.png" alt="">'
    } else if (TeamPlayerOne == 'FamilyGuy') {
        document.getElementById('rolledDiceOne').innerHTML = '<img src="../images/dice/FamilyGuy' + diceOne + '.png" alt="">'
    }



    console.log(diceOne);
    if (diceOne != 0 && diceTwo != 0) {
        checkWinner();
    }
}

function rollDiceTwo() {
    diceTwo = Math.ceil(Math.random() * 6);

    document.getElementById('diceTwoPackage').innerHTML = '<p style="font-family: ' + Font + ';" id="diceTwo">Not your turn</p>'

    if (TeamPlayerTwo == 'Spongebob') {
        document.getElementById('rolledDiceTwo').innerHTML = '<img src="../images/dice/Spongebob' + diceTwo + '.png" alt="">'
    } else if (TeamPlayerTwo == 'FamilyGuy') {
        document.getElementById('rolledDiceTwo').innerHTML = '<img src="../images/dice/FamilyGuy' + diceTwo + '.png" alt="">'
    }

    console.log(diceTwo);
    if (diceOne != 0 && diceTwo != 0) {
        checkWinner();
    }
}

function checkWinner() {

    if (diceOne > diceTwo) {
        winner = 1;
    } else if (diceOne < diceTwo) {
        winner = 2;
    } else {
        winner = 0;
    }

    diceOne = 0;
    diceTwo = 0;
    console.log(winner);
    attackPlayer();
}

function attackPlayer() {
    if (winner == 1) {
        lifePlayerTwo -= damagePlayerOne;
        document.getElementById('healthPlayerTwo').innerHTML = '<p style="font-family: ' + Font + '; display: inline;" class="textGameStart">Health: ' + lifePlayerTwo + '</p>';
        console.log('Life Player One: ' + lifePlayerTwo);
        document.getElementById('gifCharacterOne').innerHTML = '<img class="positionGifsOne" src="../images/character/gif/PlayerOne' + CharacterPlayerOne + 'Damage.gif" alt="">'
        document.getElementById('gifCharacterTwo').innerHTML = '<img class="positionGifsTwo" src="../images/character/gif/PlayerTwo' + CharacterPlayerTwo + 'LowerHealth.gif" alt="">'
    } else if (winner == 2) {
        lifePlayerOne -= damagePlayerTwo;
        document.getElementById('healthPlayerOne').innerHTML = '<p style="font-family: ' + Font + '; display: inline;" class="textGameStart">Health: ' + lifePlayerOne + '</p>';
        console.log('Life Player One: ' + lifePlayerOne);
        document.getElementById('gifCharacterTwo').innerHTML = '<img class="positionGifsTwo" src="../images/character/gif/PlayerTwo' + CharacterPlayerTwo + 'Damage.gif" alt="">'
        document.getElementById('gifCharacterOne').innerHTML = '<img class="positionGifsOne" src="../images/character/gif/PlayerOne' + CharacterPlayerOne + 'LowerHealth.gif" alt="">'
    }

    setTimeout(function () {

        document.getElementById('rolledDiceOne').innerHTML = '';
        document.getElementById('rolledDiceTwo').innerHTML = '';
        
        document.getElementById('gifCharacterOne').innerHTML = '<img class="positionGifsOne" src="../images/character/gif/PlayerOne' + CharacterPlayerOne + 'Standing.gif" alt="">'
        document.getElementById('gifCharacterTwo').innerHTML = '<img class="positionGifsTwo" src="../images/character/gif/PlayerTwo' + CharacterPlayerTwo + 'Standing.gif" alt="">'

        if (lifePlayerOne > 0 && lifePlayerTwo > 0) {
            document.getElementById('diceOnePackage').innerHTML = '<p id="diceOne" style="font-family: ' + Font + ';" onclick="rollDiceOne()">Throw the Dice!</p>'
            document.getElementById('diceTwoPackage').innerHTML = '<p id="diceTwo" style="font-family: ' + Font + ';" onclick="rollDiceTwo()">Throw the Dice!</p>'
        }

    }, 1500)



    if (lifePlayerOne <= 0 || lifePlayerTwo <= 0) {
        endGame();
    }

}

function endGame() {
    if (lifePlayerOne <= 0) {
        lifePlayerOne = 0;
        document.getElementById('healthPlayerOne').innerHTML = '<p style="font-family: ' + Font + '; display: inline;" class="textGameStart">Health: ' + lifePlayerOne + '</p>';
        finalWinner = 'Two';
    } else {
        lifePlayerTwo = 0;
        document.getElementById('healthPlayerTwo').innerHTML = '<p style="font-family: ' + Font + '; display: inline;" class="textGameStart">Health: ' + lifePlayerTwo + '</p>';
        finalWinner = 'One';
    }

    document.getElementById('diceOne').style.display = 'none';
    document.getElementById('diceTwo').style.display = 'none';

    setTimeout(function () {
        document.getElementById('GameOver').innerHTML = '<div class="GameOver"><p style="font-family: ' + Font + '">Game Over!</p><p style="font-family: ' + Font + '">' + namePlayerOne + ' has <mark>' + lifePlayerOne + '</mark> Health left</p><p style="font-family: ' + Font + '">' + namePlayerTwo + ' has <mark>' + lifePlayerTwo + '</mark> Health left</p><p style="font-family: ' + Font + '">The Winner is <mark>' + eval('namePlayer' + finalWinner) + '</mark></p><p style="font-family: ' + Font + '" id="playAgainButton" onclick="PlayAgain()">Play Again?</p><p></div>';
    }, 1500)
}

function PlayAgain() {


    document.getElementById('back').style.display = 'block';
    document.getElementById('OverviewPlayerOne').style.display = 'none';
    document.getElementById('OverviewPlayerTwo').style.display = 'none';
    document.getElementById('customizeGame').style.display = 'block';
    document.getElementById('GameOver').innerHTML = '';
    document.getElementById('overview').innerHTML = '';
    document.getElementById('startGame').innerHTML = '';

    document.getElementById('gifCharacterOne').innerHTML = '';
    document.getElementById('gifCharacterTwo').innerHTML = '';


    document.getElementById('PlayerOneCharacter').style.display = 'block';
    document.getElementById('PlayerTwoCharacter').style.display = 'none';


    document.getElementById('buttonTeamSpongebobOne').style.display = 'flex';
    document.getElementById('buttonTeamFamilyGuyOne').style.display = 'flex';
    document.getElementById('buttonTeamSpongebobTwo').style.display = 'flex';
    document.getElementById('buttonTeamFamilyGuyTwo').style.display = 'flex';

    document.getElementById('playerOneChooseCharacter').innerHTML = 'Now <mark>Player One</mark> has to choose his Character';
    document.getElementById('playerTwoChooseCharacter').innerHTML = 'Now <mark>Player Two</mark> has to choose his Character';

    document.getElementById('diceOnePackage').innerHTML = '<p id="diceOne" style="font-family: ' + Font + ';" onclick="rollDiceOne()">Throw the Dice!</p>'
    document.getElementById('diceTwoPackage').innerHTML = '<p id="diceTwo" style="font-family: ' + Font + ';" onclick="rollDiceTwo()">Throw the Dice!</p>'



    gamePlayerOne.innerHTML = '';
    healthPlayerOne.innerHTML = '';
    gamePlayerTwo.innerHTML = '';
    healthPlayerTwo.innerHTML = '';

    namePlayerOne = '';
    namePlayerTwo = '';
    TeamPlayerOne = '';
    TeamPlayerTwo = '';
    CharacterPlayerOne = '';
    CharacterPlayerTwo = '';
    diceOne = 0;
    diceTwo = 0;
    winner = '';
    finalWinner = '';
    lifePlayerOne = undefined;
    lifePlayerTwo = undefined;
    damagePlayerOne = undefined;
    damagePlayerTwo = undefined;
    Font = 'Crabby';

    changeFont();



}