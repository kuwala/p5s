function Rectangle(x, y, w, h, rot) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.rot = rot;
  this.rotRate = 0;
  this.col = color(127,127,127,66);


  this.draw = function (pg) {
    // console.log("loggin inside rect draw");
    // console.log("width");
    // console.log(this.w);
    // console.log("height");
    // console.log(this.h);
    // console.log("");
    // change draw parameters
    pg.stroke(2);
    pg.fill(this.col);
    pg.rectMode(CENTER);

    // using translations of the screen
    pg.push();
    // pg.scale(0.5,0.5);
    pg.translate(this.x + this.w/2, this.y + this.h/2);
    pg.rotate(this.rot);
    // Use quad() if in WEBGL
    // pg.translate(this.w/2,this.h/2);
    pg.rect(0,0, this.w, this.h);
    pg.pop();
    // pg.pop();
    // pg.rect(0,0,200,200);
  }
  this.changeXY = function (x, y) {
    this.x = x;
    this.y = y;
  }
  this.changeWH = function (w, h) {
    this.w = w;
    this.h = h;
  }
  this.rotation = function (rot) {
    this.rot = rot;
  }
  this.color = function (col) {
    this.col = color(col);
  }
  this.rotate = function () {
    this.rot += 0.01;
  }
}
