const scorePlayer = document.querySelector('.score-player')
const scoreComputer = document.querySelector('.score-computer')
const Player = document.querySelector('.player')
const Comp = document.querySelector('.computer')
const finalResults = document.querySelector('.results')
const btnPlayerLength = document.querySelectorAll('.btn-player').length

var computerChoice, results
var finalScore = [0, 0]


function player() {
    for (i = 0; i <= btnPlayerLength; i++) {
        document.querySelectorAll('.btn-player')[i].addEventListener('click', function () {
            var playerChoice = this.innerHTML

            var randomNumber = Math.random()

            if (randomNumber <= 0.34) {
                computerChoice = 'rock'
            } else if (randomNumber <= 0.64) {
                computerChoice = 'paper'
            } else {
                computerChoice = 'scissors'
            }

            if (playerChoice === computerChoice) {
                results = 'Draw'
            } else if (playerChoice === 'paper' && computerChoice === 'rock') {
                results = 'Player Win'
            } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
                results = 'Player Win'
            } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
                results = 'Player Win'
            } else {
                results = 'Computer Win'
            }

            if (results === 'Player Win') {
                finalScore[0]++
            } else if (results === 'Computer Win') {
                finalScore[1]++
            } else {
                finalScore[0, 1]
            }

            scorePlayer.textContent = 'Player : ' + finalScore[0]
            scoreComputer.textContent = 'Computer : ' + finalScore[1]
            Player.innerHTML = '<strong>Player</strong> : ' + playerChoice
            Comp.innerHTML = '<strong>Computer</strong> : ' + computerChoice
            finalResults.innerHTML = '<strong>Results : </strong>' + results
        })
    }
}

player()