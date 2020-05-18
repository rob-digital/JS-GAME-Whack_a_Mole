const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let hitPosition;
let result = 0
let currentTime = timeLeft.textContent

function randomMolePosition() {

    square.forEach(el => {
        el.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    console.log(' :', randomPosition);
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

function moveMole() {
    // let moveMoleEverySecond = null
    let moveMoleEverySecond = setInterval(randomMolePosition, 1000)
}

moveMole()
square.forEach(el => {
    el.addEventListener('mouseup', () => {
        if (el.id === hitPosition) {
            result++
            score.textContent = result
        }
    })
})

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(time) 
        alert('GAME OVER!, Your Score is: ' + result)
    }
}

let time = setInterval(countDown, 1000)

randomMolePosition()