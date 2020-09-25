let canvas = document.querySelector('canvas');
canvas.style.border = "1px solid black";

let ctx = canvas.getContext('2d');
let intervalId = 0; 

//Images
let background = new Image();
background.src = 'ParisBG.jpg';

let people = new Image();
people.src = 'FR-SMALL-GIRL.png';

let score = 0;
let peopleX = 20;
let peopleY = 170;
let peopleIncrement = 1;


document.addEventListener('mousedown', () => {
    peopleIncrement = -1
})

document.addEventListener('mouseup', () => {
    peopleIncrement = 1
    if (peopleY > canvas.height-10){
        peopleIncrement = 0
    }
})



const startGame = () => {
    ctx.drawImage(background, 0, 0 )
    ctx.drawImage(people, peopleX, peopleY )


    peopleY = peopleIncrement
};

intervalId = setInterval(() => {
    requestAnimationFrame(startGame)
}, 1)