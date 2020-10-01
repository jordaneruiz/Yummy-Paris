# Yummy-Paris

## DESCRIPTION
Yummy Paris is a game where you are taken in a delicious adventure. Your character has to jump or stay fix to catch & eat the fresh croissants. But be careful! On your way, you will also encounter Donuts! The Donuts are bad for you and your health! Avoid them by either jumping or going down. 

The game ends whenever you eat a donuts. The score rise up everytime to eat a croissant. The more croissant you eat, the better your score will be.


## MVP (DOM - CANVAS)
• Character has to move from left to right to catch croissants and avoid Donuts
• Croissants & Donuts start arriving from the top of the screen
• Score is display on the top left corner. 1 croissant touched is +1 point to the score


## BACKLOG
• The better the player is, the more donuts appear on the screen? -> Increasing dificulty lvl depending on score. The higher is the score the faster the food arrives
• Player can Jump


## DATA STRUCTURE

# main.js
buildSplashScreen () 
buildGameScreen () 
buildGameOverScreen () {}

# game.js
drawCanvas () {}

addEventListener( 'mouseup' )
addEventListener('mousedown')

drawCharacter(){}
drawCroissant() {}
drawDonuts

characterMove(){}

startGame () {}
clearCanvas () {}
updateCanvas () {}

checkCollisions(){}
collisionsCleaner(){}

GameOver () {}

gameOver(){}
gameTime(){}

# character.js ??
# food.js ??

## Task
- 1 - Build the skelleton
  - build the DOM
  - build SplashScreen
  - build GameScreen
  - built YouWonScreen
  - built GameOverScreen / Retry

- 2 - Create the assets
  - Game screen basics: start game, draw the background
  - Create player characters: (create a class?)
  - Draw player on Game screen
  - Create food elements to catch: croissants
  - Draw croissants
  - Create food elements to avoid: donuts
  - Draw donuts
  - Create music elements

- 3  - Build the Game
   - Build player movement
   - Build collisions
 
 - 4 - Put everything together
   - Incorporate collisions on the stage
   - Game over function
   - You WOn function
   

- 5 - Extra Features 
    - Sounds when eat
    - backgroud sound
    - try

## Links

[Trello link](https://trello.com/b/htlPz7VD/ironhack-m1-project)
[Game Link](https://jordaneruiz.github.io/Yummy-Paris/)
[Slides Link](https://docs.google.com/presentation/d/1Zr2GJdkyC8jf7MV9LIRIWzsMyaRluGNa32lsKUzO6QQ/edit?usp=sharing)