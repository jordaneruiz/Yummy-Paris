//Canva creation
let canvas = document.querySelector('canvas');
let intervalId = 0; 
let ctx;
    

//Images
let background = new Image();
background.src = 'Images/ParisBG3.jpg';

// let bakgroundWin = new Image();
// bakgroundWin = "https://tenor.com/view/trump-macron-macron-trump-emmanuel-macron-donald-trump-gif-12954394"

let playerImg = new Image();
playerImg.src = 'Images/FR-SMALL-GIRL.png';

let donutsImg = new Image();
donutsImg.src = 'Images/donuts.png';

let croissantImg = new Image();
croissantImg.src = 'Images/croissant.png';

// let myMusic = new Audio();
// myMusic.src = "French-Musette.wav";

let yummySound = new Audio();
yummySound.src = "yummy.mp3";

let gameOverImg = new Image();
gameOverImg.src = 'Images/stupidfrench3.jpg';

//Variables
let score = 0;
let playerX = 120;
let playerY = 550;
let playerIncrement = 1;
let playerMovement = 40; 

let palyerWidth = 70;
let playerHeight = 125;

let isRightArrow = false;
let isLefttArrow = false;


// let totalDonuts = 10;
//let donuts = [] ;
let donuts = [ { x: 700, y: 150 } ];
let donutsX = donuts.x; // x position
let donutsY = donuts.y; // y position

let croissantsX = 150; // x position
let croissantsY = 150; // y position
let totalcroissants = 10;
let croissants = [] ;

let donutsXincrement = 5;
let donutsYincrement = 5;

let collidedCroissant = [];
let winningScore = 5; 






document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp'){
        playerY = playerY - playerMovement + 60;
        // playerY = playerY - 120; 
        // playerY = playerY + 120;
    } 
})


//-------- Move the girl to R & L --------//
//-------- --------------------- --------//
document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowRight'){
        if (playerX + playerMovement < canvas.width - playerMovement) {
            //isRightArrow = true;
            playerX = playerX + playerMovement;
        }
    } 
    else if (event.key === 'ArrowLeft'){
        if (playerX - playerMovement >= 0) {
            //isLefttArrow = true;
            playerX = playerX - playerMovement;
        }        
    } 
})

document.addEventListener('keyup', function(event){
    isRightArrow = false;
    isLefttArrow = false;
    //use a loop
})



const newSound = () => {
    myMusic.volume = "0.05";
    myMusic.play();
  }

const playYummySound = () => {
    yummySound.volume = "0.9";
    yummySound.play();
}


//-------- Start Game Funtion --------//
//-------- ----------------- --------//
const startGame = () => {
    
    ctx.drawImage(background, 0, 0 )
    ctx.drawImage(playerImg, playerX, playerY )
    ctx.font = '22px Verdana'
    ctx.fillStyle = "white"
    ctx.fillText('Score: ' + score, 10,canvas.height-645 )

    //draw donust and croissants
    for (let i = 0; i < donuts.length; i++) {
        ctx.drawImage(donutsImg, donuts[i].x, donuts[i].y);
        collisionDonuts(i);
    }
    
    
    for (let i = 0; i < croissants.length; i++) {
        ctx.drawImage(croissantImg, croissants[i].x, croissants[i].y);
        collisionCroissants(i);
    }


    //call all the functions
    addDonuts();
    moveDonuts();
    addCroissants();
    movecroissants();
    newSound();

    //playerY += playerIncrement
    //player = new Player(120, canvas.height, 60, 90);
    
    // resetDonuts(donut);
};

//-------- Add & Move Donuts --------//
//-------- ---------------- --------//

const addDonuts = () => {
    let randomPossibility = Math.floor(Math.random() * 200) 
    //randomPlace = place on x axis
    let randomPlace = Math.floor(Math.random() * canvas.width)
    //console.log("randomPlace:" + randomPlace)
    if(randomPossibility === 1){
        var donut = {
            x: randomPlace,
            y: 10
        }
            donuts.push(donut);
    } 
}

 
const moveDonuts = () => {
    donuts.forEach((donut) => {
        donut.y++  
    })
}

//-------- Add & Move Croissants --------//
//-------- -------------------- --------//
const addCroissants = () => {
    let randomPossibility = Math.floor(Math.random() * 400) //botellas que caeran --> 1 de 20 posibilidades de que se cree un nuevo vino en un lugar aleatorio
    let randomPlace = Math.floor(Math.random() * canvas.width)
    if(randomPossibility === 1){
        var croissant = {
            x: randomPlace,
            y: 10
        }
        croissants.push(croissant);
    } 
}

const movecroissants = () => {
    croissants.forEach((croissant) => {
        croissant.y++  //si quiero que se mueva mas rapido le pongo que sea +10 o un numero
    })
}


//-------- Donuts Collision --------//
//-------- --------------- --------//

const collisionDonuts = (i) => {
    //Did they collide together?
    //Check if a donut collides with the player
    
    if (playerX < (donuts[i].x -25) + donutsImg.width  &&
        playerX + donutsImg.width> (donuts[i].x -25) &&
        playerY < (donuts[i].y -10) + donutsImg.height &&
        playerY + donutsImg.height > (donuts[i].y -10)) 
        {
         // collision detected!
        clearInterval(intervalId);
        gameOver();
        //alert('GAME OVER');
        //location.reload(); 
     } 
} 



//-------- Croissants Collision --------//
//-------- ------------------- --------//

const collisionCroissants = (i) => {
    //let removeCroissants = [];

     if (playerX < croissants[i].x + croissantImg.width &&
        playerX + playerImg.width > croissants[i].x &&
        playerY < croissants[i].y + croissantImg.height &&
        playerY + playerImg.height > croissants[i].y) 
        {
          if (!collidedCroissant.includes(i)) {
            playYummySound();
            score += 1;
            collidedCroissant.push(i)
            
            //removeCroissants.push(croissants[i]);
            //removeCroissants.push(croissants[i])
            if (score >= winningScore) {
                clearInterval(intervalId);
                // alert('YOU WON');
                location.href = 'youWinScreen.html';
            }
            croissants.splice(i, 1);
            //console.log(croissants);
          } 
          //collidedCroissant = removeCroissants; 
          //collidedCroissant.push(croissants[i]);
          //collidedCroissant = croissants[i]; 
    }
}


//-------- GameOver Function --------//

const gameOver = () => {

    document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    
    //newSound.stop()
    canvas.remove("croissantImg")
    canvas.remove("donutsImg")
    canvas.remove("background")

    //canvas.style.backgroundColor = "white";
    let gameOverImg = new Image();
    gameOverImg.src = "Images/stupidfrench3.jpg";
    //gameOverImg.onload = function(){
        ctx.drawImage(gameOverImg, 0, 0);
        
        // game.load.image('start', 'button.png');
};



//-------- Win Function --------//

// const youWon = () => {
//     let canvas = document.querySelector('canvas');
//     let ctx = canvas.getContext('2d')
//     let bakgroundWin = new Image();

//     bakgroundWin.onload = function(){
//     ctx.drawImage(bakgroundWin, 0, 0, 760, 760);
//     mySound.stop();
//     // game.load.image('start', 'button.png');
// };
// bakgroundWin = "https://tenor.com/view/trump-macron-macron-trump-emmanuel-macron-donald-trump-gif-12954394"

// winSound.play();
// wines=[];
// score=0;
// dead=0;

// }


// const collisionCroissants = () => {
//     let croissantsToRemove =  []; 

//     croissants.forEach((croissant) => {
//         if (playerX < croissants[i].x + croissantImg.width &&
//             playerX + playerImg.width > croissants[i].x &&
//             playerY < croissants[i].y + croissantImg.height &&
//             playerY + playerImg.height > croissants[i].y);
//     })
//     //score++;
//     //croissantsToRemove.push(croissant);
// }



// intervalId = setInterval(() => {
//     requestAnimationFrame(startGame)
// }, 10)






//Jorge Event listener
// document.addEventListener('keydown', (event) => {
//     if (event.key === "38") {
//         playerIncrement = +20
//     } 
//     if (event.key === "40"){
//         playerIncrement = -20
//     }
// })

// document.addEventListener('keyup', () => {
//     playerIncrement = 1
//     if (playerY > canvas.height-10){
//         playerIncrement = 1
//     }
// })


//my first event listener
// document.addEventListener('mousedown', (event) => {
//     playerIncrement = -1
// })

// document.addEventListener('mouseup', () => {
//     playerIncrement = 0.5
// })