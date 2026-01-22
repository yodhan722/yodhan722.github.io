var programCode = function(processingInstance) {
with (processingInstance) {
    size(600, 400); 
    frameRate(30);
        
    function drawPlayer() {
        var x = 300;
        var y = 200;

        rect(x, y, 70, 70);
    }
}};

var canvas = document.getElementById("rogueliteCanvas"); 
var processingInstance = new Processing(canvas, programCode)