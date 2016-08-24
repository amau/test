var myCanvas = createCanvas(winWidth, winHeight);
    myCanvas.parent("section2");

var x=0;
var speed=3;


var bubble = {
  x: 300,
  y: 200,
  display1: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  },
  move: function() {
    this.x = this.x + random(-20, 20);
    this.y = this.y + random(-20, 20);
  }
}

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  bubble.move();
  bubble.display1();
}

if (x>width || y>height ){
  speed = -3;
}
x = x+speed;
y = y+speed;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
