var programCode = function(processingInstance) {
    with (processingInstance) {
        size(600, 400); 
        frameRate(30);
        
        // the health for the player
        var health = 20;
    
        // the x and y pos for the player
        var x = 300;
        var y = 200;

        background(56, 225, 89);
        stroke(1);
        textSize(20);

        draw = function() {
            background(56, 225, 89);
    
        // the text for heath for the player
        fill(0, 0, 0);
        text("health: " + health, 0, 25);
    
        // The player ball
        fill(64, 138, 235);
        ellipse(x, y, 50, 50);
    
        // the player movement up, down, left, and right
        if(keyIsPressed) {
            if(keyCode === UP) {
                y -= 1;
            }
            if(keyCode === DOWN) {
                y += 1;
            }
            if(keyCode === LEFT) {
                x -= 1;
            }
            if(keyCode === RIGHT) {
                x += 1;
            }
        }
    };
}};

var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, programCode); 