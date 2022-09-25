const cityNameDisplay = document.getElementById("city");
const description = document.getElementById("desc");
const icon = document.getElementById("icon");
const temp = document.getElementById("currTemp");
let userInput = "London";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=01e01cdc66fefd67a63b4c44e1d5d997&units=metric`,
      { mode: "cors" }
    );

    const data = await response.json();
    console.log(data);
    cityNameDisplay.textContent = data.name;
    description.textContent = data.weather[0].description;
    const tempC = data.main.temp;
    temp.textContent = Math.ceil(tempC);
    icon.src = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log(tempC);
  } catch (err) {
    alert("City not found");
  }
}

function getUserInput() {
  const input = document.querySelector("#search");
  userInput = input.value;
  console.log(userInput);
  getWeather();
}

const seacrhSubmitBtn = document.querySelector("#search-btn");
seacrhSubmitBtn.addEventListener("click", getUserInput);

// ==========================

const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const displayDate = document.querySelector(".date");

const date = new Date();
const today = date.getDay();
const month = date.getMonth();

displayDate.textContent = `${daylist[today]}, ${
  monthList[month]
} ${date.getDate()}`;

function displayTime() {
  const liveTime = new Date();
  let hour = liveTime.getHours();
  let mins = liveTime.getMinutes();
  let secs = liveTime.getSeconds();

  const time = document.querySelector("#clock");
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  time.textContent = `${hour}:${mins}:${secs}`;
}
getWeather();
setInterval(displayTime, 1000);
setInterval(getWeather, 1000 * 60);
