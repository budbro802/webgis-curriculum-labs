// Exercise: Create a CoordinateUtils class. The class should NOT be instantiated and contain only static methods.
// Implement the following methods:
// - toString(lat, lng) → returns a string like: "Lat: 51.5, Lng: -0.09"
// - isValid(lat, lng) → returns true if latitude is between -90 and 90  longitude is between -180 and 180
// At the end call the methods directly from the class (without creating an object)

class CoordinateUtils {
  static toString(lat, lng) {
    return `Lat: ${lat}, Lng: ${lng}`;
  }

  static isValid(lat, lng) {
    if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
      return true;
    } else {
      return false;
    }
  }
}

let wgs84String = CoordinateUtils.toString(52, 13);
console.log(wgs84String);

let latLongCheck = CoordinateUtils.isValid(33, -84);

console.log(latLongCheck);
