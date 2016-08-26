function setup() {
  cnvs = createCanvas(1800, 1800);
  cnvs.parent("p5canvas");
  ca = new CA();
  ca.grid256();
  frameRate(10);
}

// create a draw ca in square
// subdivide screensize into 256 cells 16x16
// run through all 256 possible rules and draw ca

function draw() {
  // background(255);
  // ca.update2();
  // ca.randomizeRules();

}

function mousePressed() {
  // ca.randomizeRules();
}
