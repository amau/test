var ball2 = {
  x:0,
  y:0,
  xspeed:4,
  yspeed:2,
}


var t = function( p ) {
    
    p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    
    p.strokeWeight(4);
  p.ellipse(ball2.x,ball2.y,25,25);
    
  if(ball2.x > p.width || ball2.x < 0 ){
    ball2.xspeed = ball2.xspeed * -1;
  }
    if(ball2.y > p.height || ball2.y < 0 ){
    ball2.yspeed = ball2.yspeed * -1;
  }

ball2.x = ball2.x+ball2.xspeed;
ball2.y = ball2.y+ball2.yspeed;
    
  };    
    p.windowResized = function () {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
};

};

var myp5 = new p5(t, 'c2');









/*
var t = function( p ) {

	var bubble = [];


	function setup() {
	p.createCanvas(p.windowWidth, p.windowHeight);

	for (var i = 0; i < 400; i++) {

  p.bubble[i] = {
    x: this.width/2,
    y: this.height/2,
    xspeed:2,
	yspeed:2,
    display: function() {
      stroke(255);
      noFill();
      ellipse(this.x, this.y, 24, 24);
    },
    move: function() {
      this.x = this.x + random(-10, 10);
      this.y = this.y + random(-10, 10);
    }
    

  }
}

  // println(bubble);
}

function draw() {
  p.background(0);
  for (var i = 0; i < bubble.length; i++) {
    p.bubble[i].move();
    p.bubble[i].display();
    
  if(p.bubble[i].x > p.windowWidth || p.bubble[i].x < 0 ){
    p.bubble[i].xspeed = p.bubble[i].xspeed * -1;
  }
    if(p.bubble[i].y > p.windowHeight || p.bubble[i].y < 0 ){
    p.bubble[i].yspeed = p.bubble[i].yspeed * -1;
  }
  }
}


  p.windowResized = function () {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
};


};


var myp5 = new p5(t, 'c2');
*/