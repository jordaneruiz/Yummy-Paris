//Canva creation
let canvas = document.querySelector("canvas");
let intervalId = 0;
let ctx;

//Images
let background = new Image();
background.src = "Images/ParisBG3.jpg";

let playerImg = new Image();
playerImg.src = "Images/FR-SMALL-GIRL.png";

let donutsImg = new Image();
donutsImg.src = "Images/donuts.png";

let croissantImg = new Image();
croissantImg.src = "Images/croissant.png";

let gameOverImg = new Image();
gameOverImg.src = "Images/stupidfrench3.jpg";

//Audio
let myMusic = new Audio();
myMusic.src = "Sounds/French-Musette.wav";

let yummySound = new Audio();
yummySound.src = "Sounds/yummy.mp3";

let ohlalaSound = new Audio();
ohlalaSound.src = "Sounds/ohlala.mp3";

let championSound = new Audio();
championSound.src = "Sounds/champion.mp3";

//Variables
let score = 0;
let playerX = 120;
let playerY = 550;
let playerIncrement = -6;
let playerMovement = 20;

let palyerWidth = 70;
let playerHeight = 125;

let isRightArrow = false;
let isLefttArrow = false;

let donuts = [{ x: 700, y: 150 }];
let donutsX = donuts.x; // x position
let donutsY = donuts.y; // y position

let croissantsX = 150; // x position
let croissantsY = 150; // y position
let totalcroissants = 10;
let croissants = [];

let donutsXincrement = 5;
let donutsYincrement = 2;
let donutsYincrementMore = 4;

let collidedCroissant = [];
let winningScore = 11;

//-------- Move the girl to R & L --------//
//-------- --------------------- --------//
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    if (playerX + playerMovement < canvas.width - playerMovement - 25) {
      isRightArrow = true;
      playerX = playerX + playerMovement;
    }
  } else if (event.key === "ArrowLeft") {
    if (playerX - playerMovement >= 0) {
      isLefttArrow = true;
      playerX = playerX - playerMovement;
    }
  }
});

document.addEventListener("keyup", function (event) {
  isRightArrow = false;
  isLefttArrow = false;
});

// Sounds Functions
const newSound = () => {
  myMusic.volume = "0.05";
  myMusic.play();
  console.log("sound starts");
};

const playYummySound = () => {
  yummySound.volume = "0.9";
  yummySound.play();
};

const playOhlalaSound = () => {
  ohlalaSound.volume = "0.9";
  ohlalaSound.play();
};

const playVictorySound = () => {
  championSound.volume = "0.07";
  championSound.play();
};

//-------- Start Game Funtion --------//
//-------- ----------------- --------//
const startGame = () => {
  ctx.drawImage(background, 0, 0);
  ctx.drawImage(playerImg, playerX, playerY);
  ctx.font = "22px Verdana";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 10, canvas.height - 645);

  //Draw the donust & check collision by calling the proper function
  for (let i = 0; i < donuts.length; i++) {
    ctx.drawImage(donutsImg, donuts[i].x, donuts[i].y);
    collisionDonuts(i);
  }

  //Draw the croissants
  for (let i = 0; i < croissants.length; i++) {
    if (croissants[i] != null) {
      ctx.drawImage(croissantImg, croissants[i].x, croissants[i].y);
      collisionCroissants(i);
    }
  }
  //call all the functions
  addDonuts();
  moveDonuts();
  addCroissants();
  moveCroissants();
};

//-------- Add & Move Donuts --------//
//-------- ---------------- --------//
const addDonuts = () => {
  if (score < 8) {
    let randomPossibility = Math.floor(Math.random() * 190);
    //randomPlace = place on x axis
    let randomPlace = Math.floor(Math.random() * (canvas.width - 30)); //minus NUMBER to stop the food from going out of the canvas

    if (randomPossibility === 1) {
      var donut = {
        x: randomPlace,
        y: 10,
      };
      donuts.push(donut);
    }
  } else {
    //If score is greater than 8, increase the number of donuts
    let randomPossibility = Math.floor(Math.random() * 60);
    let randomPlace = Math.floor(Math.random() * (canvas.width - 30)); //minus NUMBER to stop the food from going out of the canvas
    if (randomPossibility === 1) {
      var donut = {
        x: randomPlace,
        y: 10,
      };
      donuts.push(donut);
    }
  }
};

// const resetDonuts = (donut) => {
//     donut.x = Math.random() * (canvas.width - donutsImg.width);
//     donut.y = 15 + Math.floor(Math.random() * 30) + 1;
//     donut.speed = 0.9 + Math.random() * 0.5;
// }

const moveDonuts = () => {
  //Increqse the speed
  donuts.forEach((donut) => {
    if (score <= 4) {
      donut.y++;
    } else if (score > 4 && score <= 8) {
      donut.y += donutsYincrement;
    } else {
      donut.y += donutsYincrementMore;
    }
  });
};

//-------- Add & Move Croissants --------//
//-------- -------------------- --------//
const addCroissants = () => {
  let randomPossibility = Math.floor(Math.random() * 180); //
  let randomPlace = Math.floor(Math.random() * (canvas.width - 30));
  if (randomPossibility === 1) {
    var croissant = {
      x: randomPlace,
      y: 10,
    };
    croissants.push(croissant);
  }
};

// const resetCroissants = (croissant) => {
//     croissant.x = Math.random() * (canvas.width - croissantImg.width);
//     croissant.y = 15 + Math.floor(Math.random() * 30) + 1;
//     croissant.speed = 0.9 + Math.random() * 0.5;
// }

const moveCroissants = () => {
  croissants.forEach((croissant) => {
    croissant && croissant.y++;
    //same as: if (croissant != null) { croissant.y++ }
  });
};

//-------- Donuts Collision --------//
//-------- --------------- --------//

const collisionDonuts = (i) => {
  if (
    playerX < donuts[i].x - 15 + donutsImg.width &&
    playerX + donutsImg.width > donuts[i].x - 15 &&
    playerY < donuts[i].y - 10 + donutsImg.height &&
    playerY + donutsImg.height > donuts[i].y - 10
  ) {
    clearInterval(intervalId);
    gameOver();
  }
};

//-------- Croissants Collision --------//
//-------- ------------------- --------//

const collisionCroissants = (i) => {
  //let removeCroissants = [];

  if (
    playerX < croissants[i].x + croissantImg.width &&
    playerX + playerImg.width >= croissants[i].x &&
    playerY < croissants[i].y + croissantImg.height &&
    playerY + playerImg.height > croissants[i].y
  ) {
    if (!collidedCroissant.includes(i)) {
      //   console.log("croissant collision")
      //   console.log('inside ', i)
      playYummySound();
      score += 1;
      collidedCroissant.push(i);
      console.log(collidedCroissant);
      //croissants.splice(i, 1);

      if (score >= winningScore) {
        youWon();
        // playYummySound();
        // clearInterval(intervalId);
        // location.href = 'youWinScreen.html';
      }
      croissants[i] = null;

      //croissants.splice(i, 1);
      console.log(croissants);
    } else {
    }
  }
};

//-------- GameOver Function --------//

const gameOver = () => {
  playOhlalaSound();
  clearInterval(intervalId);

  myMusic.currentTime = 0;
  myMusic.pause();
  //console.log("in game over")
  let canvas = document.querySelector("canvas");
  canvas.className = "hidden";

  //to create a new iframe without DOM Manip
  // let iframe = document.createElement('iframe')
  // iframe.src = 'gameOverScreen.html'
  // iframe.className = "iframe-gameover"

  let gameOverScreen = document.createElement("div");
  gameOverScreen.className = "gameoverscreen";
  gameOverScreen.innerHTML = `
        <div class="splash-text">
        <h1 class="youlost">Sorry! You Lost!</h1>
        <h2>Donuts are not good for you!</h2>
        <iframe src="https://giphy.com/embed/H2u9qk75kqsF1GpCsA" class="giphy-embed" allowFullScreen></iframe>
        <div class="buttons btn-start" >
        <button class="btn-hover color-1" onclick="location.href='index.html'">PLAY AGAIN</button>
        </div>
        </div>
    `;
  let body = document.querySelector("body"); // get the body tag of your main html file
  canvas.parentNode.removeChild(canvas); //remove the canvas from the body
  // body.appendChild(iframe) // append the frame we just created to the body
  body.appendChild(gameOverScreen);
};

//-------- YouWon Function --------//

const youWon = () => {
  playYummySound();
  playVictorySound();
  clearInterval(intervalId);

  myMusic.currentTime = 0;
  myMusic.pause();
  //console.log("in game over")
  let canvas = document.querySelector("canvas");
  canvas.className = "hidden";

  let winningScreen = document.createElement("div");
  winningScreen.className = "winscreen";
  winningScreen.innerHTML = `
       
        <div class="splash-text">
        <h1 class="youwon">Bravo! You Won!</h1>
        <h2>You ate all the croissants!</h2>
        <iframe src="https://giphy.com/embed/5ntPfSOAmcy1jQ01g7" class="giphy-embed" allowFullScreen></iframe>
        <div class="buttons btn-start" >
        <button class="btn-hover color-1" onclick="location.href='index.html'">PLAY AGAIN</button>
        </div>
        </div>
    `;
  let body = document.querySelector("body"); // get the body tag of your main html file
  canvas.parentNode.removeChild(canvas); //remove the canvas from the body
  // body.appendChild(iframe) // append the frame we just created to the body
  body.appendChild(winningScreen);
};

// END
