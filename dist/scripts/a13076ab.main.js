function score(){this.currentScore=currentScore=parseInt(localStorage.currentScore)||0,this.highScore=highScore=parseInt(localStorage.highScore)||0,this.lives=lives=3,this.addScore=function(){currentScore=parseInt($("#score").html())+1,currentScore>highScore&&(highScore=currentScore,this.storeScore())},this.updateScore=function(){$("#score").html(currentScore),$("#highScore").html(highScore)},this.storeScore=function(){localStorage.setItem("highScore",currentScore),$("#highScore").html(highScore)},this.subLives=function(){lives-=1},this.updateLives=function(){$("#lives").html(lives)}}function scoreupdate(){myScore.addScore(),myScore.updateScore(),fourcheck=0,tempscore=player.dotcount,tempscore>=32?(scoredot32.color("white"),tempscore-=32):scoredot32.color("black"),tempscore>=16?(scoredot16.color("white"),tempscore-=16):scoredot16.color("black"),tempscore>=8?(scoredot8.color("white"),tempscore-=8):(scoredot8.color("black"),fourcheck+=1),tempscore>=4?(scoredot4.color("white"),tempscore-=4):(scoredot4.color("black"),fourcheck+=1),tempscore>=2?(scoredot2.color("white"),tempscore-=2):(scoredot2.color("black"),fourcheck+=1),tempscore>=1?(scoredot1.color("white"),tempscore-=1):(scoredot1.color("black"),fourcheck+=1),4==fourcheck&&(pdot5.valid=1,pdot5.color("white"))}function colorcrash(a){return a+=1,"#FFFF"+a}console.log("'Allo 'Allo!"),Crafty.init(300,180,document.getElementById("game"));var grid={width:300,height:180},tile={width:20,height:20},map=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,1,1,1,1,1,0,1,1,0,1],[1,0,1,0,0,0,0,1,0,0,0,0,1,0,1],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[1,0,1,0,0,0,0,1,0,0,0,0,1,0,1],[1,0,1,1,0,1,0,1,0,1,0,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],map1=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,10,5,0,6,7,8,7,5,0,6,9,0,1],[1,0,3,0,0,0,0,3,0,0,0,0,3,0,1],[0,0,0,0,6,5,0,0,0,6,5,0,0,0,0],[1,0,4,0,0,0,0,4,0,0,0,0,4,0,1],[1,0,12,5,0,2,0,3,0,2,0,6,11,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];Crafty.c("wall",{init:function(){this.requires("2D,Canvas,Collison,Color").attr({w:20,h:20}).color("#000080")}}),Crafty.c("pacdot",{init:function(){this.requires("2D,Canvas,Collison,Color").attr({w:10,h:10,valid:0}).color("white")}}),Crafty.c("scoredot",{init:function(){this.requires("2D,Canvas,Collison,Color").attr({x:0,y:0,w:10,h:10}).color("black")}}),Crafty.c("ldot",{init:function(){this.requires("2D,Canvas,Collison,Color").attr({x:0,y:0,w:10,h:10}).color("yellow")}});for(var i=0;15>i;i++)for(var j=0;9>j;j++){if(map[j][i]&&Crafty.e("wall").attr({x:20*i,y:20*j,w:tile.width,h:tile.height}),4==i&&1==j)var pdot1=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(10==i&&1==j)var pdot2=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(4==i&&7==j)var pdot3=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(10==i&&7==j)var pdot4=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(7==i&&4==j)var pdot5=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2}).color("black",0);if(1==i&&1==j)var pdot6=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(13==i&&1==j)var pdot7=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(1==i&&7==j)var pdot8=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(13==i&&7==j)var pdot9=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(3==i&&3==j)var pdot10=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(11==i&&3==j)var pdot11=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(3==i&&5==j)var pdot12=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(11==i&&5==j)var pdot13=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(1==i&&4==j)var pdot14=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(13==i&&4==j)var pdot15=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(7==i&&1==j)var pdot16=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(7==i&&7==j)var pdot17=Crafty.e("pacdot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(1==i&&8==j)var life0=Crafty.e("ldot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(0==i&&8==j)var life1=Crafty.e("ldot").attr({x:20*i+5,y:20*j+5,w:tile.width/2,h:tile.height/2});if(14==i&&8==j)var scoredot1=Crafty.e("scoredot").attr({x:20*i+5,y:20*j+5,h:10,w:10});if(13==i&&8==j)var scoredot2=Crafty.e("scoredot").attr({x:20*i+5,y:20*j+5,h:10,w:10});if(12==i&&8==j)var scoredot4=Crafty.e("scoredot").attr({x:20*i+5,y:20*j+5,h:10,w:10});if(11==i&&8==j)var scoredot8=Crafty.e("scoredot").attr({x:20*i+5,y:20*j+5,h:10,w:10});if(10==i&&8==j)var scoredot16=Crafty.e("scoredot").attr({x:20*i+5,y:20*j+5,h:10,w:10});if(9==i&&8==j)var scoredot32=Crafty.e("scoredot").attr({x:20*i+5,y:20*j+5,h:10,w:10})}for(var i=0;15>i;i++)for(var j=0;9>j;j++)2==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i+3,y:20*j+3,h:14,w:14}),3==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i+3,y:20*j,h:17,w:14}),4==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i+3,y:20*j+3,h:17,w:14}),5==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i,y:20*j+3,h:14,w:17}),6==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i+3,y:20*j+3,h:14,w:17}),7==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i,y:20*j+3,h:14,w:20}),8==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i,y:20*j+3,h:17,w:20}),9==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i,y:20*j+3,h:17,w:17}),10==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i+3,y:20*j+3,h:17,w:17}),11==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i,y:20*j,h:17,w:17}),12==map1[j][i]&&Crafty.e("scoredot").attr({x:20*i+3,y:20*j,h:17,w:17});Crafty.c("ghost",{init:function(){this.requires("2D,Canvas,Collison,Color").attr({w:16,h:16})}});var ghost_1=Crafty.e("2D, Canvas, Color, Fourway, Collision,ghost").attr({x:262,y:142});ghost_1.bind("EnterFrame",function(){speed=2,ghost_1.x>=202&&ghost_1.x<=280&&142==ghost_1.y?ghost_1.move("w",speed):ghost_1.x>=200&&ghost_1.x<=220&&ghost_1.y>=100&&ghost_1.y<=160?ghost_1.move("n",speed):ghost_1.x>=200&&ghost_1.x<=220&&ghost_1.y<=100&&ghost_1.y>=80?ghost_1.move("e",speed):ghost_1.x>=220&&ghost_1.x<=240&&ghost_1.y>=65&&ghost_1.y<=120?ghost_1.move("n",speed):ghost_1.x<=225&&ghost_1.x>=203&&ghost_1.y>=60&&ghost_1.y<=70?ghost_1.move("w",speed):ghost_1.x<=225&&ghost_1.x>=195&&ghost_1.y>=23&&ghost_1.y<=70?ghost_1.move("n",speed):ghost_1.x<=225&&ghost_1.x>=83&&ghost_1.y>=20&&ghost_1.y<=40?ghost_1.move("w",speed):ghost_1.x>=81&&ghost_1.x<=100&&ghost_1.y>=20&&ghost_1.y<=62?ghost_1.move("s",speed):ghost_1.x<=95&&ghost_1.x>=63&&ghost_1.y>=40&&ghost_1.y<=82?ghost_1.move("w",speed):ghost_1.x<=80&&ghost_1.x>=60&&ghost_1.y>=60&&ghost_1.y<=100?ghost_1.move("s",speed):ghost_1.x>=60&&ghost_1.x<=80&&ghost_1.y>=100&&ghost_1.y<=122?ghost_1.move("e",speed):ghost_1.x>=80&&ghost_1.x<=102&&ghost_1.y>=100&&ghost_1.y<=140?ghost_1.move("s",speed):ghost_1.x>=80&&ghost_1.x<=202&&ghost_1.y>=135&&ghost_1.y<=150&&ghost_1.move("e",speed)}),ghost_1.color("red");var ghost_2=Crafty.e("2D, Canvas, Color, Fourway, Collision,ghost").attr({x:22,y:142});ghost_2.bind("EnterFrame",function(){speed=2,ghost_2.x>=20&&ghost_2.x<=120&&142==ghost_2.y?ghost_2.move("e",speed):ghost_2.x>=118&&ghost_2.x<=142&&ghost_2.y<=145&&ghost_2.y>=82?ghost_2.move("n",speed):ghost_2.x>=118&&ghost_2.x<=160&&ghost_2.y<=102&&ghost_2.y>=80?ghost_2.move("e",speed):ghost_2.x>=160&&ghost_2.x<=180&&ghost_2.y>=78&&ghost_2.y<=141?ghost_2.move("s",speed):ghost_2.x>=160&&ghost_2.x<=260&&ghost_2.y>=140&&ghost_2.y<=160?ghost_2.move("e",speed):ghost_2.x>=260&&ghost_2.x<=280&&ghost_2.y<=160&&ghost_2.y>=22?ghost_2.move("n",speed):ghost_2.x<=280&&ghost_2.x>=23&&ghost_2.y>=20&&ghost_2.y<=40?ghost_2.move("w",speed):ghost_2.x>=20&&ghost_2.x<=40&&ghost_2.y>=20&&ghost_2.y<=142&&ghost_2.move("s",speed)}),ghost_2.color("green");var myScore=new score;Crafty.sprite("images/sprites.png",{playerSprite:[0,0,20,20]});var player=Crafty.e("player, 2D, Canvas , Fourway, SpriteAnimation, playerSprite, Collision");player.reel("PlayerLeft",1e3,[[0,0,20,20],[20,0,20,20],[40,0,20,20]]),player.reel("PlayerRight",1e3,[[0,20,20,20],[20,20,20,20],[40,0,20,20]]),player.reel("PlayerUp",1e3,[[0,40,20,20],[20,40,20,20],[40,0,20,20]]),player.reel("PlayerDown",1e3,[[0,60,20,20],[20,60,20,20],[40,0,20,20]]),player.bind("NewDirection",function(a){a.x>0&&player.animate("PlayerRight"),a.x<0&&player.animate("PlayerLeft"),a.y>0&&player.animate("PlayerDown"),a.y<0&&player.animate("PlayerUp")}),Crafty.c("playr",{init:function(){this.requires("2D,Canvas,Collison,Color, Fourway").attr({x:0,y:0,w:0,h:0,lives:0,dotcount:0}).color("yellow")}}),player.attr({x:140,y:80,lives:2,dotcount:0,valid:0,dec:1}),player.fourway(2),Crafty.audio.play("start",1),player.bind("Moved",function(a){this.hit("wall")&&this.attr({x:a.x,y:a.y}),this.hit("ghost")&&this.lives>=0&&0==this.valid?(2==this.lives?(life0.destroy(),Crafty.audio.play("start")):1==this.lives&&life1.destroy(),this.lives||(Crafty.e("2D, DOM, Text,Color").attr({x:45,y:100}).text("GameOver!!").textColor("#FF0000").textFont({size:"30px",weight:"bold"}),ghost_1.color("black",0),ghost_2.color("black",0),player.destroy(),console.log("lost")),this.lives=this.lives-1,this.valid=1,player.dec=1,Crafty.e("Delay").delay(function(){player.dec>.1||(player.attr({x:140,y:80}),player.valid=0)},50,19)):this.hit("ghost")&&(player.attr({x:140,y:80}),player.valid=0,myScore.subLives(),myScore.updateLives()),this.hit("pacdot")&&0==pdot2.valid&&player._x<205&&player._x>195&&20==player._y?(pdot2.valid=1,pdot2.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()):this.hit("pacdot")&&0==pdot1.valid&&player._x>75&&player._x<85&&20==player._y?(pdot1.valid=1,pdot1.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()):this.hit("pacdot")&&0==pdot3.valid&&player._x>75&&player._x<85&&140==player._y?(pdot3.valid=1,pdot3.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()):this.hit("pacdot")&&0==pdot4.valid&&player._x>195&&player._x<205&&140==player._y?(pdot4.valid=1,pdot4.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()):this.hit("pacdot")&&0==pdot6.valid&&player._x>15&&player._x<25&&20==player._y&&(pdot6.valid=1,pdot6.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot7.valid&&player._x>255&&player._x<265&&20==player._y&&(pdot7.valid=1,pdot7.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot8.valid&&player._x>15&&player._x<25&&140==player._y&&(pdot8.valid=1,pdot8.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot9.valid&&player._x>255&&player._x<265&&140==player._y&&(pdot9.valid=1,pdot9.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot10.valid&&player._x>55&&player._x<65&&60==player._y&&(pdot10.valid=1,pdot10.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot11.valid&&player._x>215&&player._x<225&&60==player._y&&(pdot11.valid=1,pdot11.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot12.valid&&player._x>55&&player._x<65&&100==player._y&&(pdot12.valid=1,pdot12.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot13.valid&&player._x>215&&player._x<225&&100==player._y&&(pdot13.valid=1,pdot13.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot14.valid&&player._x>15&&player._x<25&&80==player._y&&(pdot14.valid=1,pdot14.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot15.valid&&player._x>255&&player._x<265&&80==player._y&&(pdot15.valid=1,pdot15.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot16.valid&&player._x>135&&player._x<155&&20==player._y&&(pdot16.valid=1,pdot16.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()),this.hit("pacdot")&&0==pdot17.valid&&player._x>135&&player._x<155&&140==player._y?(pdot17.valid=1,pdot17.color("black",0),player.dotcount=player.dotcount+1,scoreupdate()):this.hit("pacdot")&&1==pdot5.valid&&player._x>135&&player._x<155&&80==player._y&&(pdot1.valid=0,pdot1.color("white"),pdot2.valid=0,pdot2.color("white"),pdot3.valid=0,pdot3.color("white"),pdot4.valid=0,pdot4.color("white"),pdot6.valid=0,pdot6.color("white"),pdot7.valid=0,pdot7.color("white"),pdot8.valid=0,pdot8.color("white"),pdot9.valid=0,pdot9.color("white"),pdot10.valid=0,pdot10.color("white"),pdot11.valid=0,pdot11.color("white"),pdot12.valid=0,pdot12.color("white"),pdot13.valid=0,pdot13.color("white"),pdot14.valid=0,pdot14.color("white"),pdot15.valid=0,pdot15.color("white"),pdot16.valid=0,pdot16.color("white"),pdot17.valid=0,pdot17.color("white"),pdot5.valid=0,pdot5.color("black",0))}),player.bind("EnterFrame",function(){this._x>Crafty.viewport.width&&(this.x=0),this._x<0&&(this.x=Crafty.viewport.width),this._y>Crafty.viewport.height&&(this.y=0),this._y<0&&(this.y=Crafty.viewport.height)});