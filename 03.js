var bubble = [];


var g = function( p ) {
    
    p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    
    for (var i = 0; i < 400; i++) {

  bubble[i] = {
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
  };


  p.draw = function() {
    
   p.background(0);
  
  for (var i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].display();
    
  if(bubble[i].x > windowWidth || bubble[i].x < 0 ){
    bubble[i].xspeed = bubble[i].xspeed * -1;
  }
    if(bubble[i].y > windowHeight || bubble[i].y < 0 ){
    bubble[i].yspeed = bubble[i].yspeed * -1;
  }
  };
 
   
   
  p.windowResized = function () {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
};

};




var myp5 = new p5(g, 'c3');










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