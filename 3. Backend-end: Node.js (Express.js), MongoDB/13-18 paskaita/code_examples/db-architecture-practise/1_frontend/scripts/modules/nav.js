// Variables
const nav = document.querySelector('nav');

// Funtions
const createNavigation = () => {
  // -- creating navigation elements
  // --- ul
  const ul = document.createElement('ul');

  // --- li x 3
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  // --- a x 3
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');

  // -- creating content to a (links)
  a1.href = location.href.includes('pages') ? '../index.html' : './index.html';
  a2.href = location.href.includes('pages')
    ? './login.html'
    : './pages/login.html';
  a3.href = location.href.includes('pages')
    ? './my-account.html'
    : './pages/my-account.html';

  a1.innerText = 'Home';
  a2.innerText = 'Login / Signup';
  a3.innerText = 'My Account';

  // -- appending elements to li
  li1.appendChild(a1); // Home page
  li2.appendChild(a2); // Login/Signup page
  li3.appendChild(a3); // My Account page

  // -- appending elements to ul
  if (localStorage.getItem('user')) {
    ul.append(li1, li3);
  } else {
    ul.append(li1, li2);
  }

  // -- appending ul with navigation links to nav
  nav.appendChild(ul);
};

// Events
document.addEventListener('DOMContentLoaded', createNavigation);
