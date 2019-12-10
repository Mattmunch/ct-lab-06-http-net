const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
let currentColor = '';
const colorHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Color</title>
</head>
<body>
    <h1>${currentColor}</h1>
</body>
</html>`;
const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.method === 'GET' && request.path === '/') {
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } else if(request.method === 'GET' && request.path === '/red') {
      currentColor = 'Red';
      socket.end(createResponse({ body: colorHtml, status: '200 OK', contentType: 'text/html' }));
    } else if(request.method === 'GET' && request.path === '/green') {
      currentColor = 'Red';
      socket.end(createResponse({ body: colorHtml, status: '200 OK', contentType: 'text/html' }));
    } else if(request.method === 'GET' && request.path === '/blue') {
      currentColor = 'Red';
      socket.end(createResponse({ body: colorHtml, status: '200 OK', contentType: 'text/html' }));
    } else if(request.method === 'POST' && request.path === '/echo') {
      currentColor = 'Red';
      socket.end(createResponse({ body: colorHtml, status: '200 OK', contentType: 'text/html' }));
      
    } else socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
