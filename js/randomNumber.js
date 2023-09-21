const WIN = "You have won. Congratulations";
const LOSE = "You wasted all your tries. Good luck in your next game";
const HIGH = "Your number is too high.";
const LOW = "Your number is too low.";

class randomNumber {

    constructor(){
        this.num = Math.floor(Math.random() * 51)
        this.maxTries = 5;
        this.currentTry = 0;
        this.play = true;
        this.message = "";
    }

    randomizeNumber(){
        this.num = Math.floor(Math.random() * 51)
    }

    checkGuess(userGuess) {
        this.currentTry++;

    switch (true) {
        case this.num == userGuess:
            this.play = false;
            this.message = WIN;
            break;
        case this.currentTry >= this.maxTries:
            this.play = false;
            this.message = LOSE;
            break;
        case userGuess > this.num:
            this.message = HIGH;
            break;
        default:
            this.message = LOW;
        }
    }

    playAgain(){
        this.randomizeNumber();
        this.currentTry = 0;
        this.play = true;
    }


}