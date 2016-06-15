function LineCluster() {
  this.totalLines = 140;
  this.rows = 10;
  this.cols = this.totalLines / this.rows;
  this.lines = []

  for (var i = 0; i < this.cols; i++) {
    for (var j = 0; j < this.rows; j++) {
      var pos = {x:100+i*50, y:100 + j*30};
      console.log("Line num: " + (i * this.rows + j));
      console.log(pos.x);
      console.log(pos.y);
      this.lines[i * this.rows + j] = new MrLine(pos);
    }
  }

  this.pointAt = function (dir) {
    // update all point directions for all the lines
    for (var i = 0; i < this.lines.length; i++) {
      this.lines[i].pointAt(dir);
    }
  }
  this.draw = function () {
    this.pointAt({x:mouseX, y:mouseY});
    for (var i = 0; i < this.lines.length; i++) {
      this.lines[i].draw();
    }
  }

}
