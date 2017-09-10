// Normalize these scores to values between 0 - 1
// so that htey add up to 1
var fruits = [
   { name: "mango", score: 5 },
   { name: "blueberry", score: 3 },
   { name: "cherry", score: 1 },
   { name: "apple", score: 1 },

];

function setup() {
  createCanvas(400, 300);
  background(0);


  var sum = 0;
  for (var i = 0; i < fruits.length; i++) {
    sum += fruits[i].score;
  }

  for (var i = 0; i < fruits.length; i++) {
    fruits[i].prob = fruits[i].score / sum;
    fruits[i].count = 0;
  }

  for (var i = 0; i < 100 ; i++) {
    var fruit = pickOne(fruits);
    fruit.count ++;
  }


}

function pickOne(list) {
  var index = 0;
  var r = random(1);

  while( r > 0) {
    r = r - list[index].prob
    index ++;
  }
  index --;
  return list[index];
}
