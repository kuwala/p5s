function Cell ( x, y, w, state) {
  this.x = x;
  this.y = y;
  this.w = w;

  this.state = state;
  this.previousState = state;

  this.display = function () {
    if (this.previousState == 0 && this.sate == 1) {
      fill(255);

    } else if (this.state == 1) {
      fill(255,255,255);
    } else if (this.previousState == 1 && this.state == 0) {
      fill(255,0,0);
    } else {
      fill(0);
    }

    rect(this.x, this.y, this.w, this.w);
  }
  this.newState = function (state) {
    this.previousState = this.state;
    this.state = state;
  }
  this.setState = function (state) {
    this.previousState = state;
    this.state = state;
  }

}
