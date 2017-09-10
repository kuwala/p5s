// Small Todo
// DRY the XY Spread updates
// I thinking a spread should become a class. hmmm

function RectsManager(sizeX, sizeY) {
  // make 6 rectangles
  // the p5 graphic image to draw on
  this.pg = createGraphics(sizeX,sizeY);
  this.numRects = 6;

  this.rects = new Array(this.numRects);
  this.xSegments = 3;
  this.xSpread = new Array(this.xSegments);
  this.lastXSpreadLength = 0; // Length of the whole spread in pixels
  this.ySegments = 3;
  this.ySpread = new Array(this.ySegments);
  this.ySpread = new Array(this.numRects);
  this.lastYSpreadLength = 0; // Length of the whole spread in pixels

  var xRate = this.pg.width / this.numRects * 2;
  var yRate = this.pg.height / 2; // essentially two rows
  var xSize = this.pg.width / 3;
  var ySize = this.pg.height / 2;

  /*
  for (var i = 0; i < this.xSpread.length; i++) {
    var x  = i % 3;
    this.xSpread[i] = x * xRate;
  }
  for (var i = 0; i < this.ySpread.length; i++) {
    var y = int(i/3);
    this.ySpread[i] = y * yRate;
  }
  */

  this.updateRects = function () {
    for (var i = 0; i < this.rects.length; i++) {
      this.rects[i] = new Rectangle(this.xSpread[i], this.ySpread[i], xSize, ySize, i * 0.25);
    }
  }

  this.draw = function () {

    this.pg.background(30);
    for (var i = 0; i < this.rects.length; i++) {
      this.rects[i].draw(this.pg);
    }
    // this.pg.rect(0,0,200,200);
    // this.pg.rect(0,0,200,100);
    image(this.pg, 0, 0);
  }
  this.updateXSpread = function (length) {
    var segmentLength = length / this.xSpread.length;
    for (var i = 0; i < this.xSpread.length; i++) {
      this.xSpread[i] = 0.5 * segmentLength + i * segmentLength;
    }
  }
  this.updateYSpread = function (length) {
    var segmentLength = length / this.ySpread.length;
    for (var i = 0; i < this.ySpread.length; i++) {
      this.ySpread[i] = 0.5 * segmentLength + i * segmentLength;
    }
  }
  this.spreadSquaresX = function (xSpreadValue) {
    // check if value is different from last used value
    if (this.lastXSpreadValue != xSpreadValue) {
      // scale the horizontal length of the drawing space
      var scale = map(xSpreadValue, 0, 255, 0, 1);
      var length = this.pg.width * scale;
      this.updateXSpread(length);
      // can be optimized to be called once per frame
      // not after every update
      this.updateRects();
    }

  }
  this.updateRotationSpread = function (rotValue) {
    // rotValue 0 - 255;
    // Spread out the rotation of each square so that
    // the they rotate at different amounts. but

    //Even Spread
    var m = map(rotValue, 0, 255, 0, 3.1415 * 2);
    // console.log(m);

    for (var i = 0; i < this.rects.length; i++) {
      this.rects[i].rotation(m + m/this.rects.length * i);
    }
  }

  this.setup = function () {
    this.updateXSpread(sizeX);
    this.updateYSpread(sizeY);

    this.updateRects();
  }
  this.setup();

}
