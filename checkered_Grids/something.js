function Something(position) {
  // {x:0, y:0}
  this.pos = position;
  this.size = 32;
  this.angle = 0;
  this.color = color(random(255));
  this.maxTrailLength = 5;
  this.trailPositions = [];

  this.draw = function () {
    // draw a box with a line

    var halfSize = this.size / 2

    push();
    translate(this.pos.x, this.pos.y);
    translate(halfSize, halfSize);

    // rotate(this.angle);

    rect(0 - halfSize, 0 - halfSize, this.size - halfSize, this.size - halfSize)


    line(halfSize, 0, halfSize, halfSize);
    pop()
  }
  this.drawWithTrail = function () {
    for (var i = 0; i < this.trailPositions.length; i++) {
      var pos = this.trailPositions[i];
      this.drawRect(pos);
    }
  }
  this.drawSimple = function () {
    this.drawRect(this.pos);
    this.drawFace(this.pos);
  }
  this.drawFace = function () {
    textSize(16);
    fill(255,0,255);
    // text("you cant read me",this.pos.x, this.pos.y);
    text("fuck",this.pos.x, this.pos.y + 16);
  }

  this.drawRect = function (pos) {
    push();
    fill(this.color);
    translate(this.pos.x, this.pos.y);
    rect(0,0, this.size, this.size);
    pop();
  }
  this.move = function (position) {
    // this.trailPositions.push(this.pos);
    // if (this.trailPositions.length > this.maxTrailLength) {
    //   this.trailPositions.shift();
    // }
    this.pos.x = this.pos.x + position.x;
    this.pos.y = this.pos.y + position.y;
  }
  this.rot = function (angle) {
    this.angle += angle;
  }

}
