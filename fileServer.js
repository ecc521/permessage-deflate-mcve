const http = require('http');
const fs = require("fs")
const path = require("path")

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(fs.readFileSync(path.join(__dirname, "index.html")));
}

const server = http.createServer(requestListener);
server.listen(8080);
