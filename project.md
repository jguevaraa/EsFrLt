Escape de latinoamerica

Description

A game that you need to dodge enemies using up left right. the goal is to reach certain kilometers where you go to the next level.

MVP (DOM - CANVAS)
CANVAS, This is a game where the player can move betwen squares.


Dificults tasks

jump movement
Score
remains km
spraint
dificult selecto


Data structure


main.js
removeSplashScreen()
createGameScreen()
MapupdateSCreen()
removeGameScreen()
createGameOverScreen()
removeGameOverScreen()
endGameScreen()

game.js
checkCollisions()
startLoop()
gameOver()  
updateGameStats()
clearcanvas()

enemmy.js
draw()
updatePosition()

points.js
draw()
updatePosition()
checkCollisions()

player.js
setDirection(direction)
updatePosition()
handleScreenCollision()
draw()
didCollide(enemy)
removeTime()

field && background.js
mvnLoop()
daynighttime() *lineargradier

sfx.js

States y States Transitions
splashcreen()
mapScreen()
gameScreen()
goalScrreen()
GameoverSCreen(

)

Task list

Main - buildDom
Main - buildSplashScreen
Main - addEventListener
Main - buildGameScreen
Main - buildGameOverScreen
Game - buildCanvas
Game - clearCanvas
Game - updateCanvas
Game - drawCanvas
Game - setGameOver
Game - collision
Game - addEventListener
movingSquare - create
movingSquare - goDown
staticSquare - store
staticSquare - remove if full line
Game - checkOverFlow
movingSquare - setDirection
movingSquare - Rush
movingSquare - SelectRandomSize
Links
Trello
Link url

