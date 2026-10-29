// Exercise:
// Lets get the JSON from the slide before from the server and console.log the coordinates in
// 2 different ways doing the same thing
fetch("data/feature.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.geometry.coordinates);
    console.log(data["geometry"].coordinates);
    console.log(data["geometry"]["coordinates"]);
  });

// Exercise:
// Let us create own JS object from scratch, overwrite and add at least one value and print all with for loop
let place = {
  name: "Kennesaw Mountain",
  state: "Georgia",
  coordinates: [33.9762 - 84.5797],
};

console.log(place.name);

place.name = "Kennesaw Mountain Summit";
console.log(place.name);

place.weather = "partly cloudy";
console.log(place);
console.log("---------------");
for (let myKey in place) {
  console.log(place[myKey]);
}
console.log("---------------");
