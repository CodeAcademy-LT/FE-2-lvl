// Variables
// -- DOM elemenets
const wrapper = document.querySelector('#wrapper');

// Funtions
// -- adds background to main > #wrapper
const addBackgroundToWrapper = () => {
  // -- changing main > #wrapper background color based on page
  if (location.href.includes('index.html'))
    wrapper.style.backgroundColor = 'var(--dark-color)';
  if (location.href.includes('html.html'))
    wrapper.style.backgroundColor = 'var(--html-color)';
  if (location.href.includes('css.html'))
    wrapper.style.backgroundColor = 'var(--css-color)';
  if (location.href.includes('js.html'))
    wrapper.style.backgroundColor = 'var(--js-color)';
};

// Events
document.addEventListener('DOMContentLoaded', () => {
  addBackgroundToWrapper();
});
