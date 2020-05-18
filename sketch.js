const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,canon;
var ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
        
    ground = new Ground(600,380,1200,20);
    canon = new Canon(218,295,67,20);
  
}


function draw(){
    background("black");
    Engine.update(engine);
    fill("yellow");
    stroke("yellow");
    rect(200,363,100,15);
    rect(200,350,100,15);
    rect(200,333,60,20);

    ground.display();
    canon.display();

    fill("red");
    stroke("red");
    beginShape(TRIANGLES);
    vertex(200,273);
    vertex(170,323);
    vertex(230,323);
    endShape();

} 
