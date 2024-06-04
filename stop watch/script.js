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
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").textContent =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
  
  // Update current time
  let now = new Date();
  let currentTime = now.toLocaleTimeString();
  document.getElementById("currentTime").textContent = "Current Time: " + currentTime;
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startStop").textContent = "Start";
}

// Initial display update
updateDisplay();
