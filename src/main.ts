import './style.css'

// const computerChoiceDisplay = document.getElementById('cc')!
// const playerTwoChoiceDisplay = document.getElementById('p2c')!
// const playerOneChoiceDisplay = document.getElementById('p1c')!
// const possibleChoicesPlayerOne = document.querySelectorAll('.p1')
// const possibleChoicesPlayerTwo = document.querySelectorAll('.p2')
const playerOneRock = document.querySelector('.player1 i.rock')
const playerOnePaper = document.querySelector('.player1 i.paper')
const playerOneScissors = document.querySelector('.player1 i.scissors')

const playerTwoRock = document.querySelector('.player2 i.rock')
const playerTwoPaper = document.querySelector('.player2 i.paper')
const playerTwoScissors = document.querySelector('.player2 i.scissors')
const resultDisplay = document.getElementById('result')!

let userChoiceOne: string
let userChoiceTwo: string
// let computerChoice: string
let result: string

function PlayerOneChoice() {
  // const randomNumber =
  //   Math.floor(Math.random() * possibleChoicesPlayerOne.length) + 1
  if (playerOneRock) {
    userChoiceOne = 'rock'
  }
  if (playerOnePaper) {
    userChoiceOne = 'paper'
  }
  if (playerOneScissors) {
    userChoiceOne = 'scissor'
  }

  function PlayerTwoChoice() {
  // const randomNumber =
  //   Math.floor(Math.random() * possibleChoicesPlayerOne.length) + 1
  if (playerTwoRock) {
    userChoiceTwo = 'rock'
  }
  if (playerTwoPaper) {
    userChoiceTwo = 'paper'
  }
  if (playerTwoScissors) {
    userChoiceTwo = 'scissor'
  }
  // computerChoiceDisplay.innerHTML = computerChoice
}
// possibleChoicesPlayerOne.forEach((possibleChoice) =>
//   possibleChoice.addEventListener('click', (e) => {
//     userChoiceOne = e.target.id
//     playerOneChoiceDisplay.innerHTML = userChoiceOne
//     // generateComputerChoice()
//     getResult()
//   })
// )

// possibleChoicesPlayerTwo.forEach((possibleChoices) =>
//   possibleChoices.addEventListener('click', (e) => {
//     userChoiceOne = e.target.id
//     playerTwoChoiceDisplay.innerHTML = userChoiceTwo
//     // generateComputerChoice()
//     getResult()
//   })
// )
// function generateComputerChoice() {
//   const randomNumber =
//     Math.floor(Math.random() * possibleChoicesPlayerOne.length) + 1

//   if (randomNumber === 1) {
//     computerChoice = 'rock'
//   }
//   if (randomNumber === 2) {
//     computerChoice = 'scissors'
//   }
//   if (randomNumber === 3) {
//     computerChoice = 'paper'
//   }
//   computerChoiceDisplay.innerHTML = computerChoice
// }

function getResult() {
  if (userChoiceTwo === userChoiceOne) {
    result = 'its a draw'
  }
  if (userChoiceTwo === 'rock' && userChoiceOne === 'paper') {
    result = 'you win'
  }
  if (userChoiceTwo === 'rock' && userChoiceOne === 'scissors') {
    result = 'you lose'
  }
  if (userChoiceTwo === 'paper' && userChoiceOne === 'scissors') {
    result = 'you win'
  }
  if (userChoiceTwo === 'paper' && userChoiceOne === 'rock') {
    result = 'you lose'
  }
  if (userChoiceTwo === 'scissors' && userChoiceOne === 'rock') {
    result = 'you win'
  }
  if (userChoiceTwo === 'scissor' && userChoiceOne === 'paper') {
    result = 'you lose'
  }
  resultDisplay.innerHTML = result
}
// console.clear()

// const playerOneRock = document.querySelector('.player1 i.rock')
// const playerOnePaper = document.querySelector('.player1 i.paper')
// const playerOneScissors = document.querySelector('.player1 i.scissors')

// const playerTwoRock = document.querySelector('.player2 i.rock')
// const playerTwoPaper = document.querySelector('.player2 i.paper')
// const playerTwoScissors = document.querySelector('.player2 i.scissors')

// let p1 = ''
// let p2 = ''

// // test functions
// function handleClickOnPlayerOneRock() {
//   p1 = 'rock'

//   console.log('p1choice')
// }
// playerOneRock?.addEventListener('click', handleClickOnPlayerOneRock)

// function handleClickOnPlayerTwoPaper() {
//   p2 = 'paper'
//   console.log('p2choice')
// }

// playerTwoPaper?.addEventListener('click', handleClickOnPlayerTwoPaper)
// detectWinner
// function detectWinner(p1: string, p2: string): string {
//   if (
//     (p1 == 'rock' && p2 == 'scissors') ||
//     (p1 == 'scissors' && p2 == 'paper') ||
//     (p1 == 'paper' && p2 == 'rock')
//   )
//     return 'Player 1 won!'
//   else if (p1 === p2) return 'Draw!'
//   else return 'Player 2 won!'
// }

console.log(playerOneRock)
console.log(playerOnePaper)
console.log(playerOneScissors)
console.log(playerTwoRock)
console.log(playerTwoPaper)
console.log(playerTwoScissors)
