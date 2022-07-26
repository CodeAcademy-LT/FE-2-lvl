// Variables
// -- DOM elements
const formElement: HTMLElement = document.querySelector('form') as HTMLElement;
const userListElement: HTMLElement = document.querySelector(
  '#users-list'
) as HTMLElement;

// -- logic
let tableCreated: boolean = false;

// -- interfaces
interface User {
  name: string;
  surname: string;
}

// Funtions
const getUserData = (e: Event): void => {
  e.preventDefault();

  const user: User = {
    name: (<HTMLFormElement>e.target).username.value,
    surname: (<HTMLFormElement>e.target).usersurname.value,
  };

  registerUser(user);
};

const registerUser = (user: User): void => {
  if (!tableCreated) {
    const table: string = `
    <table>
      <thead>
          <tr>
              <th>Name</th>
               <th>Surname</th>
          </tr>
      </thead>
      <tbody></tbody>
    </table>
    `;

    userListElement.innerHTML = table;

    tableCreated = true;
  }

  const tBodyElement: HTMLElement = document.querySelector(
    'tbody'
  ) as HTMLElement;

  // --- creating new row and columns for table body
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

  // --- adding content for table columns
  td1.innerText = user.name;
  td2.innerText = user.surname;

  // --- appending columns to row
  tr.append(td1, td2);

  // --- appending row to table
  tBodyElement.appendChild(tr);
};

// Events
formElement.addEventListener('submit', getUserData);
