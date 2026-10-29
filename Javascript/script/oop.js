// Exercise:

// Create your own Point class. The point should have an x coordinate  a y coordinate.
// The class should have a constructor that sets x and y and a method getX() that
// returns the x value and a method getY() that returns the y value as well as a method translate(dx, dy)
// that changes the point position. At the end, create one point and translate it.
//Extra: These properties should be private

class Point {
  constructor(x, y) {
    this.xCoord = x;
    this.yCoord = y;
    this.color;
  }

  getX() {
    return this.xCoord;
  }
  getY() {
    return this.yCoord;
  }

  setX(x) {
    this.xCoord = x;
  }
  setY(y) {
    this.yCoord = y;
  }

  translate(dx, dy) {
    this.xCoord = this.xCoord + dx;
    this.yCoord = this.yCoord + dy;
    return true;
  }
}

let x1 = 1;
let y1 = 2;
let myPoint = new Point(x1, y1);
myPoint.setX(99);
console.log(myPoint.getX());

let translateWorks = myPoint.translate(1, 1);
if (translateWorks) {
  console.log("The new coords are: ", myPoint.getX(), ";", myPoint.getY());
} else {
  console.log("Could not translate");
}

// Exercise for you:
// Create your own Line class. The line should have
// a start point and an end point – use point class !or simply [x, y]!.
// These properties should be private with underscore. The class should
// have a constructor that gets two Points - class or [x, y] and
// a method getLength() that calculates and returns the
// length of the line. Use the distance formula and make
// a function/method getLength() in that line class.
// At the end create:
// 1. create two points - class or [x, y] - and
// 2. create a line from them
// 3. print the length using the getLength() method.
// 4. On the constructor line, get the length using getLength() method. Print result

class Line {
  constructor(startPoint, endPoint) {
    this._startPoint = startPoint;
    this._endPoint = endPoint;
    this.color = "Blue";
    this.length = this.getLength();
  }

  getLength() {
    let length = Math.hypot(
      this._endPoint.xCoord - this._startPoint.xCoord,
      this._endPoint.yCoord - this._startPoint.yCoord,
    );
    return length;
  }
}

let p1 = new Point(1, 1);
let p2 = new Point(2, 2);

let ourLine = new Line(p1, p2);

console.log(`This is our length ${ourLine.getLength()}`);

console.log(`This is the Length with the property ${ourLine.length}`);

console.log(ourLine.color);
