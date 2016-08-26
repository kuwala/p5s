function Snake() {
  // looks like I am going to need a State Machine soon!
  this.gotPoint = 0;
  this.isDead = false;
  this.isDrawing = true;
  var j = 70;
  this.tailColor = color(random(j * 3),random(j * 3),random(j * 3));
  this.tailTrailCell = {t:0,c:this.tailColor}

  this.setGrid = function (grid) {
    this.grid = grid
  }
  this.reset = function() {
    this.gotPoint = 0;
    // this.cells.clear();
    this.cells = []
    this.len = 4;
    // set up cells pointing down
    for (var i = 0; i < this.len; i++) {
      this.cells[i] = {x:10,y:10-i};
    }
    // 0 stopped, 1 top, 2 left, 3 down, 4 right
    this.dir = 3;
    this.dirX = 0;
    this.dirY = 1;
  }
  this.reset();
  this.setDir = function(dir) {
    this.dir = dir;

    // up left down right
    if (this.dir === 1) {
      this.dirX = 0;
      this.dirY = -1;
    } else if (this.dir === 2) {
      this.dirX = -1;
      this.dirY = 0;
    } else if (this.dir === 3) {
      this.dirX = 0;
      this.dirY = 1;
    } else if (this.dir === 4) {
      this.dirX = 1;
      this.dirY = 0;
    }

  }
  this.move = function(grid, newPos) {
    // remove tail from grid and array
    var tail = this.cells.shift();


    this.grid.setCell(tail.x, tail.y, 0);
    if (this.isDrawing) {
      this.grid.setCellColor(tail.x, tail.y, this.tailTrailCell.c);
    }
    // grid.setCellColor(tail.x, tail.y, this.tailTrailCell.c);

    // push new cell on the array
    // last element is always the head
    this.cells.push(newPos);
    this.grid.setCell(newPos.x, newPos.y, 1);
  }

  this.toggleDraw = function() {
    this.isDrawing = ! this.isDrawing;
  }

  this.update = function() {
    // check next spot
    var nextSpot;
    var okayToMove = false;
    // Heads x y + direction
    var newX = this.cells[this.cells.length-1].x + this.dirX;
    var newY = this.cells[this.cells.length-1].y + this.dirY;
    var newPos = {x:newX, y:newY};
    // Check and adjust for outer bounds
    this.grid.checkEdges(newPos);
    var nextSpot = this.grid.lookAtCell(newPos.x,newPos.y);

    this.isDead = false;

    if (nextSpot.t === 0) {
      // empty
      okayToMove = true;
      this.gotPoint = 0;
    } else if (nextSpot.t  === 2) {
      // its food! grow
      this.gotPoint = 1;
      var extraTail = this.cells[0];
      this.cells.unshift(extraTail);
      this.tailTrailCell.c = nextSpot.c;
      //clear grid spot
        this.grid.setCellColor(newPos.x, newPos.y, color(0));
      this.grid.moreRandFood();
      okayToMove = true;
    } else if (nextSpot.t  === 1) {
      // snake at spot DIE!
      this.isDead = true;
      this.grid.reset();
      this.reset();
      okayToMove = false;
    } else {
      okayToMove = false;
      // other ???
    }

    //move
    if (okayToMove) {
      this.move(this.grid, newPos);
    }

    //grow and shit
    // ???

  } // end of - this.update()

    this.digestKey = function (keyCode) {
      var dir = this.dir
      if (keyCode === LEFT_ARROW) {
      if (dir !== 4) {
        this.setDir(2);
        newKey = LEFT_ARROW
        // console.log("Left");
      }
    } else if (keyCode === RIGHT_ARROW) {
      if (dir !== 2) {
        this.setDir(4);
        newKey = RIGHT_ARROW
        // console.log("Right");
      }
    } else if (keyCode === DOWN_ARROW) {
      if (dir !== 1) {
        this.setDir(3);
        newKey = DOWN_ARROW
        // console.log("Down");
      }
    } else if (keyCode === UP_ARROW) {
      if (dir !== 3) {
        this.setDir(1);
        newKey = UP_ARROW
        // console.log("Up");
      }
    } else if (keyCode === 32) {
      // Toggle Tail Drawing
      this.toggleDraw()
    }
  }// end of digestKey

  this.notify = function (event) {
    if (event.type == "UpdateEvent") {
      this.update()
    } else if (event.type == "KeyboardEvent") {

      this.digestKey(event.code)
    }
  }

}
