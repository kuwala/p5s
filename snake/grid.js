function Grid() {
  this.setCellColor = function(j, i, col) {
    this.cells[j + i * this.cols].c = col;
  }
  this.setCell = function(j, i, type) {
    this.cells[j + i * this.cols].t = type;
  }
  this.lookAtCell = function (x,y) {
    return this.cells[x + y*this.rows];
  }
  this.moreRandFood = function () {
    // create a food cell at random spot
    // this.cells[x + y*this.rows] = 2;
    var x, y, thing;
    var done = false;

    // find an empty spot to place food
    while (!done) {
      x = floor(random(this.cols));
      y = floor(random(this.rows));
      thing = this.lookAtCell(x,y).t;
      if (thing === 0) {
        done = true;
      }
    }
    // empty spot found place food
    this.setCell(x,y,2);
    var j = 70;
    var col = color(random(j * 3),random(j * 3),random(j * 3));
    this.setCellColor(x,y,col);
  }
  this.reset = function () {
    this.cells = [];
    // cells 0 = empty, 1 = snake, 2 = food
    for(var i = 0; i < this.rows; i ++) {
      for (var j = 0; j < this.cols; j++) {
        // this.cells[j + i * this.cols] = color(0,0,0);
        // this.cells[j + i * this.cols] = color(random(j * 3),random(j * 3),random(j * 3));
        // var col = color(random(j * 3),random(j * 3),random(j * 3));
        var col = color(0);
        this.cells[j + i * this.cols] = {t:0,c:col};
      }
    }
    for (var i = 0; i < this.foodCount; i++) {
      this.moreRandFood();
    }
  }
  this.x = 0;
  this.y = 0;
  this.cellSize = 16;
  this.cols = 32;
  this.rows = 32;
  this.foodCount = 4;
  // cells 0 = empty, 1 = snake, 2 = food
  this.reset();

  this.checkEdges = function (cell) {
    // check cell being outside of bounds
    // and modifiy cell to fit within
    if (cell.y > grid.rows - 1) {
      cell.y = 0;
    } else if (cell.y < 0) {
      cell.y = grid.rows - 1;
    }
    if (cell.x > grid.cols - 1) {
      cell.x = 0;
    } else if (cell.x < 0) {
      cell.x = grid.cols - 1;
    }
  }


  this.draw = function () {
    for(var i = 0; i < this.rows; i ++) {
      for (var j = 0; j < this.cols; j++) {
        // Get the color of the cell
        var cCell = this.cells[j+i*this.cols];
        var col = this.cells[j+i*this.cols].t;
        if (col===0) {
          fill(cCell.c);
          // fill(color(0));
          rect(this.cellSize * j, this.cellSize * i, this.cellSize, this.cellSize);
        } else if (col===1) {
          fill(color(255));
          // fill(cCel.c);
          rect(this.cellSize * j, this.cellSize * i, this.cellSize, this.cellSize);
        } else if (col===2) {
          fill(color(0));
          rect(this.cellSize * j, this.cellSize * i, this.cellSize, this.cellSize);
          fill(cCell.c);
          // ellipseMode(CORNER);
          var x = this.cellSize * j + this.cellSize / 3*1.5;
          var y = this.cellSize * i + this.cellSize / 3*1.5;
          var size = this.cellSize / 1.5;
          ellipse(x,y,size,size);
        }
        // strokeWeight(2);
        // stroke(color(20,20,20));
      }
    }

  }
}
