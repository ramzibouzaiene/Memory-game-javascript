const cardArray = [
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const result = document.querySelector("#result");
let cardsChosen = [];
let cardsChossenIDs = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const option_1_Id = cardsChossenIDs[0];
  const option_2_Id = cardsChossenIDs[1];
  //console.log('check if match');

  if (option_1_Id == option_2_Id) {
    cards[option_1_Id].setAttribute("src", "images/blank.png");
    cards[option_2_Id].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image :(");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You Found a match :D");
    cards[option_1_Id].setAttribute("src", "images/white.png");
    cards[option_2_Id].setAttribute("src", "images/white.png");
    cards[option_1_Id].removeEventListener("click", flipCard);
    cards[option_2_Id].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[option_1_Id].setAttribute("src", "images/blank.png");
    cards[option_2_Id].setAttribute("src", "images/blank.png");
    alert("Try Again");
  }
  result.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChossenIDs = [];

  if (cardsWon.length == cardArray.length / 2) {
    result.textContent = "Congrats you find them all";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChossenIDs.push(cardId);
  //console.log('clicked', cardId)
  //console.log(cardsChosen)
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 100);
  }
}
