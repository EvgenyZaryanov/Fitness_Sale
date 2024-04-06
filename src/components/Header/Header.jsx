import './Header.css';

let timeLeft = 60;
let previousSeconds = -1;

const countdown = () => {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let formattedTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds}`;

  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = formattedTime;

  if (timeLeft <= 30) {
    timerElement.style.color = 'red';
    if (seconds !== previousSeconds) {
      timerElement.classList.add('blink');
    }
    if (timeLeft === 0) {
      timerElement.classList.remove('blink');
    }
  }

  if (timeLeft === 0) {
    clearInterval(timerInterval);
  } else {
    timeLeft--;
    previousSeconds = seconds;
  }
};

const timerInterval = setInterval(countdown, 1000);

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__title">Скидка действует:</h1>

        <div className="timer-container">
          <div id="timer">01:00</div>
          <label className="header__subtitle minutes">минут</label>
          <label className="header__subtitle seconds">секунд</label>
        </div>
      </div>
    </div>
  );
}

export default Header;
