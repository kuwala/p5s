function MrLine(position) {
  // {x:0,y:0}
  this.pos = position;
  this.len = 25;
  this.dir = {x:0,y:0};

  this.pointAt = function (direction) {
    //point the line at the new pos
    this.dir = direction;
  }

  this.draw = function () {
    push();
    // translate canvas
    translate(this.pos.x, this.pos.y);
    // rotate canvas
    var opp = this.pos.y - this.dir.y;
    var adj = this.dir.x - this.pos.x;
    // tan(opposite / adjacent) = angle
    var angle = atan(opp / adj);
    // console.log(opp);
    // console.log(adj);
    // console.log(angle);
    rotate(angle * -1);
    // The urg is a mysterious mythical value responsible with
    // flipping the direction of the line drawn, because
    // the line function draws a line with direction in mind
    // but the canvas has been rotated to face the direction.
    if (adj < 0) {
      urg = -1;
    } else {
      urg = 1;
    }
    urg = 1;
    line(this.len * -1, 0, this.len * urg, 0);
    line(this.len * -1, 0, this.len * urg, 0);
    // calculate angle between position and pointAt
    pop();
  }

}
