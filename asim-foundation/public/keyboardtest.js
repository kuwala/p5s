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
    this.keys = []
  }
}

function EventManager() {
  this.listeners = []
  this.addListener = function (listener) {
    this.listeners.push(listener)
  }
  this.post = function (event) {
    for (var i = 0; i < this.listeners.length; i++) {
      this.listeners[i].notify(event)
    }
  }
}
function KeyboardEvent(code) {
  return {type: "KeyboardEvent", code: code}
}
function UpdateEvent() {
  return {type: "UpdateEvent"}
}
// Event types {type: "UpdateEvent"}
// {type: "KeyboardEvent", code: 39}
// tick, update, keyboard
