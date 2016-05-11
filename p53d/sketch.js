function setup() {
  createCanvas(400, 600, WEBGL);
}

var angle = 0;
function draw() {
  background(50);

  beginShape();
  vertex(100,23,-100);
  vertex(200,23,-50);
  vertex(150, 45,-100);
  endShape();

  // Center Follows Mouse
  // translate(-width/2,-height/2,0);
  // translate(mouseX,mouseY,0);

  // rotateY(angle);
  // angle += 0.01;
  // drawBoxes(3);
}

function drawBoxes (num) {
  var size = 40;
  var padding = 40;
  for(var i = 0; i < num; i++) {
    // draw box
    box(size);
    // translate displace
    translate(num*padding, 0, 0);

  }
}
