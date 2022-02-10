var pumpkin;
var pumpkinx = 40;
var pumpkiny = 10;
let timer = 60;


function setup() {
createCanvas(bg.width, bg.height);
}

function draw() {
  image(bg,0,0);
  image(pumpkin, pumpkinx, pumpkiny, 70, 50);
  textAlign(CENTER);
  fill('white');
  textSize(50);
  text(timer, 700, 50);
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*.6);
    image(red,0 ,0)
  }
   if (pumpkinx > 0) { 
   }
  if (pumpkinx >= 610 && pumpkiny >= 410) {
    text("WIN", width/2, height*.6);
     image(green,0,0)
  }
}

function preload() {
  pumpkin=loadImage('pumpkin.png');
  bg = loadImage('maze.png');
  green = loadImage('green.jpg')
  red = loadImage('red.png')
}

function keyPressed() {
  if (keyCode== UP_ARROW) {
    pumpkiny = pumpkiny-10
    redraw()
  }
  
  if (keyCode== DOWN_ARROW) {
    pumpkiny = pumpkiny+10
    redraw()
  }
  
  if (keyCode== LEFT_ARROW) {
    pumpkinx = pumpkinx-10
    redraw()
  }
  
  if (keyCode== RIGHT_ARROW) {
    pumpkinx = pumpkinx+10
    redraw()
  }
}
