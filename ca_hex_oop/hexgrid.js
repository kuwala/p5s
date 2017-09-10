function HexGrid(x,y,cols,rows,cellSize) {
  this.x = x;
  this.y = y;
  this.rows = rows;
  this.cols = cols;
  this.cellSize = cellSize;
  this.grid = null;

  this.setGrid = function (grid) {
    this.grid = grid;

  }
  this.drawNewGird = function (grid) {
    this.setGrid(grid);
    this.drawHexagonGrid()
  }

  this.initGrid = function () {
    this.grid = new Array(this.cols);
    for (var i = 0; i < this.cols; i++) {
      var column = new Array(this.rows);
      for (var j = 0; j < this.rows; j++) {
        column[j] = 1; // asign cells as 1
      }
      this.grid[i] = column;
    }
    console.log("this grid");

    console.log(this.grid);
  }


  this.drawHexagonGrid = function () {
    // loop draw row
    for (var i = 0; i < this.rows; i++) {
      // if row is even set offset
      var xOffSet = 0; var yOffSet = 0;
      // yOffSet = this.cellSize * 0.25; // Temp solution
      if (i % 2 == 1) {
        // console.log("offsetting");
        // console.log("i"+ i);
        xOffSet = this.cellSize * 0.75;
      } else {
        xOffSet = 0;
        yOffSet = 0;
      }

      //draw number of hexagons equal to collums
      var cellX = this.x + xOffSet;
      var cellY = this.y + yOffSet;
      var c = color(200); // cell color
      for (var j = 0; j < this.cols; j++) {
        // color of cell is based on grid
        if (this.grid) {
            c = color(0,255,127);
          }
        }
        this.drawHexagon(cellX + j * this.cellSize*1.5 , cellY + i * this.cellSize * 0.5, this.cellSize, c, j );
      }
    }
    this.drawHexGrid2 = function () {
      //draw cells in horrizontal zigzag rows
      // 1  3  5
      //  2  4  6
      for (var j = 0; j < this.rows; j++) {
        var xOff = 0.75 * this.cellSize;
        var yOff = 0.50 * this.cellSize;
        var c = 0;

        if (j%2 == 1) {
          c = 200;
        } else {
          c = 160;
        }
        xOff = this.cellSize;
        yOff = this.cellSize;

        for (var i = 0; i < this.cols; i++) {
          //calculate offsets
          xOff = 0.75 * this.cellSize * i;
          if (i%2 == 1) {
            yOff = 0.50 * this.cellSize;
          } else {
            yOff = 0.0;
          }

          this.drawHexagon(this.x + xOff, this.y + yOff, this.cellSize, c, j)
        }
      }

    }

    this.drawHexagon = function (offX , offY , size , c ,num) { push();
      fill(c);
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
      fill(200);
      text(num,0,0)
      pop();
    }

}
