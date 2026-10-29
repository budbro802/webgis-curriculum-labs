for (let i = 0; i < 5; i++) {
  console.log("Current index is: " + i);
}

// Exercise:
// - Let us sum numbers from 1 to 10

// Solution for summing numbers from 1 to 10

// let customerNumber = 1000;
// let sum = 0;
// for (let i = 1; i <= customerNumber; i++) {
//   sum += i;

//   console.log("Current sum is: " + sum);
// }

let customerNumberWhile = 1000;
let sumWhile = 0;
let x = 1;
while (x <= customerNumberWhile) {
  sumWhile += x;
  x++;
}
console.log("Sum using while loop is: " + sumWhile);

// - Let us write and sum numbers in array – strings work same
let arrayOfNumbers = [3, 6, 9, 12, 15];
let arraySum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  arraySum += arrayOfNumbers[i];
}
console.log("Sum of array numbers is: " + arraySum);

// - Find numbers greater than 5 and put them in another array
let greaterThanFive = [];
let checkNumber = 5;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  let currentNumber = arrayOfNumbers[i];

  if (currentNumber > checkNumber) {
    greaterThanFive.push(currentNumber);
    console.log(currentNumber + " is greater than " + checkNumber);
  } else {
    console.log(currentNumber + " is not greater than " + checkNumber);
  }
}
console.log("Numbers greater than " + checkNumber + " are: " + greaterThanFive);

// Increment by 2 in a loop
let polygon = [1, 2, 1, 4, 3, 4, 3, 2, 1, 2];
for (let i = 0; i < polygon.length; i += 2) {
  let currX = polygon[i];
  let currY = polygon[i + 1];
  console.log(currX + ", " + currY);
}

// Exercise for you
// - Find the biggest number in array using a loop
let biggestNumber = -Infinity;
let numbers = [3, 7, 2, 9, 5];
for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];

  console.log("Current number is: " + currentNumber);

  if (currentNumber > biggestNumber) {
    biggestNumber = currentNumber;
  }
}
console.log("The biggest number is: " + biggestNumber);

let biggestNumber2 = -Infinity;
let numbers2 = [12, 8, 15, 4];

for (let i = 0; i < numbers2.length; i++) {
  let CNum = numbers2[i];

  console.log("This current number be: " + CNum);

  if (CNum > biggestNumber2) {
    biggestNumber2 = CNum;
  }
}

console.log("The big numbers be: " + biggestNumber2);

// Exercise
// - Lets iterate a WKT polygon and store its values like [ [], [], [], …]
// POLYGON((1 2,1 4,3 4,3 2,1 2))
let wktPolygon = "POLYGON((1 2,1 4,3 4,3 2,1 2))";

// Get coordinates from WKT polygon
let innerCoordinates = wktPolygon.substring(
  wktPolygon.indexOf("((") + 2,
  wktPolygon.indexOf("))"),
);

// Split the coordinates into pairs
let coordinatePairs = innerCoordinates.split(",");

// Store coordinates in an array
let polygonCoordinates = [];
for (let i = 0; i < coordinatePairs.length; i++) {
  let pair = coordinatePairs[i].trim().split(" ");
  polygonCoordinates.push([parseFloat(pair[0]), parseFloat(pair[1])]);
}
console.log("Polygon coordinates: ", polygonCoordinates);

// - Get the perimeter of the polygon
let perimeter = 0;
for (let i = 0; i < polygonCoordinates.length - 1; i++) {
  let x1 = polygonCoordinates[i][0];
  let y1 = polygonCoordinates[i][1];

  let x2 = polygonCoordinates[i + 1][0];
  let y2 = polygonCoordinates[i + 1][1];

  let distance = Math.hypot(x2 - x1, y2 - y1);

  perimeter = perimeter + distance;
}
console.log("Perimeter of the polygon: ", perimeter);
