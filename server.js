//all information we want to run on our server
console.log("up and running");

let express = require("express"); //loading express library in express variable

let app = express(); //app is the result of running express

let port = 3000;

let server = app.listen(port); //running instance of our serve

console.log("Server is running on http://localhost:" + port);

app.use(express.static("public"));
