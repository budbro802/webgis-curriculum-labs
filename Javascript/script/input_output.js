// document.getElementById("submit").addEventListener("click", function () {
//   // alert("Test Button clicked!");
//   let myName = document.getElementById("name").value; // Get the value of the input field with id "name"
//   let h1Text = document.getElementById("myH1").innerHTML; // Get the inner HTML of the h1 element with id "myH1"
//   alert("Hello " + myName + "! Welcome to the site.");
//   alert("The H1 text is: " + h1Text);

//   document.getElementById("name").value = "Allen Iverson"; // Set the value of the input field with id "name" to "Allen Iverson"
//   document.getElementById("myH1").innerHTML =
//     "Welcome to my Javascript page, I'm learning Javascript!"; // Update the inner HTML of the h1 element with id "myH1" to include the user's name
// });

// document
//   .getElementById("calculateDistance")
//   .addEventListener("click", function () {
//     let point1 = document.getElementById("point1").value;
//     let point2 = document.getElementById("point2").value;
//     console.log("Point 1:", point1, "Point 2:", point2);
//   });

// Exercise: Grab the points and get the coordinates from them. Use '.value' to get the values of the input fields with ids "point1" and "point2". Then, log the points to the console using 'console.log()'.
// Get the distance with the formula: distance = sqrt((x2 - x1)^2 + (y2 - y1)^2). Use 'Math.sqrt()' to calculate the square root and 'Math.pow()' to calculate the power.
// Output the result in a console.log () statement. Display Output the result in the webapge using .innerHTML.

//prettier-ignore
document.getElementById("calculateDistance").addEventListener("click", function () {
    let point1Input = document.getElementById("point1").value;
    let point2Input = document.getElementById("point2").value;
    console.log(point1Input, point2Input);

    let searchStringPoint = "POINT(";
    let point1X = parseFloat(
      point1Input.substring(searchStringPoint.length, point1Input.indexOf(" ")),
    );
    console.log("Point 1 X:", point1X);
    let point1Y = parseFloat(
      point1Input.substring(
        point1Input.indexOf(" ") + 1,
        point1Input.indexOf(")"),
      ),
    );
    console.log("Point 1 Y:", point1Y);

    let point2X = parseFloat(
      point2Input.substring(searchStringPoint.length, point2Input.indexOf(" ")),
    );
    console.log("Point 2 X:", point2X);

    let point2Y = parseFloat(
      point2Input.substring(
        point2Input.indexOf(" ") + 1,
        point2Input.indexOf(")"),
      ),
    );
    console.log("Point 2 Y:", point2Y);

    let distance = Math.sqrt(
      Math.pow(point2X - point1X, 2) + Math.pow(point2Y - point1Y, 2),
    );
    console.log("Distance:", distance);

    document.getElementById("distanceResult").innerHTML =
      "The distance between the two points is: " +
      distance.toFixed(1) +
      " units.";

    document.getElementById("distanceResult").style.border = "1px solid blue";
  });
