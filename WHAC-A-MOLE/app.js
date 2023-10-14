const squares=document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score= document.querySelector('#score')
const restbtn = document.querySelector('.btn')
const Startbtn = document.querySelector('.Start')
let result = 0 
let hitPostition;
let currentTime = 60;
let timeId = null;
let countDownTimeId;
function randomSquare(){
    squares.forEach((square)=>{
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    hitPostition = randomSquare.id
}

squares.forEach((square)=>{
    square.addEventListener('mousedown' ,function(){
        if (square.id===hitPostition){
            result++
            score.textContent = result
            hitPostition = null
        }
    })
})
function moveMole(){
    
    timeId = setInterval(randomSquare,500)
}

Startbtn.addEventListener('click',()=>{
    moveMole()
    countDownTimeId = setInterval(countDown,1000)
    Startbtn.style.display = 'none'
})
// moveMole()

restbtn.addEventListener('click',()=>{
    result=0
    score.innerHTML=0
    moveMole()
    currentTime=60
    countDown()
    countDownTimeId = setInterval(countDown,1000)
})
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime==0){
        clearInterval(countDownTimeId)
        clearInterval(timeId)
        restbtn.style.display = 'block'
        alert('GAME OVER! Your final; score is '+result)
    }
}
