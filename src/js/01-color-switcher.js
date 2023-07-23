const refs = {
  start: document.querySelector('[data-start'),
  stop: document.querySelector('[data-stop'),
};

const INTERVAL_DURATION = 1_000;
let timerlId = null;
refs.stop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function playStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  
  timId = setInterval(() => { bodyCol.style.bagroundColor = getRandomHexColor() }, 1000)
}
  function playStop() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timId);
  }

refs.start.addEventListener('click', onBtnClickStart);
refs.stop.addEventListener('click', onBtnClickStop);



