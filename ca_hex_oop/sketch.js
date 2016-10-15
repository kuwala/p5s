function setup() {
  cnvs = createCanvas(1000, 1000);
  cnvs.parent("p5canvas");
  ca = new CA_Life();
  frameRate(10);
}

function draw() {
  /*
  ca.update();
  // ca.randomizeRules();
  ca.drawMouse(mouseX, mouseY);
  if (mouseIsPressed) {
    ca.addCellAt(mouseX,mouseY);
  }
  */
  background(127);
  // var size = 60;
  // var x = 100;
  // var y = 100;
  // for (var i = 0; i < 10; i++) {
  //   drawHexagon(x + i*size*1.5, y, size);
  // }
  // var x = 100 + size * 0.75;
  // var y = 100 + size * 0.5;
  // for (var i = 0; i < 10; i++) {
  //   fill(255,0,0);
  //   drawHexagon(x + i*size*1.5, y, size);
  // }
  drawHexagonGrid(100,100,8,10,60);
}
function drawHexagonGrid(startX, startY, cols, rows, cellSize) {
  // loop draw row
  for (var i = 0; i < rows; i++) {
    fill(255);
    // if row is even set offset
    var xOffSet = 0; var yOffSet = 0;
    if (i % 2 == 1) {
      console.log("offsetting");
      console.log("i"+ i);
      xOffSet = cellSize * 0.75;
      fill(255,0,0);
    } else {
      xOffSet = 0;
      yOffSet = 0;
    }

    //draw number of hexagons equal to collums
    var x = startX + xOffSet;
    var y = startY + yOffSet;
    for (var j = 0; j < cols; j++) {
      drawHexagon(x + j * cellSize*1.5 , y + i * cellSize * 0.5, cellSize);
    }
  }
}
function drawHexagon(offX = 0, offY = 0, size = 20) {
  push();
  fill(random(255));
  translate(offX,offY)
  stroke(2);
  beginShape();
  vertex(size * 0.25,0);
  vertex(size * 0.75,0);
  vertex(size, size * 0.5);
  vertex(size * 0.75, size);
  vertex(size * 0.25, size);
  vertex(0, size * 0.5);
  vertex(size * 0.25, 0);
  endShape();
  pop();
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
