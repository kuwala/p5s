/*
  Sketch of the day 9/10/17
  @kuwala
  */

function setup() {
  cnvs = createCanvas(960, 960);
  cnvs.parent("p5canvas");
  grid = new Grid();
  frameRate(30);
  colorMode(HSB, 255);
  somethings2 = [];

  var count = 4;
  for (var i = 0; i < count; i++) {
    var thing = new Something({x:random(800),y:random(800)});
    somethings2.push(thing);
  }
  noStroke();
  frameRate(12);
}


function draw() {
  grid.draw();
  grid.mapMouseToMod();
  drawWalkers();
  // bouncyRect();

}

function drawWalkers() {
  for (var i = 0; i < somethings2.length; i++) {
    var randX = grid.cellSize * round(random(2) - 1);
    var randY = grid.cellSize * round(random(2) - 1);
    somethings2[i].move({x:randX, y:randY});
    // somethings2[i].move({x:random(255), y:random(255)});
    // somethings2[i].drawWithTrail();
    somethings2[i].drawSimple();
    // somethings2[i].draw();
  }
}
function mouseClicked() {
  var thing = new Something({x:mouseX,y:mouseY});
  somethings.push(thing);
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
