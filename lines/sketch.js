function setup() {
  cnvs = createCanvas(900, 500);
  cnvs.parent("p5canvas");
  // var pos = {x:100, y:100};
  // mrLine = new MrLine(pos);
  lineCluster = new LineCluster();
  //noStroke();
  frameRate(30);
}

function draw() {
  background(240);
  var pos = {x:mouseX, y:mouseY};
  var test = {x:200, y:300};
  lineCluster.draw();
}
