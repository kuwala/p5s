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
      // this.circles[i].setARate(0.001 * i * (0.2)+ 0.00001);
      this.circles[i].setColors(color(255,241,0),color(255,128,0));
    }
    // try setting it as a clock
    var minuteRate = TWO_PI / 60.0 / 30.0;
    var hourRate = minuteRate / 60.0;
    var dayRate = hourRate / 24.0;
    //do all progress calculations in seconds

    console.log( TWO_PI * (hour() / 24.0));
    console.log(hour());
    console.log(minute());
    console.log(second());
    this.circles[0].setARate(dayRate);
    var secondsInDay = (hour() * 3600.0 + ( minute() * 60.0 ) + second());
    var maxDaySeconds = (86400.0);
    this.circles[0].setAngle( secondsInDay / maxDaySeconds * TWO_PI );
    this.circles[1].setARate(hourRate);
    var secondsInHour = ((minute() * 60.0 ) + second());
    var maxHourSeconds = (3600.0);
    this.circles[1].setAngle(secondsInHour / maxHourSeconds * TWO_PI);
    this.circles[2].setARate(minuteRate);
    this.circles[2].setAngle( second() / 60.0 * TWO_PI );

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
