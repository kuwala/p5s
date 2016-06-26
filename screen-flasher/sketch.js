// Daniel's Screen Flashing sketch
// Made to be used with a projector and wireless keyboard
// press key rows 1-6 and q-p
function setup() {
  cnvs = createCanvas(900, 500);
  cnvs.parent("p5canvas");
  noStroke();
  frameRate(30);
  bgColor = color(0)
  fgColor = color(0)
  colPal = new ColPal()
}

function draw() {
  background(fgColor)

}
function bg1() {
  bgColor = color(kk)
}
function keyPressed(key) {
  if (keyCode == 81) {
    fgColor = colPal.colors[0]
  } else if (keyCode == 87) {
    fgColor = colPal.colors[1]
  } else if (keyCode == 69) {
    fgColor = colPal.colors[2]
  } else if (keyCode == 82) {
    fgColor = colPal.colors[3]
  } else if (keyCode == 84) {
    fgColor = colPal.colors[4]
  } else if (keyCode == 89) {
    fgColor = colPal.colors[5]
  } else if (keyCode == 85) {
    fgColor = colPal.colors[6]
  } else if (keyCode == 73) {
    fgColor = colPal.colors[7]
  } else if (keyCode == 79) {
    fgColor = colPal.colors[8]
  } else if (keyCode == 80) {
    fgColor = colPal.colors[9]
  } else if (keyCode == 49) {
    fgColor = colPal.colors[10]
  } else if (keyCode == 50) {
    fgColor = colPal.colors[11]
  } else if (keyCode == 51) {
    fgColor = colPal.colors[12]
  } else if (keyCode == 52) {
    fgColor = colPal.colors[13]
  } else if (keyCode == 53) {
    fgColor = colPal.colors[14]
  } else if (keyCode == 54) {
    fgColor = colPal.colors[15]
  }
  console.log(keyCode);
}
