function setup() {
  cnvs = createCanvas(1000, 1000);
  cnvs.parent("p5canvas");
  ca = new CA_Life();
  frameRate(10);
}

function draw() {
  ca.update();
  // ca.randomizeRules();
  ca.drawMouse(mouseX, mouseY);
  if (mouseIsPressed) {
    ca.addCellAt(mouseX,mouseY);
  }

}

function mousePressed() {
  // ca.randomizeRules();
  // get x y for new cells
  // draw new cell
  // ca.addCellAt(mouseX,mouseY);
}
function keyPressed() {
  if (keyCode == ENTER) {
    // space is pressed toogle generation on.
    ca.togglePause();
  }

}
