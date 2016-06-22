// This is based on artwork by Karel Martens
// http://lasociale.us/karel

function setup() {
  cnvs = createCanvas(900, 500);
  cnvs.parent("p5canvas");
  noStroke();
  frameRate(30);
  gridSpace = new GridSpace(2)
}

function draw() {
  background(0)
  gridSpace.update()
}

function randColor() {
  return color(random(255),random(255),random(255))
}
function randPos(xMax,yMax) {
  return createVector(random(xMax,yMax))
}
function GridSpace(cellSize) {
  //check if you can make small enough cells
  this.rows = floor(height / cellSize)
  this.cols = floor(width / cellSize)
  if (this.rows < 1 && this.cols < 1) {
    console.log("Warning cellSize is to bigg!");
  }
  this.cellSize = cellSize
  this.creationRate = 1 // per frame
  this.prixels = []

  this.update = function () {
    // remove dead prixels
    for (var i = 0; i < this.prixels.length; i++) {
      if (this.prixels[i].life < 0) {
        this.prixels.splice(i,1)
      }
    }
    // create prixels
    for (var i = 0; i < this.creationRate; i++) {
      var x = floor(random(this.cols)) * this.cellSize
      var y = floor(random(this.rows)) * this.cellSize
      var w = h = this.cellSize
      var pr = new Prixel(x,y,w,h)
      console.log(pr);
      this.prixels.push(pr)
    }
    // update and draw prixels
    for (var i = 0; i < this.prixels.length; i++) {
      this.prixels[i].update()
    }
  }

}
function Prixel(x,y,w,h) {
  this.pos = createVector(x,y)
  this.w = w
  this.h = h
  this.color = randColor()
  this.life = 30 // life in frames
  this.draw = function () {
    fill(this.color)
    rect(this.pos.x, this.pos.y, w, h)
  }
  this.update = function () {
    this.life -= 1;
    this.draw()
  }
}
