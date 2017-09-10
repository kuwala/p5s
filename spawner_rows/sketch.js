function setup() {
  var height = 840;
  var width = 1366;
  cnvs = createCanvas(width,height);
  cnvs.parent("p5canvas");
  // SpawnerRow(x,y,w,h,numRects, speed, dir);
  // row = new SpawnerRow(0,0, 800, 200, 8, 1, 1);
  rows = [];
  var numRows = 16;
  var rowsHeight = height;
  var rowH = rowsHeight / numRows;
  for (var i = 0; i < numRows; i++) {
    rows[i] = new SpawnerRow(0,rowH * i, width, rowH, 2+ 4*i, 1, 1+ ((i%2)*-2));
  }
}

function draw() {
  // row.draw();
  // row.update();
  // row.changeSpeedScale(map(mouseX,0,800,-4,4));
  // row2.draw();
  // row2.update();
  // row2.changeSpeedScale(map(mouseX,0,800,-4,4));

  for (var i = 0; i < rows.length; i++) {
    rows[i].draw();
    rows[i].update();
    rows[i].changeSpeedScale(map(mouseX, 0, windowWidth, -1, 1));
  }


}
function mousePressed() {
  var fs = fullscreen();
  fullscreen(!fs);
}
