function setup() {
  createCanvas(600, 400);
  background(255, 255, 255);
  stroke(255, 255, 255);
}

var x = 300;
var y = 200;

function player() {
  rect(x, y, 75, 75);
}

frameRate(60);
