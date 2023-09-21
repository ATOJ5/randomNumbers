const number = new randomNumber();
const message = document.getElementById('messageBox')
const userNumber = document.getElementById('inputNumber');
const submit = document.getElementById('submit');
const startNewGame = document.getElementById('startNewGame')
const azura = document.querySelector(".azura");


submit.addEventListener('click', function () {

    if (number.play && userNumber.value != 0){
        
        number.checkGuess(userNumber.value);

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

    submit.classList.add("myAnim");
    setTimeout(() => {
        submit.classList.remove("myAnim");
    }, 500);
    
});

startNewGame.addEventListener('click', function(){

    number.playAgain();
    message.innerHTML = "Click on Try to start";
});

