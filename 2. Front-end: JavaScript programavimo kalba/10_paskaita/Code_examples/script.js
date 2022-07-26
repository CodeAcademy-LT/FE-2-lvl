// while loop
let i = 5; // BEGIN
while (i < 3) {
  // CONDITION
  console.log(`while loop: ${i}`);

  i++; // STEP
}
//--
const generateUniqeId1 = (amountOfSumbols, id = '') => {
  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

  while (id.length < amountOfSumbols) {
    let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    if (!id.includes(randomSymbol)) id += randomSymbol;
  }

  return id;
};

console.log(generateUniqeId1(10));

// do while loop
let j = 5; // BEGIN

do {
  console.log(`do while loop: ${j}`);

  j++; // STEP
} while (j < 3); // CONDITION

// for loop
//    BEGIN   CONDITION STEP
for (let i = 1; i < 3; i++) {
  console.log(`For loop: ${i}`);
}
//--
const generateUniqeId2 = (amountOfSumbols, id = '') => {
  let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

  for (let i = 0; i < amountOfSumbols; i++) {
    let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    if (!id.includes(randomSymbol)) id += randomSymbol;
  }

  return id;
};

console.log(generateUniqeId2(10));
//--
