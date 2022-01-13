const playerItems = document.querySelectorAll('.player-items .item')
const computerItems = document.querySelectorAll('.computer-items .item');
const playerBox = document.querySelector('.player-items');
const computerBox = document.querySelector('.computer-items');

let roundChoise = [];

function chooseItem(event) {
  if (!event.target.classList.contains('item')) return;
  event.target.classList.add('active')
  roundChoise.push(event.target.dataset.item)
}

function chooseComputer() {
  let randomNumber = Math.ceil(Math.random() * 3 - 1);
  computerItems[randomNumber].classList.add('active');
  roundChoise.push(computerItems[randomNumber].dataset.item);
}

function showRoundResult() {
  const resultLine = document.querySelector('#result');
  let message = '';

  if (roundChoise[0] === 'rock') {
    message = (roundChoise[1] === 'paper') ? `${roundChoise[1]} beats ${roundChoise[0]}, Computer Win` :
      `${roundChoise[0]} beats ${roundChoise[1]}, Player Won`
  }
  if (roundChoise[0] === 'paper') {
    message = (roundChoise[1] === 'scissors') ? `${roundChoise[1]} beats ${roundChoise[0]}, Computer Win` :
      `${roundChoise[0]} beats ${roundChoise[1]}, Player Won`
  }
  if (roundChoise[0] === 'scissors') {
    message = (roundChoise[1] === 'rock') ? `${roundChoise[1]} beats ${roundChoise[0]}, Computer Win` :
      `${roundChoise[0]} beats ${roundChoise[1]}, Player Won`
  }
  if (roundChoise[0] == roundChoise[1]) {
    message = `${roundChoise[0]} = ${roundChoise[1]}, draw`
  }

  resultLine.textContent = message;
  if (addPoints(message) == 5) return 5;
}

function addPoints(winner) {
  const playerCounter = playerBox.querySelector('.counter');
  const computerCounter = computerBox.querySelector('.counter')
  let playerText = playerCounter.textContent;
  let compText = computerCounter.textContent;

  if (winner.includes('Player')) {
    playerCounter.textContent = parseInt(playerText) + 1;
    if (playerCounter.textContent == 5) {
      document.querySelector('#result').textContent = `End of Game. Human Defeated Machine`;
      return 5;
    }
  }
  if (winner.includes('Computer')) {
    computerCounter.textContent = parseInt(compText) + 1;
    if (computerCounter.textContent == 5) {
      document.querySelector('#result').textContent = `End of Game. Human lost to Machine`;
      return 5;
    }
  }
}

function reset() {


  let activeItems = document.querySelectorAll('.active')
  const resultLine = document.querySelector('#result');
  activeItems.forEach(elem => elem.classList.remove('active'))
  resultLine.textContent = ''
  roundChoise = []
}

function game() {
  let finish = false;
  setTimeout(() => {
    chooseComputer();
    setTimeout(() => {
      if (showRoundResult() == 5) finish = true;
      setTimeout(() => {
        if (!finish) {
          reset()
        } else {
          playerBox.removeEventListener('click', chooseItem);
          body.removeEventListener('click', letsGo)
        }

      }, 2000)

    }, 1500);

  }, 1500)
}

let letsGo = (e) => {
  if (!e.target.closest('.player-items')) return;
  game();
}

const body = document.querySelector('body')
playerBox.addEventListener('click', chooseItem);
body.addEventListener('click', letsGo)