function SpawnerRow(x, y, w, h, rects, speed, dir) {
  this.setup = function() {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.next = 0;
    this.squares = [];
    this.numRects = rects;
    this.speed = speed;
    this.speedScale = 1;
    this.dir = dir;
    this.pg = createGraphics(this.w, this.h);


  }
  this.addSquares = function () {
    // this.squares[this.next] = new rectMover(this.x, this.y, 10, 20);
    var c = color(255,0,0);
    var c2 = color(0,0,0);
    var numBars = this.numRects;
    var barWidth = this.w / (numBars - 1);
    var speed = this.speed * dir * this.speedScale;
    var startX = 0  - barWidth;
    var maxX = this.w;
    for (var i = 0; i < numBars; i++) {
      // Alternate colors
      var col = c;
      if (i % 2) {
        col = c2;
      }
      this.squares[i] = new RectMover(0 + i * barWidth - barWidth, 0, barWidth, this.h, speed, startX, maxX, col);
    }
  }
  this.draw = function () {
    // draw all the squares
    // rect(this.x,this.y, 20, 20);
    fill(127);

    rect(this.x,this.y, this.w, this.h);
    for (var i = 0; i < this.squares.length; i++) {
      this.squares[i].draw(this.pg);
    }

    image(this.pg,this.x,this.y);
    // this.squares[this.next].draw();
  }
  this.changeSpeedScale = function(speedScale) {
    this.speedScale = speedScale
    for (var i = 0; i < this.squares.length; i++) {
      var speed = this.speed * dir * this.speedScale;
      this.squares[i].s = speed;
    }
  }
  this.update = function () {
    // create a square
    // update square position
    // if square moves out of bounds delete it
    for (var i = 0; i < this.squares.length; i++) {
      this.squares[i].update();
    }
  }
  this.setup();
  this.addSquares();
}
