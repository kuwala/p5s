function setup() {
  cnvs = createCanvas(1000, 250);
  cnvs.parent("p5canvas");


  somethings = [];
  var rows = 2;
  var cols = 4;
  var rowSize = 250 / rows;
  var colSize = 1000 / cols;

  // something = new Something({x:60, y:90});
  // something2 = new Something({x:, y:90});
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var xx = j * colSize + colSize / 2 ;
      var yy = i * rowSize + rowSize / 2 ;
      var thing = new Something({x: xx, y: yy});
      somethings.push(thing);
    }

  }
  //noStroke();
  frameRate(30);
}
function drawBG() {

  var rows = 2;
  var cols = 4;
  var rowSize = 250 / rows;
  var colSize = 1000 / cols;

  var cellCount = 0;

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var xx = j * colSize + colSize / 2 ;
      var yy = i * rowSize + rowSize / 2 ;
      cellCount ++;
      if (cellCount % 2) {
        fill(200);
      } else { fill(160); }
      push();
      translate(j*colSize, i*rowSize);
      rect(0, 0, colSize, rowSize);
      pop();

    }
  }
}

function draw() {
  background(240);
  drawBG();
  // something.move({x:randX, y:randY});
  // something.rot(angle);
  // something.draw();

  for (var i = 0; i < somethings.length; i++) {
  var randX = random(4) - 2;
  var randY = random(4) - 2;
  var angle = (random(628) - 314) / 1000;
    somethings[i].rot(angle);
    somethings[i].move({x:randX, y:randY});
    somethings[i].draw();
  }
}
