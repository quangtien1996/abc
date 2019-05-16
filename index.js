var express = require("express");
var app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(8080);

io.on("connection", function(socket){
	// console.log("co nguoi ket noi" +socket.id);
	// socket.on("disconnect", function(){
	// 	console.log(socket.id +" đã ngắt kết nối");
	// });
	socket.on("data", function(result){
		// console.log(result);
		io.sockets.emit('data',result);
	});
});
app.get("/", function(req, res){
	res.render("trangchu");
});