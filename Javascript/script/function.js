//Exercise
//Put distance calculation in function so we can reuse it easier
//x1, y1, x2, y2 each are the coordinate values in pairs. Enter them in the manner [1, 2]

function distanceToPoints(x1, y1, x2, y2) {
  let distance = Math.hypot(x2 - x1, y2 - y1);
  return distance;
}

let xCoord1 = 1;
let yCoord1 = 1;
let xCoord2 = 2;
let yCoord2 = 2;

let theDist = distanceToPoints(xCoord1, yCoord1, xCoord2, yCoord2);

console.log("The Distance is: " + theDist);

//Exercise for you
//Write your own indexOf function.
//Parameters are the search string and a character (also a string) we want the index of. Return -1 if not inside.
let myName = "Andrew";
let charSpot = indexOf(myName, "r");
//Call function from here
indexOf(name, "r");
console.log("The index is: ", +charSpot);
// console.log the index here
function indexOf(searchString, char2Find) {
  let index = -1;
  for (let i = 0; i < searchString.length; i++) {
    let currCharString = searchString[i];

    if (currCharString == char2Find) {
      index = i;
      break;
    }
  }
  return index;
}

//Exercise for you
//Put WKT coordinate extraction in function and return coordinates as number
let point = "POINT(-84.3880 33.7490)";
console.log(point.indexOf("POINT"));
// let extrCoord = WKTPointExtr();

function WKTPointExtr(pointVal) {
  // let index = -1;
  let startPoint = "POINT(";
  let startPosText = pointVal.indexOf(startPoint);

  console.log("startPosText Value:" + startPosText);

  let closePosText = pointVal.indexOf(")", startPosText);
  console.log(
    "If you see the closing par, you are doing it right:",
    +closePosText,
  );

  let coordString = pointVal.substring(
    startPosText + startPoint.length,
    closePosText,
  );
  console.log("Text inside the parenthesis:" + coordString);
  let coorSplit = coordString.split(" ");

  let lon = parseFloat(coorSplit[0]);
  let lat = parseFloat(coorSplit[1]);
  // for (let i = 0; i < point.length; i++) {
  //   let CurPoint = point[i];
  // }

  console.log(`The longitude and latitude are: ${lon} ${lat}.`);

  let coordVariable = [[lon], [lat]];
  console.log(coordVariable);

  return coordVariable;
}

WKTPointExtr(point);

let extrCoord = WKTPointExtr(point);

console.log(
  `The extracted Coord values are ${extrCoord[0]} and ${extrCoord[1]}.`,
);

// console.log(); //Log with listing coordinate values of X and Y are

// let point = "these are the atlanta coordinates POINT(-84.3880 33.7490)";
// let searchStringPoint = "POINT(";
// let posOfPointText = point.indexOf(searchStringPoint);

// let posOfClosingParen = point.indexOf(")", posOfPointText);

// let coordinatesString = point.substring(
//   posOfPointText + searchStringPoint.length,
//   posOfClosingParen,
// );

// let splitCoordinates = coordinatesString.split(" ");
// console.log(splitCoordinates);

// let latitude = parseFloat(splitCoordinates[0]);
// let longitude = parseFloat(splitCoordinates[1]);
