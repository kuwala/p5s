function CA() {
  // cool rules: 150, 90, 165, 133, 110
  this.drawRow = function (cells, x, y, row, cellSize) {
    if (cells) {
      for (var i = 0; i < cells.length; i++) {
        if (cells[i] === 0) {
          fill(27,127,200);
        } else {
          fill(255);
        }
        // stroke(0);
        noStroke();
        var rowY = row * cellSize;
        rect(x + i*cellSize,y + rowY,cellSize,cellSize);
      }
    } // end if
  }

  this.grid256 = function () {
    // calculate each grid square
    var rows = 16;
    var cols = 16;
    // processing sketch width
    var gridSize = Math.floor(width / rows);
    var gridNum = 0;
    var w = gridSize;
    var h = gridSize;
    // enumerate rulesets 0 - 255;
    // calculate grid x,y,w,h;
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        gridNum = row * 16 + col;
        var x = col * gridSize;
        var y = row * gridSize;
        var ruleset = this.intToRuleset(gridNum);
        // Draw Grid
        this.drawCASquare(x,y,w,h,ruleset);
      }
    }
  }
  this.intToRuleset = function (gridNum) {
    // convert to binary for values 255 - 0
    var num = gridNum % 256;

    // 128 Bit
    if (num / 128 >= 1 ) {
      var a = 1;
    } else {
      var a = 0;
    }
    num = num % 128;
    // 64 Bit
    if (num / 64 >= 1 ) {
      var b = 1;
    } else {
      var b = 0;
    }
    num = num % 64;
    // 32 Bit
    if (num / 32 >= 1 ) {
      var c = 1;
    } else {
      var c = 0;
    }
    num = num % 32;
    // 16 Bit
    if (num / 16 >= 1 ) {
      var d = 1;
    } else {
      var d = 0;
    }
    num = num % 16;
    // 8 Bit
    if (num / 8 >= 1 ) {
      var e = 1;
    } else {
      var e = 0;
    }
    num = num % 8;
    // 4 Bit
    if (num / 4 >= 1 ) {
      var f = 1;
    } else {
      var f = 0;
    }
    num = num % 4;
    // 2 Bit
    if (num / 2 >= 1 ) {
      var g = 1;
    } else {
      var g = 0;
    }
    num = num % 2;
    // 1 Bit
    if (num > 0) {
      var h = 1;
    } else {
      var h = 0;
    }

    // Add all the bits together
    var str = "" + a + b + c + d + e + f + g + h;
    // var ruleset[a,b,c,d,e,f,g,h]; // slightly wrong
    // store rules in reverse order because highest bit
    // needs to start at highest index value
    var ruleset = [h, g, f, e, d, c, b, a];
    // console.log(gridNum);
    // console.log(str);
    return ruleset;
  }
  this.drawCASquare = function (x,y,w,h,ruleset) {
    // for drawing all the 256 CA
    var cellSize = 1; // cells are square
    var gen = 0; // generations // same as row
    var cols = Math.floor(w / cellSize);
    var rows = Math.floor(h / cellSize);
    var cells = new Array(cols);
    // initilize the array of cells
    // with all 0's and a 1 in the middle
    for (var i = 0; i < cells.length; i++) {
      cells[i] = 0;
    }
    var middle = Math.floor(cells.length / 2);
    cells[middle] = 1;

    for (var i = 0; i < rows; i++) {
      // draw collums
      var row = i;
      this.drawRow(cells, x, y, row, cellSize);
      // generate new row
      cells = this.generateRow(cells, ruleset);
    }

  }

  this.evaluateRules = function (a, b, c, ruleset) {
    // convert components 0/1's into 0-7 index
    // to look up the rules result
    var s = "" + a + b + c;
    var index = parseInt(s,2);
    return ruleset[index];
  }
  this.randomizeRules = function () {
    var s = "";
    for (var i = 0; i < this.ruleset.length; i++) {
      this.ruleset[i] = Math.floor(random(2));
      s = s + this.ruleset[i];
    }
    console.log(this.ruleset);
    console.log("rule: " + parseInt(s,2));
  }
  this.checkBottom = function () {
    if (this.generation * this.cellSize > height) {
      this.generation = 0;
      this.randomizeRules();
      // this.initCells();
      this.initRandCells();
      background(255);
    }
  }
  this.update = function () {

  }

  this.generateRow = function (oldRow, ruleset) {
    if (oldRow) {
      // create a cells array buffer for storing
      // new cells into
      var newCells = [];
      // we be skipping the 0 and last cell for simplicity
      newCells[0] = oldRow[0];
      newCells[oldRow.length-1] = oldRow[oldRow.length-1];

      for (var i = 1; i < oldRow.length - 1; i++) {
        // look at the neighborhood states: // left, middle, right
        var left = oldRow[i-1];
        // middle
        var middle = oldRow[i];
        // right
        var right = oldRow[i+1];
        // look up the new value for the cell state according to some ruleset
        var newState = this.evaluateRules(left, middle, right, ruleset)
        // set the cell's state to that new value
        newCells[i] = newState;
      }
      // this.cells = newCells;
      // this.generation += 1;
      return newCells;
    } // end if

  }

}
