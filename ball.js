window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
/*
    var width = canvas.width;
    var height = canvas.height;
*/
    var width = canvas.width;
    var height = canvas.height;
    var x = 100;
    var y = 100;
    var xspeed = 5;
    var yspeed = 5;


    setInterval(draw,10);



    function draw () {

        context.clearRect(0,0,width,height);
        context.beginPath();
        context.fillStyle = "#000ff";
        context.arc(x, y, 20,0, Math.PI * 2, true);
        context.fill();

        if (x > width || x < 0) {
            xspeed = -xspeed;
        }
        if (y > height || y < 0) {
            yspeed = -yspeed;
        }

        x+=xspeed;
        y+=yspeed;
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
