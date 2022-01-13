/*Player click the button

it turns .active

saving the result of clicking
then wait for a 0.5sec*/

const playerItems = document.querySelectorAll('.player-items .item')
const playerBox = document.querySelector('.player-items');
let roundChoise = [];

function lightButton(item) {
  item.classList.add('active')
}

function checkButtonsOnClick(item) {
  if (item.classList.contains('active')) item.classList.remove('active');
}

function chooseItem(event) {
  if (!event.target.classList.contains('item')) return;
  playerItems.forEach(checkButtonsOnClick);
  lightButton(event.target)
  roundChoise.push(event.target.dataset.item)
}

playerBox.addEventListener('click', chooseItem);