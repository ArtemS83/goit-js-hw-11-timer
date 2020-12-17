import './styles.css';
// Плагин это класс CountdownTimer, экземпляр которого
// создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jun 01, 2022'),
// });
const refs = {
  //   timerFace: document.querySelector('.title'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};
const targetDate = new Date('Jan 01, 2022');
// console.log(targetDate);

let idInterval = null;
let time;
let currentDate;
currentDate = new Date();
// currentDate = new Date('Jan 01, 2022'); //для проверки
// currentDate = new Date('Jan 01, 2025'); //для проверки
// console.log(currentDate);
time = targetDate - currentDate;
// console.log(time);

function timerStart() {
  if (time <= 0) {
    console.log('End now');
    finishedTimer();
    return;
  }
  //   timerChecker(time);
  updateTimer();

  idInterval = setInterval(() => {
    if (time <= 0) {
      console.log('End time');
      finishedTimer();
      return;
    }
    // timerChecker(time);
    currentDate = new Date();
    currentDate = new Date('Jan 01, 2022'); //для проверки

    time = targetDate - currentDate;
    // console.log(currentDate);
    // timerChecker(time);
    updateTimer();
  }, 1000);
}

timerStart();

// Для подсчета значений используй следующие готовые формулы,
// где time - разница между targetDate и текущей датой.

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimer() {
  //   currentDate = new Date();
  //   const currentDate = new Date('Jan 01, 2022'); //для проверки
  //   time = targetDate - currentDate;

  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}
function timerChecker(t) {
  if (t <= 0) {
    console.log('End now');
    finishedTimer();
    // return;
  }
}
function finishedTimer() {
  clearInterval(idInterval);
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.mins.textContent = '00';
  refs.secs.textContent = '00';
  console.log('finishedTimer');
}
