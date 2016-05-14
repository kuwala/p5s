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
      // this.circles[i].setAngle(random(PI));
      this.circles[i].setARate(0.001 * i * (0.2)+ 0.00001);
      this.circles[i].setColors(color(255,241,0),color(255,128,0));
    }
    // try setting it as a clock
    // day hour minute
    var minuteRate = PI * 2 / 60 / 30;
    var hourRate = minuteRate / 60;
    var dayRate = hourRate / 24;
    this.circles[0].setARate(dayRate);
    this.circles[0].setAngle(2 * PI / hour());
    this.circles[1].setARate(hourRate);
    this.circles[1].setAngle(2 * PI / minute());
    this.circles[2].setARate(minuteRate);
    this.circles[2].setAngle(2 * PI / second());

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
