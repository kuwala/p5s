function Circs() {
  this.setup = function(){
    // 3 circles
    // each circle has a colored in arch
    // it has an angle of rotations

    // circles system
    // circles spread value - distance between each circles
    // padding space
    this.numCircs = 3;
    this.circles = [];
    this.size = 256 + 128;
    this.spread = this.size / 2;
    this.startX = 256;
    this.startY = 256;
    for (var i = 0; i < this.numCircs; i++) {
      this.circles[i] = new ACircle(this.startX + this.spread * i, this.startY,this.size);
      this.circles[i].setAngle(random(PI));
      this.circles[i].setARate(0.001 * i * (0.2)+ 0.00001);
      this.circles[i].setColors(color(255,241,0),color(255,128,0));
    }
    // try setting it as a clock
    // day hour minute
    // minuteRate = PI / 60 * frameRate(30)
    // var secsRate = PI / 60 * 2;

  }
  this.setup();
  this.update = function(){
    //roate circles
    for (var i = 0; i < this.circles.length; i++) {
      this.circles[i].update();
    }
  }
  this.draw = function(){
    //draw 3 circles
    for (var i = 0; i < this.circles.length; i++) {
      this.circles[i].draw();
    }
  }
}