/*
  Sketch of the day 9/10/17
  @kuwala
  */

function setup() {
  cnvs = createCanvas(1000, 1000);
  cnvs.parent("p5canvas");
  grid = new Grid();
  frameRate(30);
  noStroke();
}
function bouncyRect() {
  var cellSize = 32;
  var maxHeight = 250;
  var spaceRatio = mouseY / maxHeight;

  fill(0,255,0);
  // fill(0,0,0);
  rect(10, 10, 20, 20);
  for (var i = 0; i < 10; i++) {
      // rect(x,y,width,height);
      rect(0,  i* cellSize *  spaceRatio, 32,32);
  }

}


function draw() {
  grid.draw();

  // bouncyRect();

}
