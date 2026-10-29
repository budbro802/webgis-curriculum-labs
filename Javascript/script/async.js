// Exercise:
// Use fetch() to load this file and console.log() the name of the first city.
// https://www.w3schools.com/js/js_async_fetch.asp
// city.json:
// [ { "name": "Berlin", "population": 3600000 }, { "name": "Hamburg", "population": 1800000 } ]

// fetch("data/city.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data[0].name);
//     console.log(data[0].population);
//     console.log(
//       `The city of ${data[2].name} has a population of ${data[2].population}.`,
//     );
//   });

// async/await
async function getCityData(urlPath) {
  let response = await fetch(urlPath);
  let data = await response.json();

  //prettier-ignore
  //console.log(`The city of ${data[2].name} has a population of ${data[2].population}.`,
  //);
  return data;
}

// 1. Use this for returning data
getCityData("data/city.json").then(function (data) {
  //prettier-ignore
  console.log(`The city of ${data[2].name} has a population of ${data[2].population}.`);
});

// 2. Use this to continue the code - Recommended to forget about it
async function main() {
  let data = await getCityData("data/city.json");

  //prettier-ignore
  console.log(`The city of ${data[2].name} has a population of ${data[2].population}.`);
}

main();
