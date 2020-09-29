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
    canvas.style.border = "7px solid #81d6e6";
    canvas.style.backgroundColor = "#81d6e6";
    canvas.style.borderRadius = "5%";

    newSound();

    ctx = canvas.getContext('2d');
    intervalId = 0; 

    intervalId = setInterval(() => {
        requestAnimationFrame(startGame)
    }, 12)

})
//add the event listener that will call he game



//GameOver

const gameOverSplashScreen = () => {
    //need to target de cnavas
    canvas = document.querySelector('canvas');

    //need to stop the interval

    
}
