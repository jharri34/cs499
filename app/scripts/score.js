function score() {
    this.currentScore = currentScore = parseInt(localStorage['currentScore']) || 0;
    this.highScore = highScore = parseInt(localStorage['highScore']) || 0;
    this.lives = lives = 3;
    this.addScore = function () {
        currentScore = parseInt($("#score").html()) + 1;
        if(currentScore>highScore){
            highScore = currentScore;
            this.storeScore();
        
        }
    };
    this.updateScore = function () {
        $("#score").html(currentScore);
        $("#highScore").html(highScore);
    };
    this.storeScore = function () {
        localStorage.setItem("highScore", currentScore);
        $("#highScore").html(highScore);  
    };
    this.subLives= function(){
    lives = lives - 1;
    };
    
    this.updateLives= function(){
        $("#lives").html(lives);
    };
};