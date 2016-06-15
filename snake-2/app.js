var express = require('express')

// Make web server
var app = express()
var server = require('http').Server(app)
// Pass webserver to socket.io
var io = require('socket.io')(server)
// Server index.html
app.use(express.static('public'))
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/public/index.html')
// })

var images = [{url: "/img/one.jpg"}, {url: "/img/two.jpg"}]
app.get('/gallery', function (req, res) {
  res.locals = {images: images}
  res.render('test.ejs')
})

// app.listen(8080)
// Server gallery gallery.ejs
// highscore page

// socket server
var highscore = 0;
// on connect give highscore
io.on('connection', function (client) {
  console.log("connected");
  client.emit('highscore', {highscore: highscore})
  // on death save highscore
  client.on('death', function (score) {
    console.log("score recieved");
    console.log(score);
    if (score > highscore) {
      console.log("new highscore");
      console.log(score);
      highscore = score;
      client.emit('highscore', {highscore: highscore})
      //client.boradcast.emit('highscore', {highscore: highscore})
    }
  })
})

// receive image file
// move file to gallery

server.listen(8080)
