function Grid() {
  this.rows = 30;
  this.cols = 30;
  this.cellSize = 32;
  this.maxHeight = 1000;
  this.greenCol = color(0,200,60);
  this.blackCol = color(0,0,0);
  this.colorCounter = 0;
  this.colorChangeChance = 10;
  this.colorChangeRate = 0.4;
  this.colors = [];
  this.numColors = this.rows * this.cols;

  this.draw = function () {
    background(240);

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          // fill(j *5);
          var x1 = j * this.cellSize;
          var y1 = i * this.cellSize;
          if (this.colorCounter % 2) {
            fill(this.greenCol);
          } else { fill(this.blackCol); }


          var col = this.colors[this.colorCounter];
          fill(col);

          this.colorCounter++;

          rect(x1, y1, this.cellSize, this.cellSize);

        }
      } // end for loops
      this.colorCounter = 0;
  }
  this.fillColors = function () {
    var cellNum = 0;
    for (var i = 0; i < this.numColors; i++) {
        var col;
        if(random(10) > this.colorChangeChance) {
          this.colors.push(this.greenCol);
        } else {
          col = this.getCheckered(cellNum);
          this.colors.push(col);
        }
        if (cellNum % this.cols == 0) {
          // everytime we go down a row increase the chance the cells are green
          this.colorChangeChance -= this.colorChangeRate;
        }
        cellNum++;

    }
  }
  this.getCheckered = function (cell) {
    var color;
    var row = floor(cell / this.cols);
    var col = cell % this.cols;
    if (row % 2) {
      if (col % 2) {
        color = this.greenCol;
      } else {
        color = this.blackCol;
      }
    } else {
      if (col % 2) {
        color = this.blackCol;
      } else {
        color = this.greenCol;
      }
    }
    return color;
  }
  this.fillColors();
} // end class
