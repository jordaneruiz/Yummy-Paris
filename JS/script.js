//Canva creation
let canvas = document.querySelector('canvas');
let intervalId = 0; 
let ctx;
    

//Images
let background = new Image();
background.src = 'Images/ParisBG3.jpg';

let playerImg = new Image();
playerImg.src = 'Images/FR-SMALL-GIRL.png';

let donutsImg = new Image();
donutsImg.src = 'Images/donuts.png';

let croissantImg = new Image();
croissantImg.src = 'Images/croissant.png';

let myMusic = new Audio();
myMusic.src = "French-Musette.wav";

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

let winningScore = 15; 






document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp'){
        playerY = playerY - playerMovement + 60;
        // playerY = playerY - 120; 
        // playerY = playerY + 120;
    } 
})
//timeout somewhere here


//eventlisteners move the girl to R & L
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


//create audio function 
// function Sound(src) {
//     this.Sound = document.createElement("audio");
//     this.Sound.src = src;
//     this.Sound.setAttribute("preload", "auto", "controls", "none");
//     this.Sound.style.display = "none";
//     this.Sound.volume = 0.50;
//     document.body.appendChild(this.Sound);
//     this.play = function(){
//       this.Sound.play();
//     }
//     this.stop = function(){
//       this.Sound.pause();
//     }
//   }

function newSound() {
    // myMusic = new Audio("French-Musette.wav")
    myMusic.volume = "0.05";
    myMusic.play();
  }


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

//add donuts
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

//add croissants
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


// collision with donuts
const collisionDonuts = (i) => {
    //Did they collide together?
    //Check if a donut collides with the player
    
    if (playerX < donuts[i].x + donutsImg.width &&
        playerX + playerX.width > donuts[i].x &&
        playerY < donuts[i].y + donutsImg.height &&
        playerY + playerX.height > donuts[i].y) 
        {
         // collision detected!
        clearInterval(intervalId);
        alert('GAME OVER');
        location.reload(); 
     } 
} 

//---------------------//



const collisionCroissants = (i) => {
    //let removeCroissants = [];

     if (playerX < croissants[i].x + croissantImg.width &&
        playerX + playerImg.width > croissants[i].x &&
        playerY < croissants[i].y + croissantImg.height &&
        playerY + playerImg.height > croissants[i].y) 
        {
          if (croissants[i] !== collidedCroissant) {
            score += 1;
            //removeCroissants.push(croissants[i]);

            //removeCroissants.push(croissants[i])
            if (score >= winningScore) {
                clearInterval(intervalId);
                alert('YOU WON');
            }
            croissants.splice(i, 1);
          } 
          //collidedCroissant = removeCroissants; 
          //collidedCroissant.push(croissants[i]);
          collidedCroissant = croissants[i]; 
    }
}




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