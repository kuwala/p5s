function Grid() {
  // This grid has objects in it that can animate
  this.cellSize = 64;
  this.h = 640;
  this.w = 640;
  this.rows = 12;
  this.cols = 22;
  this.cells = []
  this.inOrderCells = []

  // set each cell to be a random obj
  this.reset = function () {
    this.cells = new Array();
    for (var i = 0; i < this.cols ; i++) {
      for (var j = 0; j < this.rows; j++) {

        var x = i * this.cellSize + this.cellSize *.5
        var y = j * this.cellSize + this.cellSize *.5
        var col = color(171,13,44)
        // var col = color(random(255),random(255),random(255))
        var obj = new RandObj(x,y,col);
        this.cells.push(obj)
      }
    }
  }
  this.reset();

  this.getPosFromXY = function (x, y) {
    var xx = x * this.cellSize;
    var yy = y * this.cellSize;
    // do bounds check here
    // could be a good spot for flyweight desing pattern
    return [xx,yy];
  }
  this.update = function () {
    //update each object
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].update()
    }
    // var a = this.cells[1][1];
    // var b = this.cells[1][2];
    // a.rgb = [255,255,255];
    // b.rgb = [255,255,255];
    // stroke(127);
    // line(a.x,a.y,b.x,b.y)
    // var coll = collisionCheck(a, b);
    // if (coll) {
    //   a.rgb = [0,0,0];
    //   b.rgb = [0,0,0];
    //   console.log("collision");
    //   console.log(a);
    //   console.log(b);
    // }
    this.checkAll();
  }
  this.draw = function () {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].draw()
    }
  }

  this.checkAll = function () {
    // for each one check all others but not self for collision
    for (var i = 0; i < this.cells.length; i++) {
      var a = this.cells[i]
      for (var j = 0; j < this.cells.length; j++) {
        var b = this.cells[j]

        // console.log("i is" + i);
        // console.log("j is" + j);
        // if its not self check for collision
        if (i != j) {
          var coll = collisionCheck(a, b);
          if (coll) {
            a.collision = true;
            b.collision = true;
            console.log("collisioni");
            console.log(a);
            console.log(b);
            console.log("------end------");
            this.cells.splice(j,1);

          }
        }

      }
    }
  } // end check all

}
function collisionCheck(a, b) {
  // collision check between two objects a, b

  // x = 100, y = 32
  // x = 120, y = 40
  // pythagrian thearom
  // distance
  var x = a.x - b.x;
  var y = a.y - b.y;
  var dist = sqrt(x*x + y*y)

  // check if circles are touching or inside
  if (dist < a.r + b.r) {
    return true;
  } else {
    return false;
  }
}

function RandObj(x,y,col) {
  return new CircleObj(x,y,col);
}

function CircleObj(x,y,col) {
  var sdiff =  floor(random(3)) * 8;
  this.h = 32 - sdiff;
  this.w = 32 - sdiff;
  this.r = this.w / 2;
  this.x = x;
  this.y = y;
  this.c = col;
  this.collision = false; // flag needs to be reset durring update or draw
  this.rgb = [171,13,44+ sdiff*3];
  this.draw = function () {
    if (this.collision === true) {
      this.c = color(0);
      // set the flag back to false
      this.collision = false;
    } else {
      this.c = color(this.rgb[0],this.rgb[1],this.rgb[2])
    }
    fill(this.c)
    ellipseMode(CENTER);
    noStroke();
    ellipse(this.x,this.y,this.w,this.h)
    // console.log({this.x,this.y,this.w,this.h});
  }
  this.grow = function (growth) {
    this.w += growth;
    this.h += growth;
    this.r = this.w / 2;
  }
  this.update = function () {
    var n = round(random(-3,3));
    this.x += random(-1,1);
    this.y += random(-1,1);
    // if (random(100) > 98) {
    //   this.h += 1;
    //   this.w += 1;
    //
    // }
    // if (random(4000) > 3998) {
    //   this.rgb = [random(255),random(255),random(255)];
    // }

    // this.h += round(random(-3,3))
    // this.w += round(random(-3,3))
    // this.h += n;
    // this.w += n;
    // this.rgb = [this.rgb[0]+random(-2,2),this.rgb[1]+random(-2,2),this.rgb[2]+random(-2,2)];
  }
}
