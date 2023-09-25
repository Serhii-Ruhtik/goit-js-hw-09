const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyСolor: document.querySelector('body'),
};

const { startBtn, stopBtn, bodyСolor } = refs;
let intervalId = null;
let isActive = false;


refs.startBtn.addEventListener('click', сolorChage);
refs.stopBtn.addEventListener('click', stopColorChage);




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function сolorChage() {
  if (!isActive) {
intervalId = setInterval(() => {
    let currenntColor = getRandomHexColor();

    bodyСolor.style.backgroundColor = currenntColor
}, 1000);

startBtn.setAttribute('disabled', 'true');
stopBtn.removeAttribute('disabled');

isActive = true;

  }
}

function stopColorChage() {
  if (isActive) {
    clearInterval(intervalId);

    isActive = false;
  }

  stopBtn.setAttribute('disabled', 'true');
  startBtn.removeAttribute('disabled');
}
