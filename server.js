
const http = require('http')
const express = require('express')
const app = express()

const WebSocket = require('ws');

const port = 8080
const server = http.createServer(express)

//const wss = new WebSocket.Server({ port: 8080 });
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {

          const count = Math.floor(1000 / data)

          setInterval(() => {
            client.send(``);
            //console.log(data)
          }, data)

           /*  setInterval(() => {
                client.send(`${count} messages/second received`);
                //console.log(data)
            }, 5000) */
       
      }
    });
  });
});



server.listen(port, function() {
    console.log(`Server is listening on port ${port}`)
})