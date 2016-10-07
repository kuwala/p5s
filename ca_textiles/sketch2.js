var pg;
var cols =  8;
function setup() {
  cnvs = createCanvas(1360,1360)
  cnvs.parent("p5canvas");

  pg = createGraphics(200,200);
  ca = new CA_Life();
  ca.setSurface(pg);
  noStroke();
  pg.noStroke();
  frameRate(10);
}

var angle = 0;
var x = 0;
function draw() {
  // background(0);
  // if (angle > 50) {
  //   angle = 0;
  // }
  //
  // background(0);
  // pg.background(40);
  // pg.fill(179,0,0);
  // x = 30 + sin(angle) * 10;
  // angle += 0.1;
  // pg.rect(x,5,10,10);
  ca.update();
  // pg.background(0);
  pg.fill(127);
  pg.textSize(42);
  // pg.text("F",20,50);

  drawRow(pg);
  push();
  translate(0,pg.width);
  drawRow2(pg);
  translate(0,pg.width);
  drawRow(pg);
  translate(0,pg.width);
  drawRow2(pg);
  translate(0,pg.width);
  drawRow(pg);
  translate(0,pg.width);
  drawRow2(pg);
  pop();

}
function drawRow2(pg) {
  push();
  translate(pg.width/2, pg.height/2)
  for (var i = 0; i < cols; i++) {
    push();
    translate(i*pg.width,0);
    rotate(TWO_PI * i / 4 + angle);
    image(pg,0 - pg.width/2, 0 - pg.height/2);
    pop();
  }
  pop();
}
function drawRow(pg) {
  push();
  translate(pg.width/2, pg.height/2)
  for (var i = 0; i < cols; i++) {
    // move then draw
    push();
    translate(i*pg.width, 0);
    // transform()
    if (i % 2) {
      scale(-1 * i % 2,1);
      //translate(100,0);
    }
    //draw

    image(pg, 0 - round(pg.width/2), 0 - round(pg.height/2));


    pop();
  }
  pop();

}
