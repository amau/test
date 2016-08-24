window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var x = 100;
    var y = 100;
    var xspeed = 5;
    var yspeed = 5;


    setInterval(draw,10);

    // function to draw
    function draw () {

    	//clear the background each frame              		
    	context.clearRect(0,0,width,height);
        // Start the path for the circle
        context.beginPath();
        // Indicate what colour to fill the circle
        context.fillStyle = "#000ff";
        // describe the circle using the arc function
        context.arc(x, y, 20,0, Math.PI * 2, true);
        // Fill the shape
        context.fill();

        // if statements to detect the shapes proximity to the edge of the canvas
        to make object rebound with opposite change in x and y direction.
        if (x > width || x < 0) {
            xspeed = -xspeed;
        }
        if (y > height || y < 0) {
            yspeed = -yspeed;
        }

		// finally make the ball move by adding a variable "speed" to the x and y position
        x+=xspeed;
        y+=yspeed;
    }
}