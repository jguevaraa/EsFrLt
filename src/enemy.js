class Enemy {
  constructor(canvas, positionX, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    // this.width = 90
    // this.height = 140,
    this.size = 20
    this.width= 20
    this.height= 20
    this.x= positionX;
     this.y = this.canvas.height/3;
    // this.y = 100
    this.speed = speed;
    this.image = new Image();
    this.image.src = "images/carPolice.gif";
    this.frames = 6;
    this.framesIndex = 0;
  }

  draw() {
    // this.ctx.fillStyle = "#FF6F27";
    // this.ctx.fillRect(this.x, this.y, this.size, this.size);
    this.image,
    this.image.height,
    this.x,
    this.y,
    this.width
    this.height
  }

  updatePosition() {
      // Restamos la dirección para traer a los enemigos des de fuera del canvas hacia adentro

if (this.x >= 354){
  // this.x >= 354 && this.x <= this.canvas.width
   this.y+= this.speed
   this.x+= this.speed / 5

}else if(this.x <= 300){
    this.y+= this.speed
    this.x-= this.speed / 5
  }
  else {
    this.y+= this.speed
  
    
  }
if (this.y >= 350){
  this.y+= this.speed/100      // pulir
 
}
}



  // updatePosition() {
  //   this.y += this.speed
  //   (this.x >= 352 && this.x <=this.canvas.width)
  //   ? this.x+= this.speed 
  //   : this.x-= this.speed


//   updatePositionRight() {
//     // Restamos la dirección para traer a los enemigos des de fuera del canvas hacia adentro
//     this.y+= this.speed 
//     this.x-= this.speed 
//     this.y= (this.y) + this.speed 
// this.x= (this.x -4) + this.speed
// }

  isInsideScreen() {
    // verifica cuantos puntos hay dentro del canvas
    const enemyRight = this.y - this.size;
    const screenLeft = this.canvas.height;
    const isInside = screenLeft > enemyRight;
    // console.log("enemigo dentro de la pantalla");
    // console.log(isInside)
    return isInside;

  }
}
