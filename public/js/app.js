let countdown;
let timerDisplay = document.getElementById('display');
let startButton = document.getElementById('startButton');
let timerTime = 0;

function setTimer(minutes) {
  timerTime = minutes * 60;
  updateDisplay();
}

function startTimer() {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + timerTime * 1000;
  displayTimeLeft(timerTime);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}

function updateDisplay() {
  const minutes = Math.floor(timerTime / 60);
  const seconds = timerTime % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

