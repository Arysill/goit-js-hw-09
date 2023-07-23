
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector ('[data-stop]');
const bodyCol = document.querySelector("body");
  let timId = null;
  
  stopBtn.disabled = true; 
  startBtn.addEventListener("click", playStart);
  stopBtn.addEventListener("click", playStop);

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