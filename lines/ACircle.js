function ACircle(x, y, boxSize) {
  this.x = x;
  this.y = y;
  this.a = PI;
  this.aRate = 0.01;

  this.boxSize = boxSize;
  // this.pad = boxSize / 8;
  this.pad = 0;
  this.diameter = this.boxSize - this.pad * 2;
  this.color = color(210,140,70);
  this.altColor = color(255,255,255);

  this.update = function(){
    this.a += this.aRate;
  }
  this.setAngle = function (angle) {
    this.a = angle;
  }
  this.addAngle = function (angle) {
    this.a += angle;
  }
  this.setColors = function (col, altCol) {
    this.color = col;
    this.altColor = altCol;
  }
  this.setARate = function (aRate) {
    this.aRate = aRate;
  }
  this.draw = function(){
  // draw the circle in the center of boxsize
  // Leave padding inside the box all around 4 edges

  // background for debug / alignment
  // fill(200);
  // rectMode(CENTER);
  // rect(this.x, this.y, this.boxSize, this.boxSize);

  // to rotate shape without effecting other draws
  // push() transformationMatrix on stack
  push();
  // 1 translate to position of thing to rotate
  translate(this.x, this.y);
  // 2 rotate
  rotate(this.a);
  // draw the shape
  fill(this.color);
  arc(0, 0, this.diameter, this.diameter, PI, 0);
  fill(this.altColor);
  arc(0, 0, this.diameter, this.diameter, 0, PI);
  // pop() transformationMatrix from stack
  pop()

  }

}
