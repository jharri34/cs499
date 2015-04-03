
//single moving block
var player = Crafty.e('2D, DOM, Color, Fourway, Collision')
    .attr({
        x: 0,
        y: 0,
        w: 10,
        h: 10
    });
player.color('yellow');
player.fourway(4);

//wrapping boundary 
player.bind("EnterFrame",function () {
    if(this._x >  Crafty.viewport.width ){
        this.x = 0;
    }if(this._x <  0 ){
        this.x = Crafty.viewport.width;
    }if(this._y > Crafty.viewport.height ){
        this.y = 0;
    }if(this._y <  0 ){
        this.y = Crafty.viewport.height;
    }
    
});

console.log(player);