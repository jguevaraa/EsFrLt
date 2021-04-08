class Player {
  constructor(canvas, lives, playerImgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    //Pasamos el valor de las vidas del jugador para así augmentar el dinamismo de nuestro juego
    this.lives = lives;
    //
    // this.size = 20;
    this.width = 90;
    this.height = 151;
    // Posicionaremos a nuestro jugador a la mitad de la pantalla. Para eso debemos colocarlo en
    // medio del la altura del canvas menos el tamaño del propio jugador
    this.x = this.canvas.width / 2;
    this.y = 530;  //this.canvas.height / 2 - this.size / 2;
    //gestionaremos la dirección de nuestro jugador con los numeros 1, 0, -1 (multiplicamos speed por direction)
    this.direction = 0;
    //
    this.speed = 5;
    this.keys = [];
    this.move = false;

    this.image = new Image();
    this.image.src = "images/spriteplayer.png";
    this.frames = 12;
    this.framesIndex = 0;
    
  }

  setDirection(direction) {
    // +1 down -1 up /left - right)
    if (direction === "left") {
      this.direction = -1;
    }else if (direction === "right") {
      this.direction = 1;
    }
     else if (direction === "stop"){
       this.direction = 0;
     }
    
  }

// confirmeMove(){
//     document.body.addEventListener('keydown', (e) => {
//     keys[e.keyCode] = true;
//     player.moving = true;
//     console.log(keys)
// })
// document.body.addEventListener('keyup', (e)=> {
//     keys[e.keyCode] = false;
//     player.moving = false;
//     console.log(keys)
// })
// }

 
  // updatePosition() {
  //     if (key[37]) {
  //       this.x -= this.speed
  //     }
  //     if (key[37]) {
  //       this.x -= this.speed
  //     }
  //     if (key[38]) {
  //       this.y -= this.speed
  //     }
    
  // }



  updatePosition() {
    // esto actualiza la posición de nuestro jugador y la dirección  ********************************************************************
    this.x += this.direction * this.speed;
  }

  handleScreenCollision() {
    const screenLeft = 0;
    const screenRight = this.canvas.width;

    // const playerLeft = this.y;
    // const playerRight = this.y + this.height;

    if (this.x < screenLeft){ 
      this.direction = 0;
  }else if (this.x + 90 >= screenRight){
    this.direction = 0; 
   }   
  
  // if (this.y < 0) {
  //   this.y += this.size;        SALTO
  // }
};

  removeLife() {
    this.lives -= 1;
  }

  draw(framesCounter) {
    // this.ctx.fillStyle = "#66D3FA";
    // //fillRect(x, y, width, height)
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames), 
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.x,
      this.y,
      this.width,
      this.height,

    )
    this.animate(framesCounter)
  }

  animate(framesCounter){
    if(framesCounter % 12 === 0) {
      this.framesIndex++

      if(this.framesIndex > 10) this.framesIndex = 0;
    }
  }







  didCollide(enemy) {
    //seleccionamos los 4 laterales del jugador
    const playerLeft = this.x;
    const playerRight = this.x + this.width;
    const playerTop = this.y;
    const playerBottom = this.y + this.height;

    //seleccionamos los 4 laterales del enemigo
    const enemyLeft = enemy.x;
    const enemyRight = enemy.x + enemy.size;
    const enemyTop = enemy.y;
    const enemyBottom = enemy.y + enemy.size;

    //comprobamos si el    ha entrado dentro del jugador por cualquiera de los 4 lados
    const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
    const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;
    const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
    const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;

    //solo cuando 1 condición de verticalidad y 1 de horizontalidad se cumplen, podemos considerar que nuestros
    //cuadrados han colisionado
    if ((crossLeft || crossRight) && (crossTop || crossBottom)){
        return true;
    } else {
        return false
    }


  }
}
