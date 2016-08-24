var baal2 = {
  x:0,
  y:0,
  xspeed:4,
  yspeed:2,
}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('bouncingsection');
}

function draw() {
  strokeWeight(4);
  ellipse(baal2.x,baal2.y,25,25);
    
  if(baal2.x > width || baal2.x < 0 ){
    baal2.xspeed = baal2.xspeed * -1;
  }
    if(baal2.y > height || baal2.y < 0 ){
    baal2.yspeed = baal2.yspeed * -1;
  }

baal2.x = baal2.x+baal2.xspeed;
baal2.y = baal2.y+baal2.yspeed;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}