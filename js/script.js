import { GAME } from "./randomNumber.js";

const number = new GAME.game();
const message = document.getElementById('message')
const userNumber = document.getElementById('inputNumber');
const submit = document.getElementById('submit');
const startNewGame = document.getElementById('startNewGame')
const attempsLeft = document.getElementById('try');

submit.addEventListener('click', function () {

    attempsLeft.innerHTML = number.currentTry;

    if (number.play){

        number.isPlayAvaliable(userNumber.value);
        

        const styles = `
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem; 
        text-decoration: none;
        text-shadow: 0px 1px 0px #283966;
    `;
        
        message.innerHTML = number.message + '    ';
        message.style.cssText = styles;
    }   

});

submit.addEventListener('click', () => {

    submit.classList.add("styleMsg");
    setTimeout(() => {
        submit.classList.remove("styleMsg");
    }, 250);
    
});

startNewGame.addEventListener('click', function(){

    number.playAgain();
    message.innerHTML = "Click on Try to start";
});

