const cityNameDisplay = document.getElementById("city");
const description = document.getElementById("desc");
const icon = document.getElementById("icon");
const temp = document.getElementById("currTemp");

async function getWeather() {
  const response = await fetch(
    "http://api.weatherunlocked.com/api/current/35.44,139.63?app_id=e67b84ce&app_key=ea45e3e9a46b7ea2b6ef65a8cb15cb88",
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  // cityNameDisplay.textContent = data.name;
  description.textContent = data.wx_desc;
  temp.textContent = data.temp_c;
  icon.src = `http://www.weatherunlocked.com/Images/icons/1/${data.wx_icon}`;

}

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
  if (mins.length < 2) mins = "0" + mins;
    
  time.textContent = `${hour}:${mins}:${secs}`;
}
getWeather();
setInterval(displayTime, 1000);
setInterval(getWeather, 1000*60);
