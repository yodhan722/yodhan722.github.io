// Minimal p5.js demo showing mouse coordinates near the cursor
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(14);
  Stroke(1);
}

function draw() {
  background(255);
  fill(0, 0, 0);
  text(`${mouseX},${mouseY}`, mouseX - 20, mouseY - 20);
}
