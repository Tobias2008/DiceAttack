/* Themes */

function themeSpongebob() {
    document.getElementById("Griffins").style.display = 'block';
    document.body.style.backgroundImage = "url('./images/Background/Images/Background1.jpg')";

    themeSpongebobInvisble();
    
    document.getElementById("headline").style.fontFamily = 'Crabby';
    document.getElementById("startGameOne").style.fontFamily = 'Crabby';
    document.getElementById("BackgroundTutorial").style.fontFamily = 'Crabby';
    document.getElementById("TutorialCharacter").style.fontFamily = 'Crabby';
    document.getElementById("TeamSpongebob").style.fontFamily = 'Crabby';
    document.getElementById("TeamGriffins").style.fontFamily = 'Crabby';
    document.getElementById("startGameTwo").style.fontFamily = 'Crabby';
    document.getElementById("startGameTwo").style.fontSize = '4em';
    document.getElementById("TutorialCharacter").style.fontSize = '4em';
    document.getElementById("Griffins").style.fontFamily = 'Crabby';

}

function themeSpongebobInvisble() {
    document.getElementById("Spongebob").style.display = 'none';
}

function themeGriffins() {

    document.body.style.backgroundImage = "url('./images/Background/Images/BackgroundFive.jpg')";

    document.getElementById("Spongebob").style.display = 'block';

    themeGriffinsInvisble();

    document.getElementById("headline").style.fontFamily = 'Griffins';
    document.getElementById("startGameOne").style.fontFamily = 'Griffins';
    document.getElementById("BackgroundTutorial").style.fontFamily = 'Griffins';
    document.getElementById("TutorialCharacter").style.fontFamily = 'Griffins';
    document.getElementById("TeamSpongebob").style.fontFamily = 'Griffins';
    document.getElementById("TeamGriffins").style.fontFamily = 'Griffins';
    document.getElementById("startGameTwo").style.fontFamily = 'Griffins';
    document.getElementById("startGameTwo").style.fontSize = '3em';
    document.getElementById("TutorialCharacter").style.fontSize = '3em';
    document.getElementById("startGameTwo").style.fontWeight = 'lighter';
    document.getElementById("Spongebob").style.fontFamily = 'Griffins';
    document.getElementById("Spongebob").style.fontSize = '1.3em';
}

function themeGriffinsInvisble() {
    document.getElementById("Griffins").style.display = 'none';
}
