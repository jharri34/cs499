//This variable is a 2 dimensional array which functions as a bit-map
//telling the code where to place walls.
//in this array "0" will represent empty spaces (where the characters can move)
//and "1" will represent walls (where the characters cannot move).
var map =  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
			
var map1 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 10, 5, 0, 6, 7, 8, 7, 5, 0, 6, 9, 0, 1],
            [1, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 1],
            [0, 0, 0, 0, 6, 5, 0, 0, 0, 6, 5, 0, 0, 0, 0],
            [1, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 1],
            [1, 0, 12, 5, 0, 2, 0, 3, 0, 2, 0, 6, 11, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

//Create a class category for wall objects.
//This object will represent the "walls" through which pacman and the ghosts cannot move
//Requires the attributes 2D, Canvas, Collision, and Color
//Instances of the wall object will be created in the for loop later
Crafty.c("wall", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color").attr({
            w: 20,
            h: 20
        }).color('#000080')
    }
});

//Create a class category for pacdot objects.
//This object will represent the pacdots that pacman will go around the
//	map and collect, increasing his score for doing so
//Requires the attributes 2D, Canvas, Collision, and Color
//Instances of the pacdot object will be created in the for loop later
Crafty.c("pacdot", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color").attr({
                w: 10,
                h: 10,
				valid: 0
            })
            .color('white');
    }
});

//Create a class category for scoredot objects.
//This object is a means of keeping score. A number of dots will be placed
//	in the lower right hand corner of the map, and these maps will act as
// 	a binary representation of the score.
//Requires the attributes 2D, Canvas, Collision, and Color
//The instances of the scoredot object will be created in the for loop later
Crafty.c("scoredot", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color").attr({
                x: 0,
                y: 0,
                w: 10,
                h: 10
            })
            .color('black');
    }
});

//Create a class category for ldot objects.
//This object will represent lives remaining for pacman (not counting the current life)
//	one will disappear each time pacman collides with a ghost. When pacman collides with
//	with a group and no "lives" still displayed on the screen, pacman will not respawn
//Requires the attributes 2D, Canvas, Collision, and Color
//Instances of the ldot object will be created in the for loop later
Crafty.c("ldot", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color").attr({
                x: 0,
                y: 0,
                w: 10,
                h: 10
            })
            .color('yellow');
    }
});

//This for method acts as the actual constructor for the map. It will traverse
//	the array "map" and place wall objects anywhere where the "map" array
//	contains a 1 and will place instances of the other objects at
//	appropriate places.
//Examples:
//	- Since map(0,0 contains a 1, a wall will be placed there
//	- We wish to place a pacdot at grid element defined by row 1 and column 4,
//		and name it pdot1. We therefore check for the appropriate i and j elements
//		and use this to place a pacdot named pdot1 at that coordinate
for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 9; j++) {
        if (map[j][i]) {
            Crafty.e('wall')
                .attr({
                    x: i * 20,
                    y: j * 20,
                    w: tile.width,
                    h: tile.height
                })
        } if (i == 4 && j == 1){
            var pdot1 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })

        }if (i == 10 && j == 1){
            var pdot2 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })

        }if (i == 4 && j == 7){
            var pdot3 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })

        }if (i == 10 && j == 7){
            var pdot4 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })

        }if (i == 7 && j == 4){
            var pdot5 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                }).color('black', .0)


		}if (i == 1 && j == 1){
            var pdot6 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}if (i == 13 && j == 1){
            var pdot7 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}if (i == 1 && j == 7){
            var pdot8 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}if (i == 13 && j == 7){
            var pdot9 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}if (i == 3 && j == 3){
            var pdot10 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}if (i == 11 && j == 3){
            var pdot11 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}if (i == 3 && j == 5){
            var pdot12 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}if (i == 11 && j == 5){
            var pdot13 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}
		if (i == 1 && j == 4){
            var pdot14 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}		
		if (i == 13 && j == 4){
            var pdot15 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}
		if (i == 7 && j == 1){
            var pdot16 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}
		if (i == 7 && j == 7){
            var pdot17 = Crafty.e('pacdot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })
		}
		
		if (i == 1 && j == 8){
            var life0 = Crafty.e('ldot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })

        }
		if (i == 0 && j == 8){
            var life1 = Crafty.e('ldot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    w: tile.width / 2,
                    h: tile.height / 2
                })

        }
		if (i == 14 && j == 8){
            var scoredot1 = Crafty.e('scoredot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    h: 10,
                    w: 10
                })

        }
		if (i == 13 && j == 8){
            var scoredot2 = Crafty.e('scoredot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    h: 10,
                    w: 10
                })

        }
		if (i == 12 && j == 8){
            var scoredot4 = Crafty.e('scoredot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    h: 10,
                    w: 10
                })

        }
		if (i == 11 && j == 8){
            var scoredot8 = Crafty.e('scoredot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    h: 10,
                    w: 10
                })

        }
		if (i == 10 && j == 8){
            var scoredot16 = Crafty.e('scoredot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    h: 10,
                    w: 10
                })

        }
		if (i == 9 && j == 8){
            var scoredot32 = Crafty.e('scoredot')
                .attr({
                    x: i * 20 + 5,
                    y: j * 20 + 5,
                    h: 10,
                    w: 10
                })
        }
    }
};



for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 9; j++) {
		if (map1[j][i] == 2) {
			Crafty.e('scoredot')
			.attr({x: i * 20 + 3,
				   y: j * 20 + 3,
				   h: 14,
				   w: 14
				 })
		}
		if (map1[j][i] == 3) {
			Crafty.e('scoredot')
			.attr({x: i * 20 + 3,
				   y: j * 20,
				   h: 17,
				   w: 14
				 })
		}
		if (map1[j][i] == 4) {
			Crafty.e('scoredot')
			.attr({x: i * 20 + 3,
				   y: j * 20 + 3,
				   h: 17,
				   w: 14
				 })
		}
		if (map1[j][i] == 5) {
			Crafty.e('scoredot')
			.attr({x: i * 20,
				   y: j * 20 + 3,
				   h: 14,
				   w: 17
				 })
		}
		if (map1[j][i] == 6) {
			Crafty.e('scoredot')
			.attr({x: i * 20 + 3,
				   y: j * 20 + 3,
				   h: 14,
				   w: 17
				 })
		}
		if (map1[j][i] == 7) {
			Crafty.e('scoredot')
			.attr({x: i * 20,
				   y: j * 20 + 3,
				   h: 14,
				   w: 20
				 })
		}
		if (map1[j][i] == 8) {
			Crafty.e('scoredot')
			.attr({x: i * 20,
				   y: j * 20 + 3,
				   h: 17,
				   w: 20
				 })
		}
		if (map1[j][i] == 9) {
			Crafty.e('scoredot')
			.attr({x: i * 20,
				   y: j * 20 + 3,
				   h: 17,
				   w: 17
				 })
		}
		if (map1[j][i] == 10) {
			Crafty.e('scoredot')
			.attr({x: i * 20 + 3,
				   y: j * 20 + 3,
				   h: 17,
				   w: 17
				 })
		}
		if (map1[j][i] == 11) {
			Crafty.e('scoredot')
			.attr({x: i * 20,
				   y: j * 20,
				   h: 17,
				   w: 17
				 })
		}
		if (map1[j][i] == 12) {
			Crafty.e('scoredot')
			.attr({x: i * 20 + 3,
				   y: j * 20,
				   h: 17,
				   w: 17
				 })
		}
	}
}	