var myScore = new score();
Crafty.sprite("images/sprites.png", {
    playerSprite: [0, 0, 20, 20]
});

var player = Crafty.e("player, 2D, DOM, Fourway, SpriteAnimation, playerSprite, Collision");
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

