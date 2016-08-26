function SimGame() {
  // root object that houses all the guts and based on the FSM state controls
  // the game flow

  // board
  // make all the objects
  this.state = "loading"
  this.objects = []
  this.grid = null
  this.eventManager = new EventManager()
  this.eventManager.addListener(this)

  this.update = function () {
    // console.log("updating ..");
    switch (this.state) {
      case "loading":
        this.loading()
        break;
      case "playing":
        this.playing()
        break;
      case "paused":
        this.paused()
        break;
      default:
        console.log("unkown game state");
    }
  }

  this.loading = function () {
    // show loading message
    // wait for loadFinished message from server
  }
  this.paused = function () {
    // show paused screen maybe?
  }
  this.playing = function () {
    // update all the game objects
    // consume input
    background(127)
    // console.log("playing ...");
    // for (var i = 0; i < this.objects.length; i++) {
    //   // console.log(this.objects.length);
    //   this.objects[i].update()
    // }
    // this.snake.update(this.grid)

    // Send an update event to all the listeners
    this.eventManager.post(new UpdateEvent())

  }
  this.setup = function () {
    // make, initilize, and store game objects
    // then can be called again to reset the game objects

    // Board
    // objects
    this.grid = new Grid()
    this.eventManager.addListener(this.grid)
    this.objects.push(this.grid)
    this.snake = new Snake()
    this.eventManager.addListener(this.snake)
    // give snake a refence to grid
    this.snake.setGrid(this.grid)
    this.objects.push(this.snake)

    // for sending input
    this.playerControlled = this.snake

    //this.rules = SnakeGame()
    // console.log("setup called");

  }
  this.addObjectTolist = function (obj) {
    this.objects.push(obj)
  }
  this.changeState = function (newState) {
    // check if newState is valid
    switch (newState) {
      case "loading":
      case "playing":
      case "paused":
        this.state = newState
        break;
      default:
        console.log("Not a valid simGame state");
    }
  }
  this.togglePlay = function () {
    if (this.state == "playing") {
      this.state = "paused"
    } else if (this.state == "paused") {
      this.state = "playing"
    }
  }
  this.notify = function (event) {
    if (event.type == "KeyboardEvent") {
      if (event.code == 16) {
        this.togglePlay()
      }
    }
  }

}
