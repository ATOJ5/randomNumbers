class randomNumber {

    constructor(){
        this.num = Math.floor(Math.random() * 51)
        this.maxTries = 5;
        this.currentTry = 0;
        this.play = true;
    }

    randomizeNumber(){
        this.num = Math.floor(Math.random() * 51)
    }

    checkGuess(userGuess) {
        this.currentTry++;

        if (this.num === userGuess) {
            return "win";
        } else if (this.currentTry >= this.maxTries) {
            return "lose";
        } else if (userGuess > this.num) {
            return "high";
        } else {
            return "low";
        }
    }

    reset(){
        this.randomizeNumber();
        this.currentTry = 0;
    }

    playAgain(){
        const playAgainConf = confirm("Do you want to play again?");
        if (playAgainConf) {
            number.reset();
            
        } else {
            window.alert("Thanks for playing. Goodbye!");
            this.play = false;
        }
    }

}