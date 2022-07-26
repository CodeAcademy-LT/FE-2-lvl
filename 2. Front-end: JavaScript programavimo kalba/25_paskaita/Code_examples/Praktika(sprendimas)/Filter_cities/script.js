// Variables
const seachInput = document.querySelector('#search');
const suggestions = document.querySelector('#suggestions');
const CITIES_ENDPOINT =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(CITIES_ENDPOINT)
  .then((response) => response.json())
  .then((data) => cities.push(...data));
// Functions
function findCities(word, citiesArray) {
  return citiesArray.filter((city) => {
    const rgxRule = new RegExp(word, 'gi');
    return city.city.match(rgxRule) || city.state.match(rgxRule);
  });
}
function displayCities(e) {
  const matchedCities = findCities(e.target.value, cities);
  let output = '';
  for (let citie of matchedCities) {
    output += `
      <li>${citie.city}, ${citie.state}</li>
      `;
  }
  suggestions.innerHTML = output;
}
// Events
seachInput.addEventListener('keyup', displayCities);
