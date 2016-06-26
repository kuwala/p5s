function KeyboardTest() {
  this.keys = []
  this.add = function (newKey) {
    this.keys.push(newKey)
  }
  this.log = function () {
    for (var i = 0; i < this.keys.length; i++) {
      var key = this.keys[i]
      console.log(key);
    }
  }
}
