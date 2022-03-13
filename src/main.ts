import './style.css'

const computerChoiceDisplay = document.getElementById('cc')
const userChoiceDisplay = document.getElementById('p1')!
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
  })
)

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
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

// console.log(playerOneRock)
// console.log(playerOnePaper)
// console.log(playerOneScissors)
// console.log(playerTwoRock)
// console.log(playerTwoPaper)
// console.log(playerTwoScissors)
