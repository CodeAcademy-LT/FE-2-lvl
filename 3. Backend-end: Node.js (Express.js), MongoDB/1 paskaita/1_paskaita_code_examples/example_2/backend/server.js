const http = require('http');
const fs = require('fs');

const PORT = 5000;

const server = http.createServer((req, res) => {
  const headers = { 'Content-Type': 'text/html' };
  res.writeHead(200, headers);

  switch (req.url) {
    case '/':
      fs.readFile('views/index.html', (error, data) => {
        if (error) {
          res.writeHead(404);
          res.write('File not found');
        } else {
          res.write(data);
        }

        res.end();
      });
  }
});

server.listen(PORT, console.log(`Server running on port ${PORT}`));
