import { high, low } from "../modules/libraryFunctions.js";

var GAME = GAME || {};
GAME.game = class {

    constructor() {
        this.num = Math.floor(Math.random() * 51)
        this.maxTries = 4;
        this.currentTry = 0;
        this.play = true;
        this.message = "";
    }

    resetNumber() {
        this.num = Math.floor(Math.random() * 51)
    }

    triesAvaliable() {
        return this.maxTries > this.currentTry;
    }

    sucess(userGuess) {
        return this.num == userGuess;
    }

    win() {
        this.play = false;
        this.message = "You have won. Congratulations";
    }

    gameOver() {
        this.play = false;
        this.message = "You wasted all your tries. Good luck in your next game";
    }
    cantPlay() {
        this.message = "Start a new Game to play Again"
    }

    highOrLow(userGuess) {
        if (userGuess > this.num){
            this.message=high()
        } else {
            this.message=low();
        }
    }

    isPlayAvaliable(userGuess) {
        return this.play
        ? this.playGame(userGuess)
        : this.cantPlay();
    }

    playGame(userGuess) {
        return this.triesAvaliable()
        ? this.checkGuess(userGuess)
        : this.gameOver();
    }

    checkGuess(userGuess) {

        this.currentTry++;
        return this.sucess(userGuess) 
        ? this.win(userGuess)
        : this.highOrLow(userGuess)

    }

    playAgain() {
        this.resetNumber();
        this.currentTry = 0;
        this.play = true;
    }


}

export{GAME};