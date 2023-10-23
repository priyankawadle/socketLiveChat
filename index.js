const express = require('express')
const app = express();
const http = require('http');
const {Server} = require('socket.io')

const expressServer = http.createServer(app);
const io = new Server(expressServer)

io.on('connection',(socket)=>{
    console.log("new connection created")
    let receivedData
    socket.on('chat',(data)=>{
        receivedData = data 
        io.emit("myEvent2", receivedData);
    })

})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
expressServer.listen((3002),()=>{
    console.log("listing 3002")
})