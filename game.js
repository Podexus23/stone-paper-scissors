const TURNS = 100;
const ITEMS = ['Rock', 'Paper', 'Scissors'];
let statistic = {};

function computerPlay() {
  let random = Math.ceil(Math.random() * 3 - 1);

  if (statistic[ITEMS[random]]) statistic[ITEMS[random]] += 1;
  else statistic[ITEMS[random]] = 1;

  return ITEMS[random]
}

function playerPlay() {
  let playerChoise = prompt('Make your choise');
  let choise;
  ITEMS.forEach(elem => {
    if (elem.toLowerCase() === playerChoise.toLowerCase()) choise = elem;
  })
  if (!choise) {
    console.log('Wrong data')
    return playerPlay();
  }
  return choise
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `${playerSelection} = ${computerSelection}, draw`
  }
  if (playerSelection === 'Rock') {
    return (computerSelection === 'Paper') ? `${computerSelection} beats ${playerSelection}, Computer Win` :
      `${playerSelection} beats ${computerSelection}, Player Win`
  }
  if (playerSelection === 'Paper') {
    return (computerSelection === 'Scissors') ? `${computerSelection} beats ${playerSelection}, Computer Win` :
      `${playerSelection} beats ${computerSelection}, Player Win`
  }
  if (playerSelection === 'Scissors') {
    return (computerSelection === 'Rock') ? `${computerSelection} beats ${playerSelection}, Computer Win` :
      `${playerSelection} beats ${computerSelection}, Player Win`
  }
}

function game(quantity) {
  let counter = 0;
  for (let i = 0; i < quantity; i++) {
    let roundResult = playRound(playerPlay(), computerPlay())
    console.log(roundResult)
    roundResult.includes('Player') ? counter += 1 :
      roundResult.includes('Computer') ? counter -= 1 : counter += 0;
    console.log(counter);
  }
  return (counter > 0) ? `According to ${quantity} rounds Player Won` :
    (counter === 0) ? `According to ${quantity} rounds it's draw` : `According to ${quantity} rounds Computer Won`
}

console.log(game(5))