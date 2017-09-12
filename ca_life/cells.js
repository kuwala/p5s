function CAE() {
  this.cellSize = 6;
  this.cols = Math.floor(width / this.cellSize);
  this.newCells = new Array(this.cols);
  this.cells = new Array(this.cols);
  this.generation = 0;
  // this.ruleset = [0,1,1,1,1,0,0,0];
  // this.ruleset = [1,0,0,1,0,1,1,0];
  // cool rules: 150, 90, 165, 133, 110

  // Keep a history of active rows
  this.rows = Math.floor(height / this.cellSize);
  this.generationsRows = new Array(this.rows);
  this.activeGenerationIndex = 0; // ?

  this.initCells = function () {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i]= 0;
      // this.cells[i]= Math.floor(random(2));
    }
    this.cells[Math.floor(this.cells.length / 2)] = 1;
    this.generationsRows[this.generationsRows.length-1] = this.cells;
  }
  this.initRandCells = function () {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i] = Math.floor(random(2));
    }
    this.generationsRows[this.generationsRows.length-1] = this.cells;
  }
  this.drawGenerations = function () {
    // draw each of the rowsn
    for (var i = 0; i < this.generationsRows.length; i++) {
      var row = this.generationsRows[i];
      this.drawRow(row, i);
    }
  }
  this.generate2 = function () {
    // shift old row from the front of the array
    this.generationsRows.shift();
    var newRow = this.generateRow(this.generationsRows[this.generationsRows.length-1]);
    //push new one
    this.generationsRows.push(newRow);
  }

  this.drawRow = function (row, yLocation) {
    if (row) {
      for (var i = 0; i < row.length; i++) {
        if (row[i] === 0) {
          fill(27,127,200);
        } else {
          fill(255);
        }
        // stroke(0);
        noStroke();
        var y = yLocation * this.cellSize;
        rect(i*this.cellSize,y,this.cellSize,this.cellSize);
      }
    } // end if
  }
  this.draw = function () {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i]
      if (this.cells[i] === 0) {
        fill(27,127,200);
      } else {
        fill(255);
      }
      // stroke(0);
      noStroke();
      var y = this.generation * this.cellSize;
      rect(i*this.cellSize,y,this.cellSize,this.cellSize);
    }
  }

  this.rulesSimple = function (a, b, c) {
    // rule 178
    //this.ruleset = [0, 0, 0, 0, 1, 1, 1, 0];
    if (a == 1 && b == 1 && c == 1) { return this.ruleset[0]; }
    if (a == 1 && b == 1 && c == 0) { return this.ruleset[1]; }
    if (a == 1 && b == 0 && c == 1) { return this.ruleset[2]; }
    if (a == 1 && b == 0 && c == 0) { return this.ruleset[3]; }
    if (a == 0 && b == 1 && c == 1) { return this.ruleset[4]; }
    if (a == 0 && b == 1 && c == 0) { return this.ruleset[5]; }
    if (a == 0 && b == 0 && c == 1) { return this.ruleset[6]; }
    if (a == 0 && b == 0 && c == 0) { return this.ruleset[7]; }
    return 0;
  }
  this.rules = function (a, b, c) {
    // ruleset needs to be written in reverse order
    // this.ruleset = [0,1,1,1,1,0,0,0];
    var s = "" + a + b + c;
    var index = parseInt(s,2);
    return this.ruleset[index];
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
  this.update2 = function () {
    // generate new row
    // add to generationRows
    this.generate2();
    // display generationRows
    this.drawGenerations();
  }
  this.update = function () {
    // if sketch has not reached the bottom of the screen
    this.checkBottom();
    // keep generating
    this.generate();
    // Draw row one lower thne last
    this.draw();

  }

  this.generateRow = function (oldRow) {
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
        var newState = this.rules(left,middle,right)
        // set the cell's state to that new value
        newCells[i] = newState;
      }
      // this.cells = newCells;
      this.generation += 1;
      return newCells;
    } // end if

  }

  this.generate = function () {
    // create a cells array buffer for storing
    // new cells into
    var newCells = [];
    // we be skipping the 0 and last cell for simplicity
    newCells[0] = this.cells[0];
    newCells[this.cells.length-1] = this.cells[this.cells.length-1];

    for (var i = 1; i < this.cells.length - 1; i++) {
      this.cells[i]
      // look at the neighborhood states: // left, middle, right
      var left = this.cells[i-1];
      // middle
      var middle = this.cells[i];
      // right
      var right = this.cells[i+1];
      // look up the new value for the cell state according to some ruleset
      var newState = this.rules(left,middle,right)
      // set the cell's state to that new value
      newCells[i] = newState;
    }
    // asign the new generation of cells as the current row of cells
    this.cells = newCells;
    this.generation += 1;
  }
}
