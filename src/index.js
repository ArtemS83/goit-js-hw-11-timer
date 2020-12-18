import './styles.css';
// Плагин это класс CountdownTimer, экземпляр которого
// создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jun 01, 2022'),
// });
// const refs = {
//   //   timerFace: document.querySelector('.title'),
//   days: document.querySelector('span[data-value="days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
// };

// // //================================ON FUNCTION================================//
// const refs = {
//   days: document.querySelector('span[data-value="days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
// };
// const targetDate = new Date('Jan 01, 2022');
// // console.log(targetDate);

// let idInterval = null;
// let deltaTime;
// let currentDate;
// currentDate = new Date();
// // currentDate = new Date('Jan 01, 2022'); //для проверки
// // currentDate = new Date('Jan 01, 2025'); //для проверки
// // console.log(currentDate);
// deltaTime = targetDate - currentDate;
// // console.log(time);

// function timerStart() {
//   if (deltaTime <= 0) {
//     console.log('End now');
//     finishedTimer();
//     return;
//   }
//   //   timerChecker(time);
//   // const time = getTimeComponents(0);
//   const timeUpdate = getTimeComponents(deltaTime);
//   updateTimer(timeUpdate);
//   // updateTimer();

//   idInterval = setInterval(() => {
//     if (deltaTime <= 0) {
//       console.log('End time');
//       finishedTimer();
//       return;
//     }
//     // timerChecker(time);
//     currentDate = new Date();
//     currentDate = new Date('Jan 01, 2022'); //для проверки

//     deltaTime = targetDate - currentDate;
//     // console.log(currentDate);
//     // timerChecker(time);
//     const timeUpdate = getTimeComponents(deltaTime);
//     updateTimer(timeUpdate);
//     // getTimeComponents(time);
//     // updateTimer({ days, hours, mins, secs });
//     // updateTimer();
//   }, 1000);
// }

// timerStart();

// // Для подсчета значений используй следующие готовые формулы,
// // где time - разница между targetDate и текущей датой.

// /*
//  * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//  */
// function pad(value) {
//   return String(value).padStart(2, '0');
// }
// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { days, hours, mins, secs };
// }
// function updateTimer({ days, hours, mins, secs }) {
//   //   currentDate = new Date();
//   //   const currentDate = new Date('Jan 01, 2022'); //для проверки
//   //   time = targetDate - currentDate;

//   // const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   // const hours = pad(
//   //   Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   // );
//   // const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   // const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
// }
// // function timerChecker(t) {
// //   if (t <= 0) {
// //     console.log('End now');
// //     finishedTimer();
// //     // return;
// //   }
// // }
// function finishedTimer() {
//   clearInterval(idInterval);
//   const timeUpdate = getTimeComponents(0);
//   updateTimer(timeUpdate);
//   // updateTimer(0);
//   // refs.days.textContent = '00';
//   // refs.hours.textContent = '00';
//   // refs.mins.textContent = '00';
//   // refs.secs.textContent = '00';
//   console.log('finishedTimer');
// }

// //================================ON FUNCTION TIMER================================//
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};
const targetDate = new Date('Jan 01, 2022');
let idInterval = null;
timerStart();

function timerStart() {
  const currentDate = new Date();
  // const currentDate = new Date('Jan 01, 2022'); //для проверки,если таймер запущен точно в окончание времени
  // const currentDate = new Date('Jan 01, 2025'); //для проверки,если таймер запущен после окончания времени
  const deltaTime = targetDate - currentDate;
  if (deltaTime <= 0) {
    finishedTimer();
    return;
  }
  const timeUpdate = getTimeComponents(deltaTime);
  updateTimer(timeUpdate);
  idInterval = setInterval(() => {
    const currentDate = new Date();
    // const currentDate = new Date('Jan 01, 2022'); //для проверки ("имитация за секунду до окончания")
    const deltaTime = targetDate - currentDate;
    if (deltaTime <= 0) {
      finishedTimer();
      return;
    }
    const timeUpdate = getTimeComponents(deltaTime);
    updateTimer(timeUpdate);
  }, 1000);
}

function finishedTimer() {
  clearInterval(idInterval);
  const timeUpdate = getTimeComponents(0);
  updateTimer(timeUpdate);
}

function updateTimer({ days, hours, mins, secs }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
