//Creating a class category for ghost objects. 
//Requires the attributes 2D, Canvas, Collision, and Color
//w and h define the width and height of the ghost object
Crafty.c("ghost", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color").attr({
            w: 16,
            h: 16
        });
    }
});

//establishing an instance of ghost object and name it ghost_1
//start the ghost at x = 262 and y = 142, which corresponds to
//the lower right corner of the map. 
//give the ghost the color attribute 'red'
var ghost_1 = Crafty.e('2D, Canvas, Color, Fourway, Collision,ghost')
    .attr({
        x: 262,
        y: 142,
    });
	
//This section of code controls ghost_1's movement around the maze.
//This code simply dictates which direction the ghost should move
//in certain areas of the map, thereby creating a "patrol route"
//for the ghost.
ghost_1.bind("EnterFrame", function() {
	speed = 2
	if(ghost_1.x >= 202 && ghost_1.x <= 280 && ghost_1.y == 142)
	{ghost_1.move("w", speed)}
	else if(ghost_1.x >= 200 && ghost_1.x <= 220 && ghost_1.y >= 100 && ghost_1.y <= 160)
	{ghost_1.move("n", speed)}
	else if(ghost_1.x >= 200 && ghost_1.x <= 220 && ghost_1.y <= 100 && ghost_1.y >= 80)
	{ghost_1.move("e", speed)}
	else if(ghost_1.x >= 220 && ghost_1.x <= 240 && ghost_1.y >= 65 && ghost_1.y <= 120)
	{ghost_1.move("n", speed)}
	else if(ghost_1.x <= 225 && ghost_1.x >= 203 && ghost_1.y >= 60 && ghost_1.y <= 70)
	{ghost_1.move("w", speed)}
	else if(ghost_1.x <= 225 && ghost_1.x >= 195 && ghost_1.y >= 23 && ghost_1.y <= 70)
	{ghost_1.move("n", speed)}
	else if(ghost_1.x <= 225 && ghost_1.x >= 83 && ghost_1.y >= 20 && ghost_1.y <= 40)
	{ghost_1.move("w", speed)}
	else if(ghost_1.x >= 81 && ghost_1.x <= 100 && ghost_1.y >= 20 && ghost_1.y <= 62)
	{ghost_1.move("s", speed)}
	else if(ghost_1.x <= 95 && ghost_1.x >= 63 && ghost_1.y >= 40 && ghost_1.y <= 82)
	{ghost_1.move("w", speed)}
	else if(ghost_1.x <= 80 && ghost_1.x >= 60 && ghost_1.y >= 60 && ghost_1.y <= 100)
	{ghost_1.move("s", speed)}
	else if(ghost_1.x >= 60 && ghost_1.x <= 80 && ghost_1.y >= 100 && ghost_1.y <= 122)
	{ghost_1.move("e", speed)}
	else if(ghost_1.x >= 80 && ghost_1.x <= 102 && ghost_1.y >= 100 && ghost_1.y <= 140)
	{ghost_1.move("s", speed)}
	else if(ghost_1.x >= 80 && ghost_1.x <= 202 && ghost_1.y >= 135 && ghost_1.y <= 150)
	{ghost_1.move("e", speed)}
	});
ghost_1.color('red');

//establishing an instance of ghost object and name it ghost_2
//start the ghost at x = 22 and y = 142, which corresponds to
//the lower left corner of the map.
//give the ghost the color attribute 'green'
var ghost_2 = Crafty.e('2D, Canvas, Color, Fourway, Collision,ghost')
    .attr({
        x: 22,
        y: 142,
    });
	
//This section of code controls ghost_2's movement around the maze.
//This code simply dictates which direction the ghost should move
//in certain areas of the map, thereby creating a "patrol route"
//for the ghost.
ghost_2.bind("EnterFrame", function() {
	speed = 2
	if(ghost_2.x >= 20 && ghost_2.x <= 120 && ghost_2.y == 142)
	{ghost_2.move("e", speed)}
	else if(ghost_2.x >= 118 && ghost_2.x <= 142 && ghost_2.y <= 145 && ghost_2.y >= 82)
	{ghost_2.move("n", speed)}
	else if(ghost_2.x >= 118 && ghost_2.x <= 160 && ghost_2.y <= 102 && ghost_2.y >= 80)
	{ghost_2.move("e", speed)}
	else if(ghost_2.x >= 160 && ghost_2.x <= 180 && ghost_2.y >= 78 && ghost_2.y <= 141)
	{ghost_2.move("s", speed)}
	else if(ghost_2.x >= 160 && ghost_2.x <= 260 && ghost_2.y >= 140 && ghost_2.y <= 160)
	{ghost_2.move("e", speed)}
	else if(ghost_2.x >= 260 && ghost_2.x <= 280 && ghost_2.y <= 160 && ghost_2.y >= 22)
	{ghost_2.move("n", speed)}
	else if(ghost_2.x <= 280 && ghost_2.x >= 23 && ghost_2.y >= 20 && ghost_2.y <= 40)
	{ghost_2.move("w", speed)}
	else if(ghost_2.x >= 20 && ghost_2.x <= 40 && ghost_2.y >= 20 && ghost_2.y <= 142)
	{ghost_2.move("s", speed)}
	});
ghost_2.color('green');