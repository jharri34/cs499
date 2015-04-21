var grid = {
    width: 300,
    height: 180,
}
var tile = {
    width: 20,
    height: 20,
}

var map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];



Crafty.c("wall", {
    init: function () {
        this.requires("2D,Canvas,Collison,Color").attr({
            x: 10,
            y: 20,
            w: 10,
            h: 100
        }).color('red');
    }
});


for (var i = 0; i < map[0].length; i++) {
    for (var j = 0; j < map.length; j++) {
        if (map[j][i]) {
            Crafty.e('wall')
                .attr({
                    x: i * 20,
                    y: j * 20,
                    w: tile.width,
                    h: tile.height
                });
        } 
        
    }
}