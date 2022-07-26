// Testuosime šį masyvą
// let numbers = [5,1,7,2,-9,8,2,7,9,4,-5,2,-6,8,-4,6];

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
// ES6
// const arrDoubled = (array) => array.map(item => item * 2);
// console.log(arrDoubled(numbers));

// 2.  Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// ES6
// const arrMultiplied = (array, number) => array.map(item => item * number);
// console.log(arrMultiplied(numbers, 5));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
// ES6
// -- su filter
// const arrCountTwos = array => array.filter(item => item === 2).length;
// -- su reduce
// const arrCountTwos = array => array.reduce((total, item) => item === 2 ? ++total : total, 0);
// ES5
// function arrCountTwos(array) {
//     return array.reduce(function(total, item) {
//         return item === 2 ? ++total : total;
//     }, 0)
// }
// console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
// const arrIndexOfFirst = (array, number) => array.indexOf(number);
// console.log(arrIndexOfFirst(numbers, 8));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
// const arrIndexOfLast = (array, number) => array.lastIndexOf(number);
// console.log(arrIndexOfLast(numbers, 8));
//----------------------------------------------------
// Užduotims atlkti naudogi metodai:
// - .split() Plačiau: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// - .reverse() Plačiau: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// - .join() Plačiau: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223
// ES6
// const reverseNumbers = (numbers) => +(("" + numbers).split("").reverse().join(""));
// console.log(reverseNumbers(32243));

// 7. Parašykite  funkciją findMinMax, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: let arr = [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9";
// let arr = [8,5,4,2,7,1,9];
// const findMinMax1 = (array) => {
//     let sortedArray = array.sort((a,b) => a > b ? 1 : -1);
//     return `Mažiausas: ${sortedArray[0]}, Didžiausas: ${sortedArray[sortedArray.length - 1]}`;
// }
// console.log(findMinMax1(arr));
// const findMinMax2 = (array) => `Mažiausas: ${Math.min(...array)}, Didžiausas: ${Math.max(...array)}`;
// console.log(findMinMax2(arr));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
// let checkForLetters = (sentence, letter) => {
//     let lettersAmount = sentence.toUpperCase().split("").reduce((total, item) => {
//         return item === letter.toUpperCase() ? ++total : total;
//     }, 0);
//     let ending;
//     switch(lettersAmount) {
//         case 0:
//             ending = "kartų";
//             break;
//         case 1:
//             ending = "kartą";
//             break;
//         case 2:
//             ending = "kartus";
//             break;
//         case 10:
//             ending = "kartų";
//             break;
//         case 11:
//         case 12:
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//         case 18:
//         case 19:
//         case 20:
//             ending = "kartų";
//             break;
//     }
//     return `Raidė ${letter} sakinyje rasta ${lettersAmount} ${ending}.`;
// }
// console.log(checkForLetters("Hi, how are youuuu?", "u"))

// 9. Parašykite funckiją findNumbersAndSort, kuri ras visus skaičius esančius masyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", 10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10]
// let findNumbersAndSort = array => array.filter(item => typeof item === "number").sort((a,b) => a - b);
// console.log(findNumbersAndSort(arr2));
// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False
// let arr1 = [2, 7, 6, 9, 5];
// let checkIfAllSmaller1 = (array, number) => {
//     for(let item of array) {
//         if (item <= number) return false;
//     }
//     return true;
// }
// let checkIfAllSmaller2 = (array, number) => {
//     let answer = true;
//     for(let item of array) {
//         if (item <= number) return answer = false;
//     }
//     return answer;
// }
// console.log(checkIfAllSmaller1(arr1, 5));
// console.log(checkIfAllSmaller2(arr1, 5));

// Isivaizduok kad turi "vending machine". Parasyk funkcija kuri apskaiciuos optimaliausia grazos grazinimo buda (maziausiai monetu), pvz.: preke kainuoja. 59ct, o idejot 1 eur., tokiu atveju graza bus 41ct (20ct 20ct ir 1ct). Galimi monetu nominalai [1eur, 50ct, 20ct, 10ct, 5ct, 1ct]. Grazint reikia array su monetomis, siuo atveju [20, 20, 1]. Funkcija turi priimti trus argumentus: monetu masybas, produkto kaina (centais), idotu pinigu verte (centais)

// const coins = [100, 50, 20, 10, 5, 1]; // Galimos monetos grazai
// const price = 65; // Produkto kaina
// const paid = 200; // Sumoketa suma

// -- su for loop'u
// const countChangeOne = (coinsArray, itemPrice, amountPaid) => {
//   let changeArray = [];

//   let change = amountPaid - itemPrice;

//   for (let coin of coinsArray) {
//     if (coin <= change) {
//       let numOfCoins = parseInt(change / coin);
//       change = change - coin * numOfCoins;
//       changeArray.push(...Array(numOfCoins).fill(coin));
//     }
//   }

//   return changeArray;
// };

// console.log(countChangeOne(coins, price, paid));

// -- reduce
// const countChangeTwo = (coinsArray, itemPrice, amountPaid) => {
//   let change = amountPaid - itemPrice;

//   let changeArray = coinsArray.reduce((total, currentItem) => {
//     if (currentItem <= change) {
//       let numOfCoins = parseInt(change / currentItem);
//       change = change - currentItem * numOfCoins;
//       total.push(...Array(numOfCoins).fill(currentItem));
//     }

//     return total;
//   }, []);

//   return changeArray;
// };

// console.log(countChangeTwo(coins, price, paid));
