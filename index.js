// Variables
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#timeLeft");
const score = document.querySelector("#score");

//Starting score
let result = 0;
//Setting start time
let currentTime = 60;
//starting off with no movement for the mole
let timerId = null;
let hitPosition


// Functions
function randomSquare(){
//Removing the mole from all squares to start on a new slate
  squares.forEach(square =>{
    square.classList.remove("mole");
  });

//Adding the mole randomly to the grid
  let randomSquare = squares[Math.floor(Math.random()*9)];
  randomSquare.classList.add("mole");

//Storing the randomyly selected square for the mole
  hitPosition = randomSquare.id;
}

//Adding point for hitting the mole
  //Add EventListener
 squares.forEach(square => {square.addEventListener("mousedown", () => {
  if(square.id == hitPosition){
    //Incrementing score
    result++;
    //Display results
    score.innerHTML = result;
    //Reset position
    hitPosition = null;
  }
})
})

function moveMole(){
//setting moving interval in a random pattern on squares
  timerId = setInterval(randomSquare, 1000);
}

//Add to button to start the game
moveMole();

//Creating the count down
function countDown(){
  //decreasing time by sec
  currentTime--;
  //displaying remaining time on the screen
  timeLeft.innerHTML = currentTime

  if(currentTime == 0){
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("Game Over, Your final score is:" + ""+ result );
  }
}

let countDownTimerId = setInterval(countDown, 1000);
