// Extract coordinates from a WKT point string
let point = "these are the atlanta coordinates POINT(-84.3880 33.7490)";

let searchStringPoint = "POINT(";
let posOfPointText = point.indexOf(searchStringPoint);
console.log("Position of 'POINT(': " + posOfPointText);

let posOfClosingParen = point.indexOf(")", posOfPointText);

let pointextStringPoint = posOfPointText + searchStringPoint.length;
console.log("Calculated start position: " + pointextStringPoint);

let coordinatesString = point.substring(
  posOfPointText + searchStringPoint.length,
  posOfClosingParen,
);

console.log("Coordinates String: " + coordinatesString);

let splitCoordinates = coordinatesString.split(" ");
console.log(splitCoordinates);

let latitude = parseFloat(splitCoordinates[0]);
let longitude = parseFloat(splitCoordinates[1]);

console.log("Our coordinates are: " + latitude + ", " + longitude);

//Template literal example
let templateLiteral = `The coordinates are: ${latitude}, ${longitude}`;
console.log(templateLiteral);
