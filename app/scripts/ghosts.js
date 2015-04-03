Crafty.c("ghost", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color").attr({
            x: 10,
            y: 20,
            w: 10,
            h: 100
        }).color('red');
    }
});

var ghost_1 = Crafty.e('2D, Canvas, Color, Fourway, Collision,ghost')
    .attr({
        x: 260,
        y: 140,
        w: 16,
        h: 16
    });

ghost_1.color('blue');
var ghost_2 = Crafty.e('2D, Canvas, Color, Fourway, Collision,ghost')
    .attr({
        x: 260,
        y: 20,
        w: 16,
        h: 16
    });
ghost_2.color('green');
//var ghost_3 = Crafty.e('2D, Canvas, Color, Fourway, Collision')
//    .attr({
//        x: 25,
//        y: 25,
//        w: 16,
//        h: 16
//    });
//var ghost_4 = Crafty.e('2D, Canvas, Color, Fourway, Collision')
//    .attr({
//        x: 25,
//        y: 25,
//        w: 16,
//        h: 16
//    });
