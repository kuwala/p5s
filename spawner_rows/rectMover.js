function RectMover(x, y, w, h, s, startX, maxX, color) {
  this.setup = function () {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.s = s;
    this.startX = startX;
    this.maxX = maxX;
    this.color = color;
  }
  this.setup();
  this.update = function () {
    this.x += this.s;
    if (this.x > this.maxX ) {
      this.x = this.startX;
    } else if(this.x < this.w* -1) {
      this.x = this.maxX
    }

  }
  this.draw = function (pg) {
    pg.fill(this.color);
    pg.noStroke() ;
    pg.rect(this.x,this.y,this.w,this.h);
  }

}
