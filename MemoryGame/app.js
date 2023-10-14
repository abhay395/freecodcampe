const cardArray = [
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'chessburger',
        img:'images/cheeseburger.png'
    }, {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    }
    , {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'chessburger',
        img:'images/cheeseburger.png'
    }, {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    }
    , {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    }
]

cardArray.sort(()=>0.5-Math.random())// it's use for take random object 

const gridDisplay = document.querySelector('#grid')
const rsultDisplay = document.querySelector('#result')
let cardChoice = []
let cardChoisenIds = []
let cardwon = []
// console.log(gridDisplay)

function createBord (){
    for (let i = 0; i<cardArray.length; i++){
      const card  = document.createElement('img')
      card.setAttribute('src','images/blank.png')
      card.setAttribute('data-id',i)
      card.addEventListener('click',flipCard)
      gridDisplay.appendChild(card)
    }
    
}
createBord()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneid = cardChoisenIds[0]
    const optionTowid = cardChoisenIds[1]
    
    if(cardChoice[0]==cardChoice[1]){
        alert('you found a match') 
        cards[optionOneid].setAttribute('src','images/white.png')
        cards[optionTowid].setAttribute('src','images/white.png')
        cards[optionOneid].removeEventListener('click',flipCard)
        cards[optionTowid].removeEventListener('click',flipCard)
        cardwon.push(cardChoice)
    }else{
        cards[optionOneid].setAttribute('src','images/blank.png')
        cards[optionTowid].setAttribute('src','images/blank.png')
        alert('sorry try again')
    }
    rsultDisplay.textContent = cardwon.length
    cardChoisenIds= []
    cardChoice= []
     if (cardwon.length == (cardArray.length)/2){
        rsultDisplay.innerHTML = 'Congratulation You found them all'
     }
}

function flipCard(){
   let cardId  =  this.getAttribute('data-id')
   cardChoice.push(cardArray[cardId].name)
   
   cardChoisenIds.push(cardId)
   this.setAttribute('src',cardArray[cardId].img)
  
   if(cardChoice.length===2){
    setTimeout(checkMatch,500)
   }
}