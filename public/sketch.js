let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  //in () diamo un nome ai dati ricevuti
  console.log(data); //ora anche da altri client (in questo caso altre tabs, ma anche diversi pc) i dati verranno printed nel mio server
  //function we execute every time we get info from another server
  fill("blue");
  circle(data.x, data.y, 20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  fill("yellow");
  circle(mouseX, mouseY, 20);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };
  //with socket we cna send javascript objects

  clientSocket.emit("mouse", message); //sending msg to server
}
