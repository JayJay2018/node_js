const http = require('http');

const requestHandler = http.createServer((req, res) => {
  // console.log('hello');
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>My first assignment</title></head>');
    res.write('<body><h1>Hi there. I wish you a beatiful Sunday.</h1>');
    res.write('<form><input><button>Send</button></form>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Some users</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
    res.write('</html>')
    return res.end();
  }
})

requestHandler.listen(3000);

exports.handler = requestHandler;
exports.someText = 'Hardcoded shit.'