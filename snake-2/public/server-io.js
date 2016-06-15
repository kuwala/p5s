
var socket = io.connect('http://localhost:8080')
socket.on('connect', function () {
  //update score text
  console.log("Connected to socket server");
})
socket.on('highscore', function (data) {
  console.log("score recievec");
  console.log(data);
  // dataReceived(score)
  receiveData(data)
})
function sendHighScore(score) {
  console.log("sending highscore");
  var score = score + 3;
  socket.emit('death',score)
}
