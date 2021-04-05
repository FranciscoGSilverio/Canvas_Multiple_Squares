//saving the reference of the Canvas element.
var canvas = document.querySelector("canvas");

//Definition of the Canvas size.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

//Keeps all the squares.
var squareArray = [];

//Color palette.
var colorArray = [
    '#730217',
    '#40010D',
    '#BF54B8',
    '#C1D6D9',
    '#D9B7B0',
];

//Creates all the quares with the parameters.
for (i=0;i<1000;i++){

  squareArray[i] = new square(
    Math.random()*100, //positionX
    Math.random()*100, //positionY
    Math.random()*20, //size
    colorArray[Math.floor(Math.random()*5)],//colors -> colorArray 
    Math.random()*10,//speedX
    Math.random()*10);//speedY
}

//Function that contains the parameters and it's values.
function square(posX, posY, size, color, speedX, speedY){

  this.posX = posX;
  this.posY = posY;
  this.size = size;
  this.color = color;
  this.speedX = speedX;
  this.speedY = speedY;

  //Function that draws every square.
  this.draw = function(){

    c.fillStyle = this.color;
    c.fillRect(this.posX, this.posY, this.size, this.size);
  }

  //Function that updates the square's position.
  this.move = function(){
    this.posX = this.posX + this.speedX;

    if(((this.posX + this.size) >= window.innerWidth) ||(this.posX <= 0)){
      this.speedX = -this.speedX;
      
    }

    this.posY = this.posY + this.speedY;

    if(((this.posY + this.size) >= window.innerHeight) ||(this.posY <= 0)){
      this.speedY = -this.speedY;
      
  }
  }
}

//Function that calls all the animation.
function animate() {
  requestAnimationFrame(animate);
  
  
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for(b=0;b<squareArray.length;b++){
    squareArray[b].draw();
    squareArray[b].move();
  }
  
}

animate();

