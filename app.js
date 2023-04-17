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
const cardsChosen = [];
const cardsChosenIds = [];

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
  //console.log("check for match!");
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[cardsChosenIds[0]].setAttribute("src", "images/white.png");
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  //this --allows us to interact with whatever is clicked
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
