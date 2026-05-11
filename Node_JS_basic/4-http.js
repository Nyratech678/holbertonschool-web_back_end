const http = require('http');

const app = http.createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Holberton School!');
});
app.listen(1245);
module.exports = app;
