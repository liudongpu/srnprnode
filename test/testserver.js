var http = require('http');

var iSum=0;

http.createServer(function (req, res) {
	iSum++;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World'+iSum+'\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');