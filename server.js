let express = require("express");
let dbo = require("./db/conn");
let app = express();

//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);


//calling projects fron route
const projectRouter = require('./routes/projects');

//initializing default port
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use('/api/projects', projectRouter);


//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});


// connecting database here and throwing data fron our local port
dbo.connectToDatabase(function(err){
if (err){
  console.error(err);
  process.exit();

}
http.listen(port, () => {
  console.log("Listening on port ", port);
});
});


// this is only needed for cloud foundry
require("cf-deployment-tracker-client").track();
