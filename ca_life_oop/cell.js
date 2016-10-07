function Cell ( x, y, w, state) {
  this.x = x;
  this.y = y;
  this.w = w;

  this.state = state;
  this.previousState = state;
  this.nextState = null;

  this.display = function () {
    if (this.previousState == 0 && this.state == 1) {
      // born
      fill(255);

    } else if (this.state == 1) {
      // alive
      fill(172);
    } else if (this.previousState == 1 && this.state == 0) {
      // death
      // fill(255,0,0);
      fill(86);
    } else {
      fill(0);
    }

    rect(this.x, this.y, this.w, this.w);
  }
  this.updateState = function () {
    // this.pre
  }

  this.newState = function (state) {
    this.previousState = this.state;
    this.state = state;
  }
  this.futureState = function (state) {
    this.nextState = state;
  }
  this.progressState = function () {
    this.previousState = this.state;
    this.state = this.nextState;
    this.nextState = null;
  }
  this.setState = function (state) {
    this.previousState = state;
    this.state = state;
  }

}
