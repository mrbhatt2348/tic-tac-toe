let turn = 'X'
let isGameOver = false
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

// Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'
}

// Function to check a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('box-text')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach( e => {
        if ((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[2]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML !== '')) {
            document.querySelector('.turn').innerHTML = boxText[e[0]].innerHTML + ' won !'
            isGameOver = true
            gameover.play()
            document.querySelector('#image').style.width = "200px";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box-text')
    element.addEventListener('click', () => {
        if (boxText.innerHTML === '') {
            boxText.innerHTML = turn;
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if (! isGameOver) {
                document.querySelector('.turn').innerHTML = 'Turn for ' + turn
            }
        }
    })
})

// Reset function
document.querySelector('.button').addEventListener('click', () => {
    let boxText = document.querySelectorAll('.box-text')
    Array.from(boxText).forEach(element => {
        element.innerHTML = ''
    })
    turn = 'X'
    isGameOver = false
    document.querySelector('.turn').innerHTML =  'turn for ' + turn
    document.querySelector('#image').style.width = "0";
})


