
const http = require('http')
const express = require('express')
const app = express()
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/www/index.html');

});

const server = http.createServer(app)
const port = 3000


server.listen(port, function() {
    console.log(`Server is listening on port ${port}`)
})