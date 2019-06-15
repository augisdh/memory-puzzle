import { shuffle, openNav, closeNav } from './shared';
import flipCard from './fliping';

const cards = ['2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','9','10','10','J','J','Q','Q','K','K','A','A'];
const domContainer = document.querySelector('.container');
const domShuffleBtn = document.querySelector('.shuffle-btn');

domShuffleBtn.addEventListener('click', () => {
  startGame();
});

function generateDom(array) {
  array.forEach(card => {
    let html = `
      <div class="card">
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back">
            <p class="card-title">${card}</p>
          </div>
        </div>
      </div>
    `;

    domContainer.innerHTML += html;
  });
}

window.addEventListener('load', startGame);

function startGame() {
  clearBoard();
  generateDom(shuffle(cards));
  addEventCard();
}

function clearBoard() {
  while (domContainer.firstChild) {
    domContainer.removeChild(domContainer.firstChild);
  }
}

function addEventCard() {
  const domCards = document.querySelectorAll('.card-inner');
  domCards.forEach(card => {
    card.addEventListener('click', flipCard);
  });
}

// NAVBAR
const navBtn = document.querySelector('.btn');
const sidenav = document.querySelector('.sidenav');

navBtn.addEventListener('click', () => {
  if (Number(document.querySelector('.sidenav').offsetWidth) === 0) openNav(navBtn, sidenav);
  else closeNav(navBtn, sidenav);
})
