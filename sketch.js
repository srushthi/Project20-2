
var car,wall1;
var speed,weight
var GreenCar,wall2;
var YellowCar,wall3;
var RedCar,wall4;

function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  
 
 speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  car.scale=0.3;
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall1 = createSprite(1500,200,60,height/2);
wall1.shapeColor=color(80,80,80);

  GreenCar = createSprite(100,150,50,50);
  GreenCar.scale=0.3;
GreenCar.velocityX=speed;
GreenCar.shapeColor="green"

wall2 = createSprite(1500,150,60,height/2);
wall2.shapeColor=color(255);

YellowCar = createSprite(150,100,50,50);
YellowCar.scale=0.3;
  YellowCar.velocityX=speed;
  YellowCar.shape="yellow";

  wall3 = createSprite(1500,100,60,height/2);
  wall3.shapeColor=color(255);

  RedCar = createSprite(200,250,50,50);
  RedCar.scale=0.3;
  RedCar.velocityX=speed;
  RedCar.shapeColor="red";

  wall4 = createSprite(1500,250,60,height/2);
  wall4.shapeColor=color(255);

}

function draw() {
  background(0) ;

  if(wall1.x - car.x < (car.width + wall1.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed *speed/22509;
    if(deformation > 180){
      car.shapeColor=RedCar;
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor=YellowCar;
    }
    if(deformation < 100){
      car.shapeColor=GreenCar;
    }
  }
  drawSprites();
}