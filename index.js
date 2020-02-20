//Load HTTP module
const http = require("http").createServer(app);
const hostname = '127.0.0.1';
const port = 3000;
var app = require('express')();
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('A user connected');
});

http.listen(port, function () {
    console.log('listening on *:3000');
});

//Create HTTP server and listen on port 3000 for requests
/*
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/