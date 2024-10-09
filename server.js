const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");

const server = http.createServer(app);
server.listen(3030, () => console.log("Server started at PORT: 3030"));

//Socket.io
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`A new user has connected : ${socket.id}`);
  socket.on("user-message", (message) => {
    io.emit(message);
  });
});
