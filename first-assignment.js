const http = require('http');

const requestHandler = http.createServer((req, res) => {
  // console.log('hello');
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first assignment</title></head>');
    res.write('<body><h1>Hi there. I wish you a beatiful Sunday.</h1>');
    res.write('<form action="/create-user" method="POST"><input placeholder="Create a user" type="text" name="user"><button>Send</button></form>')
    res.write('<form action="/users" method="GET"><button>Users</button></form>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Some users</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
    res.write('</html>')
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    })
    return req.on('end', () => {
      parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      user = parsedBody.split('=')[1];
      console.log(user);
      res.statusCode = 302;
      res.setHeader('Location', '/users')
      res.write('<html>');
      res.write('<head><title>Created user successfully</title></head>');
      res.write('<body><h1>Creation successful</h1></body>');
      res.write('</html>');
      return res.end();
    })
  }
})

requestHandler.listen(3000);

exports.handler = requestHandler;
exports.someText = 'Hardcoded shit.'