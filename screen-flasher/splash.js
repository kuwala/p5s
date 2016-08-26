function Splash() {
  this.x = width/2
  this.y = height/2
  this.size = 0
  this.color = color(230)

  // step frames to grow to full size
  this.totalSteps = 8
  this.stepCount = 0
  this.stepSize = (width/2) / this.totalSteps
  this.notDone = true

  this.update = function () {
    if (this.stepCount <= this.totalSteps) {
      //grow
      this.size+= this.stepSize
      this.draw()
      this.stepCount += 1
      console.log("stepping");
      console.log(this.size);
      console.log(this.x);
      console.log(this.y);
    } else {
    }
  }
  this.draw = function () {
    rectMode(CENTER)
    fill(this.color)
    rect(this.x, this.y, this.size, this.size)

  }
  this.reset = function (col) {
    this.size = 0
    this.color = col
    this.stepCount = 0
  }

}
