// Exercise 1 - Make a list with layers and sort them in alphabetical order
let myLayers = ["Forest", "Satellite", "NDVI"];
myLayers.sort();
console.log(myLayers); // Output: ["Forest", "NDVI", "Satellite"]

// Exercise 2 - Append another layer to the list, get the number of layers and log the amount before and after the append
let layerCountBefore = myLayers.length;
console.log("Number of layers before append: " + layerCountBefore); // Output: 3

myLayers.push("Urban");
console.log("Number of layers after append: " + myLayers.length); // Output: 4

// Exercise 3 - Define two WKT points, extract the coordinates as x1 and y1 for the first point, and x2 and y2 for the second point, get the distance between them (Use split and parseFloat) and log the result
let point1 = "these are the atlanta coordinates POINT(-84.3880 33.7490)";
let point2 = "these are the miami coordinates POINT(-80.1918 25.7617)";

//Extract coordinates from point1
let searchStringPoint = "POINT(";
let posOfPointText1 = point1.indexOf(searchStringPoint);
let posOfClosingParen1 = point1.indexOf(")", posOfPointText1);
let coordinatesString1 = point1.substring(
  posOfPointText1 + searchStringPoint.length,
  posOfClosingParen1,
);

console.log("Coordinates String 1: " + coordinatesString1);
let splitCoordinates1 = coordinatesString1.split(" ");
let longitude1 = parseFloat(splitCoordinates1[0]); // Convert string to float - Atlanta longitude
let latitude1 = parseFloat(splitCoordinates1[1]); // Convert string to float - Atlanta latitude

console.log("Coordinates for point 1: " + longitude1 + ", " + latitude1);

//Extract coordinates from point2
let posOfPointText2 = point2.indexOf(searchStringPoint);
let posOfClosingParen2 = point2.indexOf(")", posOfPointText2);
let coordinatesString2 = point2.substring(
  posOfPointText2 + searchStringPoint.length,
  posOfClosingParen2,
);
console.log("Coordinates String 2: " + coordinatesString2);

let splitCoordinates2 = coordinatesString2.split(" ");
let longitude2 = parseFloat(splitCoordinates2[0]); // Convert string to float - Miami longitude
let latitude2 = parseFloat(splitCoordinates2[1]); // Convert string to float - Miami latitude

console.log("Coordinates for point 2: " + longitude2 + ", " + latitude2);

// Calculate the distance between the two points - Use JS function
let distance = Math.hypot(longitude2 - longitude1, latitude2 - latitude1);

let distanceRounded = distance.toFixed(1); // Round to 1 decimal place

console.log(
  "The distance between the two points is: " + distanceRounded + " units",
);

let R = 6371; // Radius of the Earth in kilometers
let dLat = (latitude2 - latitude1) * (Math.PI / 180);
let dLon = (longitude2 - longitude1) * (Math.PI / 180);

console.log("dLat: " + dLat);
console.log("dLon: " + dLon);

let a =
  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos(latitude1 * (Math.PI / 180)) *
    Math.cos(latitude2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

console.log("a: " + a);

let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
console.log("c: " + c);

let distanceInKm = R * c;
console.log(
  "The distance between the two points is: " + distanceInKm.toFixed(2) + " km",
);
