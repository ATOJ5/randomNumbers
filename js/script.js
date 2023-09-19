const number = new randomNumber();
const form = document.getElementById('form');
const replacement = document.getElementById('replacement')
const writeNumberChosen = document.getElementById('writeNumberChosen');
const inputText = document.getElementById('inputTxt');



form.addEventListener('submit', function (e) {


    e.preventDefault(); 
    const userGuess = parseInt(inputText.value);
    const result = number.checkGuess(userGuess);

    writeNumberChosen.innerHTML += userGuess + '    ';

    if (result === "win") {
        window.alert("Congrats. You have won!");
        number.playAgain();
        writeNumberChosen.innerHTML = "";
    } else if (result === "lose") {
        window.alert("You have Lost. The number you had to insert was "+ number.num+ " Try again !!");
        number.playAgain();
        writeNumberChosen.innerHTML = "";
    } else {
        if (result === "high") {
            window.alert("The number you are inserted is higher. Try a lower number!!");
        } else {
            window.alert("The number you are inserted is lower. Try a higher number!!");
        }
    }

    if (!number.play){
        form.style.display = 'none';
        replacement.style.display = 'block'
    }

    inputText.value = "";
    
});

