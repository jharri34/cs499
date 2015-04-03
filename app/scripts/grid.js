var grid = {
    width: 300,
    height: 180,
}
var tile = {
    width: 20,
    height: 20,
}

//var map = new ROT.Map.Arena(grid.width, grid.height);
//var display = new ROT.Display({
//    width: grid.width,
//    height: grid.height,
//    fontSize: 16
//});
//map.create(function (x, y, value) {
//    //    console.log("Value %s generated at [%s,%s]".format(value, x, y));
//    SHOW(display1.getContainer());
//});
//
//map.create(function(x, y, wall) {
//    display1.draw(x, y, wall ? "#" : ".");
//});
//


//Game.map = {};
//Game._generateMap = function() {
//    var digger = new ROT.Map.Digger();
// 
//    var digCallback = function(x, y, value) {
//        if (value) { return; } /* do not store walls */
// 
//        var key = x+","+y;
//        this.map[key] = ".";
//    }
//    digger.create(digCallback.bind(this));
//}
//
//Game._drawWholeMap = function() {
//    for (var key in this.map) {
//        var parts = key.split(",");
//        var x = parseInt(parts[0]);
//        var y = parseInt(parts[1]);
//        this.display.draw(x, y, this.map[key]);
//    }
//}
