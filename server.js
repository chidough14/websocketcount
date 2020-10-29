
const http = require('http')
const express = require('express')
const app = express()
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/www/index.html');

});

const WebSocket = require('ws');

const port = 8888
const server = http.createServer(app)


const wss = new WebSocket.Server({ server});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {

        const pload = JSON.parse(data)
        console.log(pload)

        setInterval(() => {
          client.send(pload.msg);
        }, pload.time)
          
       
      }
    });
  });
});



server.listen(port, function() {
    console.log(`Server is listening on port ${port}`)
})