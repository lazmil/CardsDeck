const deckLine = document.getElementById('deck');
const wholeContainer = document.getElementById('wholeContainer')
const shuffleBtn = document.getElementById('shuffleBtn')
const dealBtn = document.getElementById('dealBtn')

class Card {
  // Constructor for the Card class
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  // To get the textual representation of the card
  getCardText() {
    return this.suit + ' ' + this.value;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck(); // Create a new deck of cards when a Deck object is embodied
  }

  // Create a deck of cards
  createDeck() {
    const suits = ['♡', '♠', '♣', '♦'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

    // Generate cards for each suit and value combination
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const card = new Card(suits[i], values[j]); // Create a new Card object with the current suit and value
        this.cards.push(card);
      }
    }
  }

  // Shuffle the deck
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const j = Math.floor(Math.random() * this.cards.length);
      // Swap the positions of cards at random indexes (i and j) by destructuring operation to shuffle the deck
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

class CardGame {
  constructor() {
    this.deck = new Deck(); // Create a new Deck object
    this.container = document.createElement('div');
    this.container.className = 'cards-container';
    this.single = 0;

    dealBtn.addEventListener('click', () => cardGame.dealCard());
    shuffleBtn.addEventListener('click', () => cardGame.shuffleDeck());
    wholeContainer.appendChild(this.container);
  }

  // Deal a card to the container
  dealCard() {
    if (this.single < 52) {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      cardDiv.innerHTML = this.deck.cards[this.single].suit + ' ' + this.deck.cards[this.single].value;
      this.container.appendChild(cardDiv);
      this.single++; // Step up the index to deal the next card
    } else {
      alert('No more cards to deal');
    }
  }

  // Shuffle the deck and reset the index
  shuffleDeck() {
    this.deck.shuffle();
    this.single = 0; // Reset the index to deal cards from the beginning
    this.container.innerHTML = ''; // Clear the container
    deckLine.innerText = 'Deck shuffled!'; // Update the deck status message
  }
}

const cardGame = new CardGame();






