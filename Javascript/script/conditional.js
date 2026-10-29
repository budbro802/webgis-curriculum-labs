// Exercise
// - Check Equator
// - Add text field and button so the user can provide input

// Exercise for you
// - Rewrite to check for eastern and western hemisphere and prime meridian (0°)
// - Extra: Check for quarters like if someone is in north west hemisphere

let lat = 18.4233;

let lon = -33.918861;

if (lat > 0 && lat <= 90) {
  console.log(" You are in the Northern Hemisphere");
} else if (lat < 0 && lat >= -90) {
  console.log(" You are in the Southern Hemisphere");
} else if (lat == 0) {
  console.log(" You are on the Equator");
} else {
  console.log(" The value of latitude is invalid");
}

if (lon > 0 && lon <= 180) {
  console.log(" You are in the Eastern Hemisphere");
} else if (lon < 0 && lon >= -180) {
  console.log(" You are in the Western Hemisphere");
} else if (lon == 0) {
  console.log(" You are on the Prime Meridian");
} else {
  console.log(" The value of longitude is invalid");
}

if (lat > 0 && lat <= 90 && lon > 0 && lon <= 180) {
  console.log(" You are in the North Eastern Hemisphere");
} else if (lat > 0 && lat <= 90 && lon < 0 && lon >= -180) {
  console.log(" You are in the North Western Hemisphere");
} else if (lat < 0 && lat >= -90 && lon > 0 && lon <= 180) {
  console.log(" You are in the South Eastern Hemisphere");
} else if (lat < 0 && lat >= -90 && lon < 0 && lon >= -180) {
  console.log(" You are in the South Western Hemisphere");
} else if (lat == 0 && lon == 0) {
  console.log(" You are on the Equator and Prime Meridian");
} else {
  console.log(" The value of latitude and longitude is invalid");
}

document.getElementById("sub-button").addEventListener("click", function () {
  event.preventDefault();

  lat = parseFloat(document.getElementById("latitude").value);
  lon = parseFloat(document.getElementById("longitude").value);

  function coordFunction() {
    document.getElementById("result").innerHTML =
      "Coordinates submitted!<br> Latitude: " +
      document.getElementById("latitude").value +
      "<br> Longitude: " +
      document.getElementById("longitude").value;
  }

  coordFunction();
});
