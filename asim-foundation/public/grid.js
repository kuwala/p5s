function Grid() {
  this.setCellColor = function(x, y, col) {
    this.cells[x][y].c = col;
  }
  this.setCell = function(x, y, type) {
    this.cells[x][y].t = type;
  }
  this.lookAtCell = function (x,y) {
    return this.cells[x][y];
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
    this.cells = new Array(this.cols)
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i] = new Array(this.rows)
      for (var j = 0; j < this.cells[i].length; j ++) {
        // cells 0 = empty, 1 = snake, 2 = food
        var col = color(0);
        this.cells[i][j] = {t:0,c:col};
      }
    }
    // cells 0 = empty, 1 = snake, 2 = food
    for (var i = 0; i < this.foodCount; i++) {
      this.moreRandFood();
    }
  }
  this.x = 0;
  this.y = 0;
  this.cellSize = 16;
  this.cols = 48;
  this.rows = 32;
  this.foodCount = 20;
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


  this.update = function () {
    // Some fancy pants indirection
    this.draw()
  }
  this.draw = function () {
    for(var i = 0; i < this.cells.length; i ++) {
      for (var j = 0; j < this.cells[i].length; j++) {
        // Get the color of the cell
        var cCell = this.cells[i][j];
        var col = this.cells[i][j].t;
        if (col===0) {
          fill(cCell.c);
          // fill(color(0));
          rect(this.cellSize * i, this.cellSize * j, this.cellSize, this.cellSize);
        } else if (col===1) {
          fill(color(255));
          // fill(cCel.c);
          rect(this.cellSize * i, this.cellSize * j, this.cellSize, this.cellSize);
        } else if (col===2) {
          fill(color(0));
          rect(this.cellSize * i, this.cellSize * j, this.cellSize, this.cellSize);
          fill(cCell.c);
          // ellipseMode(CORNER);
          var x = this.cellSize * i + this.cellSize / 3*1.5;
          var y = this.cellSize * j + this.cellSize / 3*1.5;
          var size = this.cellSize / 1.5;
          ellipse(x,y,size,size);
        }
        // strokeWeight(2);
        // stroke(color(20,20,20));
      }
    }

  }
}
