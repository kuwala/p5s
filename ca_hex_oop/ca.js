function CA_Life() {
  this.cols = 96;
  this.rows = 64;
  this.cellW = 10;
  this.cellH = 10;
  this.gen = 0; // Generations
  this.pause = 0; // pause update if = 1;

  this.cells = new Array(this.cols); // x

  this.activeCells = this.cells;
  for (var i = 0; i < this.cells.length; i++) {
    var column = new Array(this.rows); // y
    // init cells as random dots
    for (var j = 0; j < column.length; j++) {
      var state = Math.floor(random(2));

      var x = i * this.cellW;
      var y = j * this.cellH;
      column[j] = new Cell(x, y, this.cellW, state);
    }
    // Assing the columns to the cells
    this.cells[i] = column;
  }


  this.togglePause  = function () {
    if (this.pause) {
      this.pause = 0;
    } else {
      this.pause = 1;
    }
  }
  this.drawMouse = function (x, y) {
    var cellX = Math.floor(x / this.cellW) % this.cols;
    var cellY = Math.floor(y / this.cellH) % this.rows;
    fill(200,49,49);
    rect(cellX * this.cellW, cellY * this.cellH, this.cellW, this.cellH)
  }
  this.addCellAt = function (pixelX, pixelY) {
    // Modulo the result just incase mouseX/Y is out of the grid
    var cellX = Math.floor(pixelX / this.cellW) % this.cols;
    var cellY = Math.floor(pixelY / this.cellH) % this.rows;
    this.activeCells[cellX][cellY].setState(1);
  }
  this.update = function () {
    // Generate new Cells
    if (this.pause == 0) {
      this.generate();
    }
    this.drawCells();

  }
  this.generate = function () {
    // for each cell check the rules
    for (var i = 0; i < this.cells.length; i++) {
      // for each [i] column
      for (var j = 0; j < this.cells[i].length; j++) {
        // check randomizeRules
        // this.bufferCells[i][j]. = this.rules(i,j);
        this.cells[i][j].futureState( this.rules(i,j) );
        //this.bufferCells[i][j] = 1;
        // this.cells[i][j] = this.rules(i,j);


      }
    }
     // Swap active cells with buffer cells;
     for (var i = 0; i < this.cells.length; i++) {
       for (var j = 0; j < this.cells[i].length; j++) {
         this.cells[i][j].progressState();
       }
     }
  }
  this.setCells = function (destCells, targetCells) {
    // used to reassing newCells to cells
    for (var i = 0; i < destCells.length; i++) {
      for (var j = 0; j < destCells[i].length; j++) {
        destCells[i][j] = targetCells[i][j];
      }
    }

  }
  this.countNeighbors = function (x,y) {
    var neighbors = 0;

    // Calc Positions with wraparound
    var left;
    if (x==0) { left = this.cols - 1; } else { left = x - 1;}
    var right;
    if (x==this.cols-1) { right = 0; } else { right = x + 1;}

    var top;
    if (y==0) { top = this.rows - 1; } else { top = y - 1;}
    var bot;
    if (y==this.rows-1) { bot = 0; } else { bot = y + 1;}

    // Top
    if(this.activeCells[left][top].state == 1) { neighbors += 1}
    if(this.activeCells[x][top].state == 1) { neighbors += 1}
    if(this.activeCells[right][top].state == 1) { neighbors += 1}

    // Sides
    if(this.activeCells[left][y].state == 1) { neighbors += 1}
    if(this.activeCells[right][y].state == 1) { neighbors += 1}

    // Bottom
    if(this.activeCells[left][bot].state == 1) { neighbors += 1}
    if(this.activeCells[x][bot].state == 1) { neighbors += 1}
    if(this.activeCells[right][bot].state == 1) { neighbors += 1}

    return neighbors;
  }
  this.rules = function (x,y) {
    // check the neighborhood of 9 cells around x,y
    var neighbors = this.countNeighbors(x,y);
    var cellState = this.activeCells[x][y].state; // 0 dead, 1 alive

    if (neighbors > 3 || neighbors < 2) {
      //Death overpopulation
      //Death Loneliness
      cellState = 0;
    } else if (neighbors == 3) {
      // Birth
      cellState = 1;
    } else {
      //Statis Alive (if 2 or 3 neighbors)
      //Statis Dead (stays dead if other 3 neighbors)
    }
    // console.log(cellStatus);
    return cellState;
  }
  this.drawCells = function () {
    // erease background
    background(220);
    // Draw cells on column at a time
    noStroke();
    for (var i = 0; i < this.activeCells.length; i++) {
      var column = this.activeCells[i];
      for (var j = 0; j < column.length; j++) {
        // if (column[j].previousState == 1) {
        //   fill(255);
        // } else {
        //   fill(0);
        // }
        // var x = i * this.cellW;
        // var y = j * this.cellH;
        // rect(x,y,this.cellW,this.cellH);
        column[j].display();
      }
    }
  }
}
