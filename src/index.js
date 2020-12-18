import './styles.css';
// // //================================ON CLASS TIMER================================//
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.idInterval = null;

    this.init();
  }

  init() {
    const currentDate = new Date();
    const deltaTime = this.targetDate - currentDate;
    if (deltaTime <= 0) {
      this.finish();
      return;
    }
    const timeUpdate = this.getTimeComponents(deltaTime);
    this.updateTimer(timeUpdate);
    this.start();
  }
  start() {
    this.idInterval = setInterval(() => {
      const currentDate = new Date();
      const deltaTime = this.targetDate - currentDate;
      if (deltaTime <= 0) {
        this.finish();
        return;
      }
      const timeUpdate = this.getTimeComponents(deltaTime);
      this.updateTimer(timeUpdate);
    }, 1000);
  }

  updateTimer({ days, hours, mins, secs }) {
    const timerRef = document.querySelector(this.selector);
    const daysRef = timerRef.querySelector('span[data-value="days"]');
    const hoursRef = timerRef.querySelector('span[data-value="hours"]');
    const minsRef = timerRef.querySelector('span[data-value="mins"]');
    const secsRef = timerRef.querySelector('span[data-value="secs"]');

    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
  }

  finish() {
    clearInterval(this.idInterval);
    const timeUpdate = this.getTimeComponents(0);
    this.updateTimer(timeUpdate);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}
//============================= Let's Go! ===========//

const timerNY22 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});

// //================================ON FUNCTION TIMER f================================//

const refs = {
  daysf: document.querySelector('span[data-value="daysf"]'),
  hoursf: document.querySelector('span[data-value="hoursf"]'),
  minsf: document.querySelector('span[data-value="minsf"]'),
  secsf: document.querySelector('span[data-value="secsf"]'),
};
const targetDatef = new Date('Jan 01, 2021');
let idIntervalf = null;

timerStart();

function timerStart() {
  const currentDate = new Date();
  // const currentDate = new Date('Jan 01, 2021'); //для проверки,если таймер запущен точно в окончание времени
  // const currentDate = new Date('Jan 01, 2025'); //для проверки,если таймер запущен после окончания времени
  const deltaTime = targetDatef - currentDate;
  if (deltaTime <= 0) {
    finishedTimer();
    return;
  }
  const timeUpdate = getTimeComponents(deltaTime);
  updateTimer(timeUpdate);
  idIntervalf = setInterval(() => {
    const currentDate = new Date();
    // const currentDate = new Date('Jan 01, 2021'); //для проверки ("имитация за секунду до окончания")
    const deltaTime = targetDatef - currentDate;
    if (deltaTime <= 0) {
      finishedTimer();
      return;
    }
    const timeUpdate = getTimeComponents(deltaTime);
    updateTimer(timeUpdate);
  }, 1000);
}

function finishedTimer() {
  clearInterval(idIntervalf);
  const timeUpdate = getTimeComponents(0);
  updateTimer(timeUpdate);
}

function updateTimer({ daysf, hoursf, minsf, secsf }) {
  refs.daysf.textContent = daysf;
  refs.hoursf.textContent = hoursf;
  refs.minsf.textContent = minsf;
  refs.secsf.textContent = secsf;
}

function getTimeComponents(time) {
  const daysf = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hoursf = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const minsf = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secsf = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { daysf, hoursf, minsf, secsf };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
