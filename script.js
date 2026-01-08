//Use the mouse to move the paddle from left to right. Keep the ball in the air. If it touches the ground, you lose.

/* VARIABLES */
let copper, ground;
let pixelBack;
let copperStag;
let platforms;
let lilypad, lilypad2, lilypad3, lilypad4, lilypad5;
let gravity = 0.5;
let hop = -10;
let score = 0
let screen = 0;
let finishPlatform;
let youWinButton;
var y = 20;
/* PRELOAD LOADS FILES */
function preload() {
 
}

/* SETUP RUNS ONCE */
function setup() {
  new Canvas(400,600);
  background('#64680d');
  textAlign(CENTER);

copper = new Sprite();
copper.img = "assets/copper.png";
copper.w = 400;
copper.h = 430;
copper.scale = 0.07;
copper.pos = {x:width/2, y: 590};
copper.rotationLock = true;

copperStag = new Sprite();
copperStag.img = "assets/copperStag.png";
copperStag.pos = {x: -2000, y: 2000};


pixelBack = new Sprite();
pixelBack.img = "assets/pixelBack.png";
pixelBack.w = 400;
pixelBack.h = 600;
pixelBack.scale = 0.5
pixelBack.pos = {x:-700, y: -700};
pixelBack.rotationLock = true;

textSprite = new Sprite();

textSprite.w = 120;
textSprite.h = 60;
textSprite.pos = {x:-2100, y:-2100};

lilypad = new Sprite(47,460);
lilypad.img = "assets/lilypad.webp";
lilypad.diameter = 100;
lilypad.scale = 0.2;
lilypad.rotationLock = true


lilypad2 = new Sprite(width/2,500);
lilypad2.img = "assets/lilypad.webp";
lilypad2.diameter = 100;
lilypad2.scale = 0.2;
lilypad2.rotationLock = true

//moving platform lily pad
lilypad3 = new Sprite(width/2-89,310);
lilypad3.img = "assets/lilypad.webp";
lilypad3.diameter = 100;
lilypad3.scale = 0.2;
lilypad3.rotationLock = true

lilypad4 = new Sprite(width/2+135,100);
lilypad4.img = "assets/lilypad.webp";
lilypad4.diameter = 100;
lilypad4.scale = 0.2;
lilypad4.rotationLock = true


lilypad5 = new Sprite(width/2+155,390);
lilypad5.img = "assets/lilypad.webp";
lilypad5.diameter = 100;
lilypad5.scale = 0.2;
lilypad5.rotationLock = true

platforms = new Group();
platforms.color = color ("#964B00");
platforms.collider = 's';
new platforms.Sprite(350,440,280,10);
new platforms.Sprite(50,500,100,10)

movingPlatform = new Sprite(110,350,60,10);
movingPlatform.color = color ("#964B00");
movingPlatform.roatationLock = true;
movingPlatform.friction = 10;
movingPlatform.collider = "k";

new platforms.Sprite(200,600,400,20);
new platforms.Sprite(350,250,70,10);
new platforms.Sprite(width/2-50,230,100,10);
new platforms.Sprite(width/2+150,145,100,10);
new platforms.Sprite(320,350,100,10);
finishPlatform = new Sprite(width/2-100,80,200,10);
finishPlatform.color = color ("#B5C1B2");
finishPlatform.roatationLock = true;
finishPlatform.friction = 10;
finishPlatform.collider = "k";

youWinButton = new Sprite(-600,-600,80,40);
youWinButton.collider = "k";
youWinButton.color = "#B5C1B2";
youWinButton.stroke = 3;
youWinButton.textSize = 15;
youWinButton.text = "You Win!"

  

walls = new Group();
	walls.w = 10;
	walls.h = 600;
  walls.collider = "static";
  walls.visible = false;

//left and right wall
new walls.Sprite(0, height / 2);
new walls.Sprite(width, height / 2);

}

/* DRAW LOOP REPEATS */
function draw() {
background('#64680d');

copper.velocity.y += gravity;

copper.debug = mouse.pressing();

lilypad.debug = mouse.pressing();

//copper movement
if (kb.pressing("right")){
    copper.vel.x = 3;
  } else if (kb.pressing("left")){
    copper.vel.x = -3; 
  } else {
    copper.vel.x = 0;
  }

if (copper.collides(platforms)){
  if (keyCode === 38) { //spacebar jump
   move(copper, 2, 270);
  } else if (keyCode == 32) {
    jump(copper);
  } else copper.vel.y = 0;
}

if (copper.collides(movingPlatform)){
  if (keyCode === 38) { //spacebar jump
    move(copper, 2, 270);
  } else if (keyCode == 32) {
    jump(copper);
  } else copper.vel.y = 0;
}




//bobbing lilypads
lilypad.vel.y = cos(frameCount * 6) * 0.5;
lilypad2.vel.y = cos(frameCount * 6) * 0.5;
lilypad3.vel.y = cos(frameCount * 6) * 0.5;
lilypad4.vel.y = cos(frameCount * 6) * 0.5;
lilypad5.vel.y = cos(frameCount * 6) * 0.5;

// moving platform
movingPlatform.vel.x = cos(frameCount * 3) * 1.9;
  
//if copper collects lilypad
if (copper.collides(lilypad)){
  lilypad.x = -50;
  lilypad.y = -50;
  score = score + 1;
}

if (copper.collides(lilypad2)){
  lilypad2.x = -100;
  lilypad2.y = -100;
  score = score + 1;
}

if (copper.collides(lilypad3)){
  lilypad3.x = -250;
  lilypad3.y = -250;
  score = score + 1;
}

if (copper.collides(lilypad4)){
  lilypad4.x = -150;
  lilypad4.y = -150;
  score = score + 1;
}

if (copper.collides(lilypad5)){
  lilypad5.x = -200;
  lilypad5.y = -200;
  score = score + 1;
}

if (copper.collides(finishPlatform)){
  
}

// You Win!

if (screen == 0){
  if(copper.collides(finishPlatform)){
    youWinButton.pos = {x: width/2, y:height/2};
  }
}

if (screen == 0){
  if (youWinButton.mouse.presses()){
    showScreen1();
    screen = 1;
  }
}
  
//Draw the score to screen
fill("#090d09");
textSize(20);
text("Score = " + score, 60, 30); 

print(screen);
}	



function keyPressed() {

}
function move(copper, speed, dir) {
  copper.setSpeed(speed, dir);
}

function jump(copper){
  copper.velocity.y = hop;
}

function showScreen1(){
gravity = 5;

score.visible = false;

lilypad.visible = false;
lilypad2.visible = false;
lilypad3.visible = false;
lilypad4.visible = false;
lilypad5.visible = false;

platforms.visible = false;
movingPlatform.visible = false;
copper.visible = false;
finishPlatform.visible = false;
youWinButton.pos = {x:-750,y:-750};


pixelBack.layer = 2;
pixelBack.collider = "s";
pixelBack.pos = {x:width/2,y:height/2};

textSprite.layer = 3;
textSprite.collider = "s";
textSprite.pos = {x:width/2+40, y:height/2-200};
textSprite.textSize = 15;

textSprite.text = "Thank you for\n bringing me home <3";

copperStag.layer = 3;
copperStag.w = 405;
copperStag.h = 330;
copperStag.stroke = 2;
copperStag.scale = 0.5;
copperStag.pos = {x: width/2, y: height/2};
copperStag.rotationLock = true;
copperStag.collider = "none"



}
