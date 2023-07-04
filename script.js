let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerDisplay = document.getElementById('timer-display');

function startTimer() {
    timer = setInterval(updateTimer, 10);
}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    timerDisplay.textContent = formatTime(minutes, seconds, milliseconds);
}

function formatTime(minutes, seconds, milliseconds) {
    return (
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds) +
        ':' +
        (milliseconds < 10 ? '0' + milliseconds : milliseconds)
    );
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = '00:00:00';
}

// Additional features using callbacks

function setTimer(userMinutes) {
    minutes = userMinutes;
    timerDisplay.textContent = formatTime(minutes, seconds, milliseconds);
}

function stopTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = '00:00:00';
}

function restartTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = '00:00:00';
    startTimer();
}
