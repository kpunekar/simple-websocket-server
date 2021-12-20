const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const port = 6363;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  ws.on('message', (data) => {
    console.log('Data received %s', data);
    ws.send('Data received from client');
  });
});

server.listen(port, () => {
   console.log('Server is listening on port 6363..') 
})
