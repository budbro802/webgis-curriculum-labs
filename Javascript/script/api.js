let openMetroData =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,wind_speed_10m";

fetch(openMetroData)
  .then((response) => response.json())

  .then((data) => {
    console.log(data);

    let times = data.hourly.time;
    let temps = data.hourly.temperature_2m;
    let wind = data.hourly.wind_speed_10m;
    let weatherForecastHTML = document.getElementById("weatherForecast");
    let tableString = `<table>`;

    // tableString = "<table>";
    tableString += "<tr>";
    tableString += "<th>Time</th>";
    tableString += "<th>Temp</th>";
    tableString += "<th>Wind</th>";
    tableString += "</tr>";

    for (let i = 0; i < times.length; i++) {
      console.log(
        `Time: ${times[i]}, Temperature: ${temps[i]}, Wind Speed: ${wind[i]}`,
      );

      let dateObject = new Date(times[i]);

      let formattedDateTime = dateObject.toLocaleString("en-US", {
        timeZone: "America/New_York",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short",
      });

      tableString += "<tr>";
      tableString += `<td>${formattedDateTime}</td>`;
      tableString += `<td>${temps[i]}</td>`;
      tableString += `<td>${wind[i]}</td>`;
      tableString += "</tr>";
    }
    tableString += "</table>";
    weatherForecastHTML.innerHTML = tableString;
  });

// <table>
//     <tr>
//       <th>Company</th>
//       <th>Contact</th>
//       <th>Country</th>
//     </tr>
//     <tr>
//       <td>Alfreds Futterkiste</td>
//       <td>Maria Anders</td>
//       <td>Germany</td>
//     </tr>
//     <tr>
//       <td>Centro comercial Moctezuma</td>
//       <td>Francisco Chang</td>
//       <td>Mexico</td>
//     </tr>
// </table>
