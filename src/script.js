var clockElement = document.querySelector(".black-inside"),
  moon = document.querySelector(".moon"),
  sun = document.querySelector(".sun"),
  fastClock = document.querySelector(".fast-simulation"),
  hour,
  hourFast = 0,
  real,
  minute,
  classesMoon = [
    "up-00",
    "up-01",
    "up-02",
    "up-03",
    "up-04",
    "up-19",
    "up-20",
    "up-21",
    "up-22",
    "up-23",
    "up-24"
  ],
  classesSun = [
    "up-05",
    "up-06",
    "up-07",
    "up-08",
    "up-09",
    "up-10",
    "up-11",
    "up-12",
    "up-13",
    "up-14",
    "up-15",
    "up-16",
    "up-17",
    "up-18"
  ];

//////////////////////////////////////
////////fast simulation button////////
//////////////////////////////////////
fastClock.onclick = function () {
  clearInterval(real);
  var i = 0;
  var fastScoop = setInterval(function () {
    i < 10 ? (hourFast = "0" + i) : (hourFast = i);
    clockElement.innerHTML = hourFast + "<span>:</span>" + "00";
    setBackround(hourFast);
    fastClock.setAttribute("disabled", true);
    i++;
    if (i == 25) {
      clearInterval(fastScoop);
      realClock();
      fastClock.removeAttribute("disabled", true);
    }
  }, 300);
};

//start clock
document.onload = realClock();

//////////////////////////////////////
////////////////functions/////////////
//////////////////////////////////////
//real clock
function realClock() {
  real = setInterval(function () {
    clock();
    clockElement.innerHTML = hour + "<span>:</span>" + minute;
    setBackround(hour);
  }, 1000);
}

//get real clock number
function clock() {
  (now = new Date()), (hour = now.getHours()), (minute = now.getMinutes());
  hour < 10 ? (hour = "0" + hour) : "";
  minute < 10 ? (minute = "0" + minute) : "";
}

//set background and shapes
function setBackround(x) {
  //change background
  //moon
  if (x >= 0 && x <= 4) {
    document.body.classList.add("moon-background");
    document.body.classList.remove("sun-background");
    moon.classList.remove(...classesMoon);
    moon.classList.add("up-" + x);
  }
  //sun
  else if (x >= 5 && x <= 18) {
    document.body.classList.add("sun-background");
    document.body.classList.remove("moon-background");
    sun.classList.remove(...classesSun);
    sun.classList.add("up-" + x);
    // sun
  }
  //moon
  else if (x >= 19 && x <= 24) {
    document.body.classList.remove("sun-background");
    document.body.classList.add("moon-background");
    moon.classList.remove(...classesMoon);
    moon.classList.add("up-" + x);
  }
}
