const http = require('http');
const PORT = 5000;

const cars = [
  { id: 1, make: 'Audi' },
  { id: 2, make: 'BMW' },
  { id: 3, make: 'Opel' },
];

const movies = [
  { id: 1, name: 'Harry Potter' },
  { id: 2, name: 'Spiderman' },
  { id: 3, name: 'Superman' },
];

let server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  res.writeHead(200, headers);

  switch (req.url) {
    case '/cars':
      res.write(JSON.stringify(cars));
      res.end();
      break;
    case '/movies':
      res.write(JSON.stringify(movies));
      res.end();
      break;
    default:
      res.write(JSON.stringify([]));
      res.end();
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
