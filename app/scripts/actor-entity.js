Crafty.c("Warp", {
    init: function () {
        this.bind("EnterFrame", function () {
            if (this._x > Crafty.viewport.width) {
                this.x = -Crafty.viewport.width;
                console.log(this);
            }
            if (this._x < Crafty.viewport.width) {
                this.x = Crafty.viewport.width;
            }
            if (this._y > Crafty.viewport.height) {
                this.y = -Crafty.viewport.width;
            }
            if (this._y < Crafty.viewport.height) {
                this.y = Crafty.viewport.height;
            }

        })
    }
});


//single moving block
var player = Crafty.e('2D, DOM, Color, Fourway, Collision')
    .attr({
        x: 0,
        y: 0,
        w: 10,
        h: 10
    });
player.color('#F00');
player.fourway(4);
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
//player.debugFill("purple") player.debugStroke("white");


//if (player._x > Crafty.viewport.width) {
//    player.x = -Crafty.viewport.width;
//    console.log(this);
//}
//if (player._x < Crafty.viewport.width) {
//    player.x = Crafty.viewport.width;
//}
//if (player._y > Crafty.viewport.height) {
//    player.y = -Crafty.viewport.width;
//}
//if (player._y < Crafty.viewport.height) {
//    player.y = Crafty.viewport.height;
//}

console.log(player);