function Something(position) {
  // {x:0, y:0}
  this.pos = position;
  this.size = 30;
  this.angle = 1;

  this.draw = function () {
    // draw a box with a line

    var halfSize = this.size / 2

    push();
    translate(this.pos.x, this.pos.y);
    translate(halfSize, halfSize);

    rotate(this.angle);

    rect(0 - halfSize, 0 - halfSize, this.size - halfSize, this.size - halfSize)


    line(halfSize, 0, halfSize, halfSize);
    pop()
  }
  this.move = function (position) {
    this.pos.x = this.pos.x + position.x;
    this.pos.y = this.pos.y + position.y;
  }
  this.rot = function (angle) {
    this.angle += angle;
  }

}
