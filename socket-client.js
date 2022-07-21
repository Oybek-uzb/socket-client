const socket = io("http://localhost:80")
const connMsg = document.getElementById("connecting-message")

socket.emit("connected", "from client", data => {
    console.log(data);
})

socket.on("conn-checked", data => {
    let decision = Math.round(Math.random())
    console.log("decision", decision);
    connMsg.innerHTML = "Connecting to server done."

    if (decision) {
        emitIfDecided()
    }
})

function emitIfDecided() {
    socket.emit("random", "selected sending", data => {
        console.log(data);
    })
}