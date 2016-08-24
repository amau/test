var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
    p.windowResized = function () {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
};

};
var myp5 = new p5(s, 'c1');