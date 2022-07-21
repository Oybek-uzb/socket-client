const socket = io("http://localhost:80")
const connMsg = document.getElementById("connecting-message")

socket.emit("connected", "from client", data => {
    console.log(data);
})

socket.on("connected", data => {
    connMsg.innerHTML = "Connecting to server done."
    console.log(socket, data);
})