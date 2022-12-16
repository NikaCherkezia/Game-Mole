const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left")
const score = document.getElementById("score");

let result = 0;
let speed = 600;
let hitPosiotion;
let currentTime = 60;
let timeId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");
    

    hitPosiotion = randomSquare.id;
} 

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosiotion) {
            result++;
            score.textContent = result;
            hitPosiotion = null;
        }
    })
})

function moveMole() {
    timeId = setInterval(randomSquare, speed)
    
}

moveMole()

function countDown() {
    
    currentTime--;
    timeLeft.textContent = currentTime;
    
    if (currentTime === 0) {
        clearInterval(timeId);
        clearInterval(countDownTimerId);
        alert("Game is over, your score is " + result);

    }
    
}

let countDownTimerId = setInterval(countDown, 1000)