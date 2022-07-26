fetch('http://localhost:5000/movies')
  .then((response) => response.json())
  .then((data) => console.log(data));
