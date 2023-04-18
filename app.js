const cardArray = [
  {
    name: "gyoza",
    img: "images/gyoza.jpg",
  },
  {
    name: "frenchtoast",
    img: "images/frenchtoast.jpg",
  },
  {
    name: "bagelsandwich",
    img: "images/bagelsandwich.jpg",
  },
  {
    name: "cookies",
    img: "images/cookies.jpg",
  },
  {
    name: "pasta",
    img: "images/pasta.jpg",
  },
  {
    name: "sushi",
    img: "images/sushi.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "cupcakes",
    img: "images/cupcakes.jpg",
  },
  {
    name: "gyoza",
    img: "images/gyoza.jpg",
  },
  {
    name: "frenchtoast",
    img: "images/frenchtoast.jpg",
  },
  {
    name: "bagelsandwich",
    img: "images/bagelsandwich.jpg",
  },
  {
    name: "cookies",
    img: "images/cookies.jpg",
  },
  {
    name: "pasta",
    img: "images/pasta.jpg",
  },
  {
    name: "sushi",
    img: "images/sushi.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "cupcakes",
    img: "images/cupcakes.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());
//console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/background.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/background.jpg");
    cards[optionTwoId].setAttribute("src", "images/background.jpg");
    alert("Sorry! Try again!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congrats! You matched all the pairs!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  //this --allows us to interact with whatever is clicked
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 100);
  }
}
