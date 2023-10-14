const computerChoiceDisplay =  document.getElementById('computer-choice')
const userChoiceDisplay =  document.getElementById('user-choice')
const resultDisplay =  document.getElementById('result')

const possibleChices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result
possibleChices.forEach(possibleChice=>possibleChice.addEventListener('click',(e)=>{
   userChoice  = e.target.id 
   console.log(userChoice)
   userChoiceDisplay.innerHTML = userChoice
   genretComputerChoice()
}))

function genretComputerChoice(){
    const randomNumber  = Math.floor(Math.random()*possibleChices.length)
    const Choces = ['rock','paper','scissors']
    computerChoice = Choces[randomNumber]
    computerChoiceDisplay.innerHTML = computerChoice
   getResult()
}
function getResult(){
    if(userChoice==='rock'){
        if(computerChoice==='rock'){
            result = 'tie'
        } else if (computerChoice === 'paper'){
            result = 'You lose'
        }else if (computerChoice === 'scissors'){
            result = 'You Win'
        }
    }else if (userChoice==='paper'){
        if(computerChoice==='rock'){
            result = 'You win '
        } else if (computerChoice === 'paper'){
            result = 'tie'
        }else if (computerChoice === 'scissors'){
            result = 'You lose'
        }
    }else if (userChoice==='scissors'){
        if(computerChoice==='rock'){
            result = 'You lose'
        } else if (computerChoice === 'paper'){
            result = 'You win'
        }else if (computerChoice === 'scissors'){
            result = 'tie'
        }
    }
    resultDisplay.innerHTML = result
}