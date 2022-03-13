import './style.css'
console.clear()

const playerOneRock = document.querySelector('.player1 i.rock')
const playerOnePaper = document.querySelector('.player1 i.paper')
const playerOneScissors = document.querySelector('.player1 i.scissors')

const playerTwoRock = document.querySelector('.player2 i.rock')
const playerTwoPaper = document.querySelector('.player2 i.paper')
const playerTwoScissors = document.querySelector('.player2 i.scissors')

function handleClickOnPlayerOneRock() {
  console.log('Rock')
}
playerOneRock?.addEventListener('click', handleClickOnPlayerOneRock)

function handleClickOnPlayerTwoPaper() {
  console.log('Paper')
}
playerTwoPaper?.addEventListener('click', handleClickOnPlayerTwoPaper)

console.log(playerOneRock)
console.log(playerOnePaper)
console.log(playerOneScissors)
console.log(playerTwoRock)
console.log(playerTwoPaper)
console.log(playerTwoScissors)
