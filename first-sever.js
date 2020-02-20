const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      res.write('<html>');
      res.write('<header><title>Enter message here</title></header>');
      res.write('<body><h1>Something unexpected happened!</h1></body>');
      res.write('<form action="/message" method="POST"><input type="text" name="message"><button>Send</button></form>')
      res.write('</html>');
      return res.end();
    }
    if (url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
      })
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    }
    res.write('<html>');
    res.write('<header><title>Enter message here</title></header>');
    res.write('<body><h1>Hello from my first node.js server</h1></body>');
    res.write('</html>');
    return res.end();
    
})

server.listen(4200);