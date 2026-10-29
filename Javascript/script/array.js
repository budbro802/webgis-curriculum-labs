// 1D example
let myLayers = ["Forest", "Satellite", "NDVI"];
console.log(myLayers[0]); // Output: Forest
console.log(myLayers[1]); // Output: Satellite

//2D example
let polygon = [
  [1, 1],
  [3, 3],
  [4, 4],
];

let secondPolygon = polygon[1];
console.log(secondPolygon);

let yForSecondPolygon = secondPolygon[1];
console.log(yForSecondPolygon);

//Exercise 1 - Change the NDVI layer to a Basemap layer
myLayers[2] = "Basemap";
console.log(myLayers[2]); // Output: Basemap

// Exercise 2 - Change the third coordinate to become 1, 3
polygon[2] = [1, 3];
console.log(polygon[2]); // Output: [1, 3]
console.log(polygon); // Output: [[1, 1], [3, 3], [1, 3]]
