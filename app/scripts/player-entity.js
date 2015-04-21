var myScore = new score();
Crafty.sprite("images/sprites.png", {
    playerSprite: [0, 0, 20, 20]
});

var player = Crafty.e("player, 2D, Canvas , Fourway, SpriteAnimation, playerSprite, Collision");
player.reel('PlayerLeft', 1000, [[0, 0, 20, 20], [20, 0, 20, 20], [40, 0, 20, 20]]);
player.reel('PlayerRight', 1000, [[0, 20, 20, 20], [20, 20, 20, 20], [40, 0, 20, 20]]);
player.reel('PlayerUp', 1000, [[0, 40, 20, 20], [20, 40, 20, 20], [40, 0, 20, 20]]);
player.reel('PlayerDown', 1000, [[0, 60, 20, 20], [20, 60, 20, 20], [40, 0, 20, 20]]);

player.bind("NewDirection", function (direction) {
    //    console.log(direction);
    if (direction.x > 0) {
        player.animate('PlayerRight');
    }
    if (direction.x < 0) {
        player.animate('PlayerLeft');
    }
    if (direction.y > 0) {
        player.animate('PlayerDown');
    }
    if (direction.y < 0) {
        player.animate('PlayerUp');
    }
});
////////////////////////////




//Create a class category for playr objects.
//This object will represent the actual character that is controlled
//	by the player in this game.
//Requires the attributes 2D, Canvas, Collision, Color and Fourway
//Instances of the playr object will be created next
Crafty.c("playr", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color, Fourway").attr({
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            lives: 0,
            dotcount: 0
        }).color('yellow');
    }
});

//Create an instance of the playr object named "player"
//Give it a starting coordinate of (140, 80) and width and height of 20
//Start it with 2 lives, and a dotcount (score) of 0.
//Additionally, make it yellow and controlled by the Fourway function
player.attr({
    x: 140,
    y: 80,
    lives: 2,
    dotcount: 0,
    valid: 0,
    dec: 1
});
player.fourway(2);
Crafty.audio.play("start", 1);

//Create a function named scoreupdate which will utilize the dotcount variable
//	to run a "scoreboard"
//This function will initially copy the dotcount value into a tempscore variable
//tempscore will then be compared to a number of values in order to determine which
//	of the spaces on the scoreboard should light updateCommands
//Additionally, this scoreboard will function as a trigger to determine which pacdots
//	are available to hit. This is done by only allowing the 5th pacdot to be hit when
//	the score is a multiple of 4 (i.e., all other dots have been "eaten").
function scoreupdate() {
    myScore.addScore();
    myScore.updateScore();


    fourcheck = 0
    tempscore = player.dotcount
    if (tempscore >= 32) {
        scoredot32.color('white')
        tempscore = tempscore - 32
    } else {
        scoredot32.color('black')
    }

    if (tempscore >= 16) {
        scoredot16.color('white')
        tempscore = tempscore - 16
    } else {
        scoredot16.color('black')
    }

    if (tempscore >= 8) {
        scoredot8.color('white')
        tempscore = tempscore - 8
    } else {
        scoredot8.color('black')
        fourcheck = fourcheck + 1
    }

    if (tempscore >= 4) {
        scoredot4.color('white')
        tempscore = tempscore - 4
    } else {
        scoredot4.color('black')
        fourcheck = fourcheck + 1
    }

    if (tempscore >= 2) {
        scoredot2.color('white')
        tempscore = tempscore - 2
    } else {
        scoredot2.color('black')
        fourcheck = fourcheck + 1
    }

    if (tempscore >= 1) {
        scoredot1.color('white')
        tempscore = tempscore - 1
    } else {
        scoredot1.color('black')
        fourcheck = fourcheck + 1
    }

    if (fourcheck == 4) {
        pdot5.valid = 1
        pdot5.color('white')
    }
}

function colorcrash(time) {
    time = time + 1
    return "#FFFF" + time
}


//Movement related functions.
//Creates a "wrapping" boundary, which allows use of the tunnel between the
//	left and right edges of the map
//Provides collision functions as follows:
//	If player hits a ghost, decrement lives and reset the character, unless out of lives.
//		If out of lives, trigger game over screen
//	If player hits pacdots 1 - 4, mark the appropriate increase the score and mark the dot as invalid
//	If player hits pacdot 5, mark all other dots as valid, but do not increment score
player.bind("Moved", function (from) {

    if (this.hit("wall")) {
        this.attr({
            x: from.x,
            y: from.y
        })
    }

    if (this.hit("ghost") && this.lives >= 0 && this.valid == 0) {
        if (this.lives == 2) {
            life0.destroy()
            Crafty.audio.play("start");
        } else if (this.lives == 1) {
            life1.destroy()
        }
        if (!this.lives) {
            Crafty.e("2D, DOM, Text,Color").attr({
                x: 45,
                y: 100
            }).text("GameOver!!").textColor('#FF0000').textFont({
                size: '30px',
                weight: 'bold'
            });
            ghost_1.color("black", 0.0);
            ghost_2.color("black", 0.0);
            player.destroy();

            console.log("lost");
        }
        this.lives = this.lives - 1,
            this.valid = 1

        player.dec = 1.00
        Crafty.e("Delay").delay(function () {
                if (player.dec > 0.1) {} else {
                    player.attr({
                        x: 140,
                        y: 80
                    })
                    player.valid = 0
                }
                //if(player.dec <= 0.05){
                //this.attr({x:140, y:80})
                //this.valid = 0
                //this.color('yellow', 1)}
            }, 50, 19)
            //		this.color('yellow', this.dec)
            //		player.attr({x:140,y:80})
            //		this.valid = 0
    } else if (this.hit("ghost")) {
        player.attr({
            x: 140,
            y: 80
        });
        player.valid = 0;
        myScore.subLives();
        myScore.updateLives();
    }

    if (this.hit("pacdot") && (pdot2.valid == 0) && (player._x < 205) && player._x > 195 && (player._y == 20)) {
        pdot2.valid = 1
        pdot2.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    } else if (this.hit("pacdot") && (pdot1.valid == 0) && (player._x > 75) && player._x < 85 && (player._y == 20)) {
        pdot1.valid = 1
        pdot1.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    } else if (this.hit("pacdot") && (pdot3.valid == 0) && player._x > 75 && (player._x < 85) && (player._y == 140)) {
        pdot3.valid = 1
        pdot3.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    } else if (this.hit("pacdot") && (pdot4.valid == 0) && (player._x > 195) && player._x < 205 && (player._y == 140)) {
        pdot4.valid = 1
        pdot4.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    } else if (this.hit("pacdot") && (pdot6.valid == 0) && (player._x > 15) && player._x < 25 && (player._y == 20)) {
        pdot6.valid = 1
        pdot6.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot7.valid == 0) && (player._x > 255) && player._x < 265 && (player._y == 20)) {
        pdot7.valid = 1
        pdot7.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot8.valid == 0) && (player._x > 15) && player._x < 25 && (player._y == 140)) {
        pdot8.valid = 1
        pdot8.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot9.valid == 0) && (player._x > 255) && player._x < 265 && (player._y == 140)) {
        pdot9.valid = 1
        pdot9.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot10.valid == 0) && (player._x > 55) && player._x < 65 && (player._y == 60)) {
        pdot10.valid = 1
        pdot10.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot11.valid == 0) && (player._x > 215) && player._x < 225 && (player._y == 60)) {
        pdot11.valid = 1
        pdot11.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot12.valid == 0) && (player._x > 55) && player._x < 65 && (player._y == 100)) {
        pdot12.valid = 1
        pdot12.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot13.valid == 0) && (player._x > 215) && player._x < 225 && (player._y == 100)) {
        pdot13.valid = 1
        pdot13.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot14.valid == 0) && (player._x > 15) && player._x < 25 && (player._y == 80)) {
        pdot14.valid = 1
        pdot14.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot15.valid == 0) && (player._x > 255) && player._x < 265 && (player._y == 80)) {
        pdot15.valid = 1
        pdot15.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot16.valid == 0) && (player._x > 135) && player._x < 155 && (player._y == 20)) {
        pdot16.valid = 1
        pdot16.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    }
    if (this.hit("pacdot") && (pdot17.valid == 0) && (player._x > 135) && player._x < 155 && (player._y == 140)) {
        pdot17.valid = 1
        pdot17.color('black', .0)
        player.dotcount = player.dotcount + 1
        scoreupdate()
    } else if (this.hit("pacdot") && (pdot5.valid == 1) && (player._x > 135) && (player._x < 155) && player._y == 80) {
        pdot1.valid = 0
        pdot1.color('white')
        pdot2.valid = 0
        pdot2.color('white')
        pdot3.valid = 0
        pdot3.color('white')
        pdot4.valid = 0
        pdot4.color('white')
        pdot6.valid = 0
        pdot6.color('white')
        pdot7.valid = 0
        pdot7.color('white')
        pdot8.valid = 0
        pdot8.color('white')
        pdot9.valid = 0
        pdot9.color('white')
        pdot10.valid = 0
        pdot10.color('white')
        pdot11.valid = 0
        pdot11.color('white')
        pdot12.valid = 0
        pdot12.color('white')
        pdot13.valid = 0
        pdot13.color('white')
        pdot14.valid = 0
        pdot14.color('white')
        pdot15.valid = 0
        pdot15.color('white')
        pdot16.valid = 0
        pdot16.color('white')
        pdot17.valid = 0
        pdot17.color('white')

        pdot5.valid = 0
        pdot5.color('black', .0)
    }
})


player.bind("EnterFrame", function () {
    if (this._x > Crafty.viewport.width) {
        this.x = 0;
    }
    if (this._x < 0) {
        this.x = Crafty.viewport.width;
    }
    if (this._y > Crafty.viewport.height) {
        this.y = 0;
    }
    if (this._y < 0) {
        this.y = Crafty.viewport.height;
    }

});