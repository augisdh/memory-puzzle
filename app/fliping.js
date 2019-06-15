let cardFlipped = false;
let freezeBoard = false;
let firstCard, secondCard;

export default function flipCard() {
  if (freezeBoard) return; // If two cards flipped, exit function...
  if (this === firstCard) return; // If first card is same as next selected card, exit function...

  this.classList.add('flipped');

  if (!cardFlipped) { // If no card is flipped
    cardFlipped = true;
    firstCard = this; // Set first card element
    return; // exit function...
  }

  secondCard = this; // Set second card element if (freezeBoard === false, cardFlipped === true, firstCard !== this)
  checkForMatch();
}

function checkForMatch () {
  const isMatch = firstCard.innerText === secondCard.innerText;
  isMatch ? freezeCards() : unFlipCards();
}

function freezeCards () {
  firstCard.removeEventListener('click', flipCard); // Removes cardEvent from cards which are same
  secondCard.removeEventListener('click', flipCard);
  resetCards();

  setTimeout(() => {
    alert(correctFlip()); // After 500ms alerts random quote or WIN
  }, 500);
}

function unFlipCards() {
  freezeBoard = true;

  setTimeout(() => { // Set timeout is necessary to see second fliped card
    firstCard.classList.remove('flipped'); // Removes class from cards, flipes them back
    secondCard.classList.remove('flipped');
    resetCards();
  }, 1500);
}

function resetCards() {
  // Resets global variables
  [cardFlipped, freezeBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function correctFlip() {
  const successfulFlips = document.querySelectorAll('.flipped').length;
  return successfulFlips === 26 ? 'CONGRATULATIONS YOU WON!' : generateRandomQuote();
}

function generateRandomQuote() {
  const quotes = [
    'correctly fliped card!',
    'nice one!',
    'you have good recall!',
    'excellent!',
    'very good!',
    'good job',
    'keep it up!',
    'superb',
    'magnificent'
  ];

  const randomNumber = Math.floor(Math.random() * (quotes.length - 0) + 0);
  return quotes[randomNumber].toUpperCase();
}
