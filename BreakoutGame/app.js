const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector('#score')
const blockWidht = 100;
const blockHeight = 20;
const borderWidth = 560;
const borderHieght = 300;
const ballDiameter = 20;
let score = 0
let xDirection = 2 
let yDirection = 2
let timerid
const usrStart = [230, 10];
let currentPostion = usrStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

// CRATE bLOCK
class Blcok {
  constructor(xAsis, yAxis) {
    this.bottomLeft = [xAsis, yAxis];
    this.bottomRight = [xAsis + blockWidht, yAxis];
    this.topLeft = [xAsis, yAxis + blockHeight];
    this.topRight = [xAsis + blockWidht, yAxis + blockHeight];
  }
}
// all my blocks
const blocks = [
  new Blcok(10, 270),
  new Blcok(120, 270),
  new Blcok(230, 270),
  new Blcok(340, 270),
  new Blcok(450, 270),
  new Blcok(10, 240),
  new Blcok(120, 240),
  new Blcok(230, 240),
  new Blcok(340, 240),
  new Blcok(450, 240),
  new Blcok(10, 210),
  new Blcok(120, 210),
  new Blcok(230, 210),
  new Blcok(340, 210),
  new Blcok(450, 210),

  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
  //   new Blcok(10, 270),
];
// draw all my block
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    grid.appendChild(block);
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
  }
}
addBlocks();

// add user
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);

// draw the user
function drawUser() {
  user.style.left = currentPostion[0] + "px";
  user.style.bottom = currentPostion[1] + "px";
}
drawUser();
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

// move user
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      // Handle Arrow Left key press
      if (currentPostion[0] > 0) currentPostion[0] -= 10;
      drawUser();
      break;
    case "ArrowRight":
      // Handle Arrow Right key press
      if (currentPostion[0] < borderWidth - blockWidht) currentPostion[0] += 10;
      drawUser();
      break;
  }
}
document.addEventListener("keydown", moveUser);
// add ball

const ball = document.createElement("div");
ball.classList.add("ball");
drawBall()
grid.appendChild(ball);

// move ball 
function moveBall(){
  ballCurrentPosition[0]+=xDirection
  ballCurrentPosition[1]+=yDirection
  drawBall()
  checkForCollision()
}
timerid  =  setInterval(moveBall,30)

// check for collisions
function checkForCollision(){
  // check for block collisson
  for (let i=0;i<blocks.length ;i++){
    if(
      (ballCurrentPosition[0]>blocks[i].bottomLeft[0] && ballCurrentPosition[0]<blocks[i].bottomRight[0])&& ((ballCurrentPosition[1]+ballDiameter)>blocks[i].bottomLeft[1] && ballCurrentPosition[1]<blocks[i].topLeft[1])
    ){
      const allBlocks = document.querySelectorAll('.block')
      allBlocks[i].classList.remove('block')
      blocks.splice(i,1)
      changeDirection() 
      score++
      scoreDisplay.innerHTML =score

      // check for win 
      if(blocks.length===0){
        scoreDisplay.innerHTML = 'You win '
        document.removeEventListener('keydown',moveUser)
      }
    }
  }




  //chekc for wall collison
  if(ballCurrentPosition[0]>=(borderWidth-ballDiameter)|| ballCurrentPosition[1]>=(borderHieght-ballDiameter) ||
  ballCurrentPosition[0]<=0
  ){
    changeDirection()
  }

  // check for user collisions
  if(
    (ballCurrentPosition[0]>currentPostion[0] && ballCurrentPosition[0]<currentPostion[0]+blockWidht ) && (ballCurrentPosition[1]> currentPostion[1] && ballCurrentPosition[1]<currentPostion[1]+blockHeight)
  ){
    changeDirection()
  }
  // check for game over
  if(ballCurrentPosition[1]<=0){
    clearInterval(timerid)
    scoreDisplay.innerHTML = 'You lose'
    document.removeEventListener('keydown',moveUser)
  }
}
function changeDirection(){
  if(xDirection===2 && yDirection===2) {
    yDirection = -2
    return
  }
  if(xDirection === 2 && yDirection === -2){
    xDirection = -2
    return
  }
  if(xDirection === -2 && yDirection === -2){
    yDirection = 2
    return
  }
  if(xDirection === -2 && yDirection === 2){
    xDirection = 2 
    return
  }

}