
class randomNumber {

    constructor(){
        this.num = Math.floor(Math.random() * 51)
        this.maxTries = 4;
        this.currentTry = 0;
        this.play = true;
        this.message = "";
    }

    resetNumber(){
        this.num = Math.floor(Math.random() * 51)
    }

    triesAvaliable (number){
        return this.maxTries > number.currentTry;
    }

    sucess(userGuess){
        return this.num == userGuess;
    }

    high(){ 
        
        this.message = "Your inserted number is higher.";
    }

    low(){
        this.message = "Your inserted number is lower.";
    }

    win(){
        this.play = false;
        this.message = "You have won. Congratulations";
    }

    gameOver(){
        this.play = false;
        this.message = "You wasted all your tries. Good luck in your next game";
    }
    cantPlay(){
        this.message = "Start a new Game to play Again"
    }

    highOrLow(userGuess){
        if (userGuess > this.num){
            this.high();
        } else {
            this.low();
        }
    }

    isPlayAvaliable(userGuess){
        return this.play
        ? this.playGame(userGuess)
        : this.cantPlay();
    }

    playGame(userGuess){
        return this.triesAvaliable(number)
        ? this.checkGuess(userGuess)
        : this.gameOver();
    }

    checkGuess(userGuess){

        this.currentTry++;
        return this.sucess(userGuess) 
        ? this.win(userGuess)
        : this.highOrLow(userGuess)

    }

    playAgain(){
        this.resetNumber();
        this.currentTry = 0;
        this.play = true;
    }


}