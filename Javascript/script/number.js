let myNumber = 5;

let sqrt = Math.sqrt(myNumber);

let roundedNumber = sqrt.toFixed(3);
console.log(sqrt);

console.log(roundedNumber);

// Exercise
// - Get distance between 2 points with Pythagoras
// - Use Math functions for sqrt and power
// - Output with console.log();
// - Extra: round to 1 digit and test with different points

let x1 = 10;
let y1 = 15;
let x2 = 12;
let y2 = 8;

let sqrtX = Math.pow(x2 - x1, 2);
let sqrtY = Math.pow(y2 - y1, 2);

console.log("X Distance Squared: " + sqrtX);
console.log("Y Distance Squared: " + sqrtY);

let sqrtSum = sqrtX + sqrtY;
console.log("Sum of Squared Distances: " + sqrtSum);

let distance = Math.sqrt(sqrtSum);

console.log("Raw Distance: " + distance);

console.log("Distance between points: " + distance.toFixed(1));
