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
  this.gridMod = 2;
  this.numColors = this.rows * this.cols;
  this.hue = 0;
  this.brightness = 255;
  this.saturation = 255;
  this.saturationRate = 3;
  this.hueRate = 1;
  this.brightnessRate = 2;
  this.modRatio = 0;

  this.mapMouseToMod = function () {
    var ratio = mouseX / 1000;
    var maxMod = 32;
    this.gridMod = round(maxMod * ratio);
    this.modRatio = ratio;
  }
  this.updateHSV = function () {
    this.hue = round(this.hue + this.hueRate) % 255;
    this.saturation = round(this.saturation + this.saturationRate) % 255;
    // this.brightness = round(this.brightness + this.brightnessRate ) % 255;
  }
  this.draw = function () {
    background(240);
    this.updateHSV();

      for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
          // fill(j *5);
          var x1 = j * this.cellSize;
          var y1 = i * this.cellSize;
          if (this.colorCounter % this.gridMod) {
            fill(color(this.hue,this.saturation,this.brightness));
          } else if (0 == (this.colorCounter % (this.gridMod / 2))) {
            fill(random(255));
            // fill(this.blackCol);

          } else { fill(this.blackCol); }


          // var col = this.colors[this.colorCounter];
          // fill(col);

          this.colorCounter++;

          rect(x1, y1, this.cellSize, this.cellSize);

        }
          this.colorCounter++;
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
