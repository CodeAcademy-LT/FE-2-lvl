/*
 **  EXAMPLE 1
 */
// Variables
const itemOneElement = document.querySelector('#item-1');
const itemTwoElement = document.querySelector('#item-2');
const itemThreeElement = document.querySelector('#item-3');

const showColorsButtonElement = document.querySelector('#show-colors-button');

let visable = false;

// Functions
function showFlagColors() {
  if (visable) {
    itemOneElement.style.backgroundColor = '';
    itemTwoElement.style.backgroundColor = '';
    itemThreeElement.style.backgroundColor = '';

    visable = false;
  } else {
    itemOneElement.style.backgroundColor = 'yellow';
    itemTwoElement.style.backgroundColor = 'green';
    itemThreeElement.style.backgroundColor = 'red';

    visable = true;
  }
}

// Events
showColorsButtonElement.addEventListener('click', showFlagColors);

/*
 **  EXAMPLE 2
 */

// Variables
const boxesElements = document.querySelectorAll('.boxes-container__box');
const removedBoxesCountElement = document.querySelector('#removed-boxes-count');

let removedBoxesCount = 0;

// Functions
function removedBox(e) {
  e.target.style.display = 'none';

  removedBoxesCount++;
  removedBoxesCountElement.innerText = removedBoxesCount;

  boxesElements.forEach(function (box) {
    box.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  });
}

// Events
boxesElements.forEach(function (box) {
  box.addEventListener('click', removedBox);
});

/*
 **  EXAMPLE 3
 */

// Variables
const greetingElement = document.querySelector('#greeting');

// Functions
function styleGreeting() {
  setTimeout(function () {
    greetingElement.style.position = 'absolute';
    greetingElement.style.top = '50%';
    greetingElement.style.left = '50%';
    greetingElement.style.transform = `translate(-50%,50%)`;
    greetingElement.style.transition = 'transform 500ms';
  }, 3000);
}

// Events
document.addEventListener('DOMContentLoaded', styleGreeting);
