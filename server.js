//all information we want to run on our server
console.log("up and running");

let express = require("express"); //loading express library in express variable. able to provide files a s a serve

let app = express(); //app is the result of running express. this is to activate expr

let port = process.env.PORT || 3000;

let server = app.listen(port); //running instance of our server

console.log("Server is running on http://localhost:" + port); //simulating localhost

app.use(express.static("public"));

let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  //things that happen in relation to clients
  console.log(newSocket.id); //every time a client connects it prints the number of the conncetion
  newSocket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(dataReceived);

    newSocket.broadcast.emit("mouseBroadcast", dataReceived); // broadcast = sending message to all the other clients apart the one were usinf
  }
}
