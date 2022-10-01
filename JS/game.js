//target the DOM ELEM
let body = document.querySelector("body")
let splashscreen = document.querySelector(".splashscreen")
let button = document.querySelector(".btn-start")

//create  the canvas 
let canvasContainer = document.createElement("div")
canvasContainer.innerHTML = `<canvas id="myCanvas" class="border-gradient border-gradient-purple" width="600" height="698"></canvas>`

button.addEventListener('click', () => {
    //when button is clicked it removes the splash screen & add the canvas

    splashscreen.parentNode.removeChild(splashscreen) // or body.romoveChild(splashscreen)
    body.appendChild(canvasContainer)

    canvas = document.querySelector('canvas');

    canvas.style.border = "10px solid";
    canvas.style.borderImageSlice = "1";
    canvas.style.borderWidth = "5px";
    canvas.style.borderImageSource = "linear-gradient(to right, #FF0099, #FDF023, #00FFFF, #FDF023)";

    newSound();

    ctx = canvas.getContext('2d');
    intervalId = 0; 

    intervalId = setInterval(() => {
        requestAnimationFrame(startGame)
    }, 5)
    

})
//add the event listener that will call the game



//GameOver

const gameOverSplashScreen = () => {
    //need to target de canvas
    canvas = document.querySelector('canvas');

    //need to stop the interval


}
