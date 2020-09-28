//target the DOM ELEM
let body = document.querySelector("body")
let splashscreen = document.querySelector(".splashscreen")
let button = document.querySelector(".btn-start")
//create  the canvas 

let canvasContainer = document.createElement("div")
canvasContainer.innerHTML = `<canvas id="myCanvas" width="600" height="698"></canvas>`

button.addEventListener('click', () => {
    //when button is clicked it removes the splash screen & add the canvas

    splashscreen.parentNode.removeChild(splashscreen) // or body.romoveChild(splashscreen)
    body.appendChild(canvasContainer)

    canvas = document.querySelector('canvas');
    canvas.style.border = "1px solid black";

    ctx = canvas.getContext('2d');
    intervalId = 0; 

    //Images
    // background = new Image();
    // background.src = 'Images/ParisBG3.jpg';

    // playerImg = new Image();
    // playerImg.src = 'Images/FR-SMALL-GIRL.png';

    // donutsImg = new Image();
    // donutsImg.src = 'Images/donuts.png';

    // croissantImg = new Image();
    // croissantImg.src = 'Images/croissant.png';

    //sound
    // myMusic = new Audio();
    // myMusic.src = "French-Musette.wav";
    
    yummySound = new Audio();
    yummySound.src = "yummy.mp3";

    intervalId = setInterval(() => {
            requestAnimationFrame(startGame)
    }, 8)

})
//add the event listener that will call he game


