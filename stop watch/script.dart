let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (!timer) {
    timer = setInterval(run, 1000);
    document.getElementById("startStop").textContent = "Stop";
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById("startStop").textContent = "Start";
  }
}

function run() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById("display").textContent =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
}
