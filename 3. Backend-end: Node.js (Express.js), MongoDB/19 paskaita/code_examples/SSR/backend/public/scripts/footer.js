// Variables
const dateElement = document.querySelector('#date');

// Funtions
const displayDate = () => {
  dateElement.innerText = `${new Date().getFullYear()}`;
};

// Events
document.addEventListener('DOMContentLoaded', displayDate);
