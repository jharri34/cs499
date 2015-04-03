//single moving block
var player = Crafty.e('2D, Canvas, Color, Fourway, Collision')
    .attr({
        x: 25,
        y: 25,
        w: 16,
        h: 16
    });
player.color('yellow');
player.fourway(4);

//wrapping boundary 
player.bind("Moved", function(from) {
    console.log(from);
    if (this.hit("wall")) {
        this.attr({
            x:from.x,
            y:from.y
        })
    }
    if(this.hit("ghost")){
       this.color("black");
        this.attr({x:25,y:25});
        this.color("yellow");
    }
});
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