class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.timer = undefined;  
    this.km = undefined;
    this.image = false;
    this.framesCounter = 0;
  }

  // Create `ctx`, a `player` and start the Canvas loop
  start() {
    // Save references to the score and lives elements
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .kmLeft");

    //canvas
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Tamaño canvas dedfault  CSS
    this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.player = new Player(this.canvas, 5);

 // Se puede hacer con setkeys otro metodo
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        this.player.setDirection("left")
      }
      else if (event.key === "ArrowRight") {
        this.player.setDirection("right");
    }
      else if (event.key === "ArrowDown"){
        this.player.setDirection("stop");
      }
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);


    

    //TIME LEFT
    this.timer = new Timer(100);
    this.timer.startCount();

    //KM LEFT

    this.km = new Timer(8000);
    this.km.kmCount();

    // // Add event listener for moving the player
    // onkeydown = onkeyup = (e) => {
    //   this.map[e.key] = e.type == "keydown";
    // };


    this.startLoop();
  }
  


  startLoop() {
    const loop = () => {
   
      //function cronometro
      this.framesCounter++
      this.updateTimer();
      this.updateKmter();
      
    
      if (this.enemies.length < 30) {  //logica de respawn enemigos
        if (Math.random() > 0.95) {
          const randomX = Math.floor((this.canvas.width - 20) * Math.random());
          const newEnemy = new Enemy(this.canvas, randomX,5);
          this.enemies.push(newEnemy);
        }
      }
  
      this.checkCollisions();


this.Overimage()
      
      this.player.updatePosition();

     
      this.player.handleScreenCollision();


     
      this.enemies = this.enemies.filter((enemy) => {
        enemy.updatePosition();
        return enemy.isInsideScreen();
      });
     
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.framesCounter);
      this.enemies.forEach((enemy) => {
        enemy.draw();
      });
            if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
       this.updateGamelives();
    };
    
    loop();
  }

  Overimage(){
    document.getElementById("overAnimation").style.visibility="hidden";
    if (this.player.lives === 0) {
    document.getElementById("overAnimation").style.visibility ="visible";
   }
  }
  
  checkCollisions() {
    this.enemies.forEach((enemy) => {
      if (this.player.didCollide(enemy)) {
        this.player.removeLife();
        console.log("lives", this.player.lives);
        enemy.x = 0 - enemy.size;

        if (this.player.lives === 0) {
        this.gameOver();
        }
      }
    });
  }



  Overm(){
    document.getElementById('overAnimation').style.display = 'block'
   }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.kmVar.textContent);
  }
  updateGamelives() { // kM resta
    // this.score += 1;
    this.livesElement.innerHTML = this.player.lives;
    // this.scoreElement.innerHTML = this.score;
  }

  updateTimer() { //Cronometer inverse
    
    this.timeVar = document.querySelector('.countdown');
    this.timeVar.textContent = this.timer.printTime();
    if (this.timer.currentTime < 10) {
      this.timeVar.style.color = 'red';
      this.timeVar.style.fontSize = "x-large";  // sfx
    } 
    if (this.timer.currentTime <= -1) {
      this.gameOver();
    }
  }

  updateKmter() { //km inverse
    
    this.kmVar = document.querySelector('.kmLeft');
    this.kmVar.textContent = this.km.printkm();
   if(this.kmVar.textContent <=0) {           
       this.gameOver();
     }
  }


  
}
