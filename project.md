# **Escape de latinoamerica**

## Description

A game that you need to dodge enemies using up left right. the goal is to reach certain kilometers where you go to the next level.
#

### MVP (DOM - CANVAS)
CANVAS, This is a game where the player can move betwen squares.


### Backlog

jump movement
Score
remains km
spraint
dificult selector
#

## Data structure
#
```javascript
main.js

removeSplashScreen()
createGameScreen()
MapupdateSCreen()
removeGameScreen()
createGameOverScreen()
removeGameOverScreen()
endGameScreen()
PregameoverSCreen()

game.js

checkCollisions()
startLoop()
gameOver()  
updateGameStats()
clearcanvas()

enemmy.js

draw()
updatePosition()

pointsObjets.js

draw()
updatePosition()
checkCollisions()

player.js

setDirection()
updatePosition()
handleScreenCollision()
draw()
didCollide()
removeTime()

field && background.js

mvnLoop()
daynighttime() *lineargradier

sfx.js


```
#
## States y States Transitions

- splashcreen()
- mapScreen()
- gameScreen()
- goalScrreen()
- GameoverSCreen()
- PregameoverSCreen()
#
## Task list
#
* Main 
  * buildDom
  * buildSplashScreen
  * buildGameScreen
  * buildGameOverScreen
   * buildPregameoverSCreen
 * Game
   * buildCanvas
   * clearCanvas
   * updateCanvas
   * draw
   * collision
* Player
   * create
   * goDown
   * goUp-Left-Right

* pointsObjets

  * draw
   * updatePosiciton
   * colision
Points(HUD) -  Draw

* SFX 
  * add

# link
* [Trello](https://trello.com/b/mUNfcyeK/web-design-development)


# Git

# Slides