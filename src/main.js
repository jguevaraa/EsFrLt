let game;
let splashScreen;
let IntroScreen
let gameScreen;
let deadScreen;
let gameOverScreen;

// Creates DOM elements from a string representation
// buildDom
function buildDom(htmlString) {
  //tempDiv lo creamos para tener un elemento HTML (div) sobre el que transformar
  //nuestro string (htmlString) a formato HTML usando innerHTML
  //los strings que contengan el HTML deven tener UN SOLO ELEMENTO PADRE
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  //console.log(“tempDiv.children”, tempDiv.children)
  return tempDiv.children[0];
}

// -- splash screen
function createSplashScreen() {
  //para un correcto tabulado del string, tabular de la línea 2 hasta el final
  splashScreen = buildDom(`
      <main class="splashScreen1">
        <h1>Escape From Latino - America</h1>
       <img class="imageIntro" src="images/intro.gif" alt="imageIntro" />
        <button class="buttonstar">Start</button>
        <audio id="introduction" preload="auto" style="display: none" src="sounds/bacground.mp3"></audio>
      </main>
    `);
  //Una vez creado el elemento HTML con la función buildDom, cargamos ese HTML en la página principal
  document.body.appendChild(splashScreen);


    //ADD MUSIC
  let introductionSound= splashScreen.querySelector("#introduction");
  introductionSound.volume = 0.1;
  introductionSound.play();
  
  //seleccionamos el botón que hemos creado y le creamos un eventListener para después crear el jugo
  const startButton = splashScreen.querySelector("button");

  startButton.addEventListener("click", startGame);
}

function removeSplashScreen() {
  // remove() is the DOM method that removes the Node from the page
  splashScreen.remove();
  //console.log(splashScreen); //The value remains the same, but the code has been removed from the DOM.
}

// -- game screen
function createGameScreen() {
  //para un correcto tabulado del string, tabular de la línea 2 hasta el final
  gameScreen = buildDom(`
    <main class="game">
        <header >
            <div class="lives">
                <span class="label">Lives:</span>
                <span class="value"></span>
            </div>

            <div class="score">
                <span class="label">km Left:</span>
                <span class="kmLeft">0</span>
            </div>

            <div class="timer">
            <span class="label">Time:</span>
            <span class="countdown">0</span>
            </div>

        </header>

        <div class="canvas-container">
            <canvas  style="z-index:1"></canvas>
            <img id="overAnimation" style="z-index:2; position:absolute; visibility:hidden" src="/images/overAnimation.gif" alt="overAnimation" />
        </div>
        <audio controls loop id="intgamesound" preload="auto" style="display: none" src="sounds/intgamesound.mp3"></audio>
        
    </main>
    `);
 //ADD MUSIC
  let gameSound= gameScreen.querySelector("#intgamesound");
  gameSound.volume = 0.1;
  gameSound.play();  

  document.body.appendChild(gameScreen);

 
  return gameScreen; //this we will explain later


}


function removeGameScreen() {
  gameScreen.remove();
}

// -- game over screen
function createGameOverScreen(kmVar) {
  gameOverScreen = buildDom(`
  <main class="overScreen">
  
 
  <img class="gameOvergif" src="images/gameOvergif.gif" alt="gameOvergif" />
        <h1 class="overScreenTitle">Muy lento amigo</h1>
        <p>Your score: <span>${kmVar}</span> </p>
        <span class="label">TOP SCORES</span>
        <li>El chapo:  isNaN  </li>
        <li>Pablo escobar: +9999999999999999999999999 </li>
        
        <div>
        <button class="buttonover">Restart</button>
        <audio id="whySound" preload="auto" style="display: none" src="sounds/why.mp3"></audio>
        </div>
    </main>
    `);
    const button = gameOverScreen.querySelector("button");
    button.addEventListener("click", startGame)

    document.body.appendChild(gameOverScreen)

        //ADD MUSIC
  let whywhoSound= gameOverScreen.querySelector("#whySound");
  whywhoSound.volume = 0.1;
  whywhoSound.play();
}
function removeGameOverScreen() {
    gameOverScreen.remove()
}





function createDeadScreen() {
  //para un correcto tabulado del string, tabular de la línea 2 hasta el final
  deadScreen = buildDom(`
      <main class="deadScreen">
        
       <img class="overAnimation" src="/images/overAnimation.gif" alt="overAnimation" />
      
      </main>
    `);
  //Una vez creado el elemento HTML con la función buildDom, cargamos ese HTML en la página principal
  document.body.appendChild(deadScreen);


}


function removeDeadScreen() {
  deadScreen.remove();
}




// -- Setting the game state - start or game over
function startGame() {
  removeSplashScreen();
  if(gameOverScreen){
      removeGameOverScreen();
  }
  createGameScreen();

  game = new Game(gameScreen);
  //game.gameScreen = gameScreen;
  game.start();
}

// function deadGame(){
//   createDeadScreen();
// }

function endGame(kmVar) {
  
  removeGameScreen();
  createGameOverScreen(kmVar);
}

window.addEventListener("load", createSplashScreen);
