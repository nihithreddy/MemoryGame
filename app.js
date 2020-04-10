document.addEventListener('DOMContentLoaded',() => {
//Create all the cards for the game
const cards = [
{
  name:'fries',
  img:'images/fries.png'
},
{
  name:'fries',
  img:'images/fries.png'
},
{
  name:'cheeseburger',
  img:'images/cheeseburger.png'
},
{
  name:'cheeseburger',
  img:'images/cheeseburger.png'
},
{
  name:'hotdog',
  img:'images/hotdog.png'
},
{
  name:'hotdog',
  img:'images/hotdog.png'
},
{
  name:'icecream',
  img:'images/icecream.png'
},
{
  name:'icecream',
  img:'images/icecream.png'
},
{
  name:'milkshake',
  img:'images/milkshake.png'
},
{
  name:'milkshake',
  img:'images/milkshake.png'
},
{
  name:'pizza',
  img:'images/pizza.png'
},
{
  name:'pizza',
  img:'images/pizza.png'
}];
//For Randomly positiong the cards => sort the cards by using sort function and random Function
cards.sort(() => 0.5-Math.random());
var choosenCards = [];
var choosenCardIds = [];
const cardsWon = [];
const displayResult = document.querySelector('#result');
//Now Create a grid
const grid = document.querySelector('.grid');
//Create the board for the Game
function createBoard(){
for(var i =0;i<cards.length;i++){
  var card = document.createElement('img');
  card.setAttribute('src','images/blank.png');
  card.setAttribute('card-id',i);
  //Add an addEventListener
  card.addEventListener('click',flipCard);
  grid.appendChild(card);
}
};
//This function checks for matches
function findMatch(){
  var selectedCards = document.querySelectorAll('img');
  console.log(selectedCards);
  console.log(choosenCards.length);
   const firstCardId = choosenCardIds[0];
   const secondCardId = choosenCardIds[1];
   if(choosenCards[0] == choosenCards[1]){
     alert('A Match has been found!');
     selectedCards[firstCardId].setAttribute('src','images/white.png');
     selectedCards[secondCardId].setAttribute('src','images/white.png');
     cardsWon.push(choosenCards);
   }
   else{
     selectedCards[firstCardId].setAttribute('src','images/blank.png');
     selectedCards[secondCardId].setAttribute('src','images/blank.png');
     alert('Sorry,Try Again!');
   }
   //Now clear the Two arrays
   choosenCards = [];
   choosenCardIds = [];
   displayResult.textContent = "Score = " +cardsWon.length;
   if(cardsWon.length == cards.length/2){
     displayResult.textContent = 'Congratulations! You found all the cards';
   }
};
//Function for flipping a card
function flipCard(){
  const cardId = this.getAttribute('card-id');
  choosenCards.push(cards[cardId].name);
  choosenCardIds.push(cardId);
  this.setAttribute('src',cards[cardId].img);
  if(choosenCards.length == 2){
    setTimeout(findMatch,500);
  }
};
//Now Finally Create the Board by Calling the CreateBoard function
createBoard();
});
