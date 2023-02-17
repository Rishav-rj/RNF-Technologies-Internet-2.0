// -----Hamburger_Menu----

const icon = document.querySelector(".nav__icon");
const menu = document.querySelector(".hamburger-view");

icon.addEventListener("click", showFullMenu);

function showFullMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// ----CountDown timer----

var countDownDate = new Date("Feb 23, 2023 10:46:19").getTime();

var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
    document.getElementById("hours").innerHTML = "TIME";
    document.getElementById("minutes").innerHTML = "UP!!";
  }
}, 1000);
