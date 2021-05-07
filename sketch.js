var canvas;
var music;
var b1,b2,b3,b4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    b1 = createSprite(55,580,240,30);
    b1.shapeColor="green";
    b2 = createSprite(295,580,240,30);
    b2.shapeColor="yellow";
    b3 = createSprite(515,580,240,30);
    b3.shapeColor="pink";
    b4 = createSprite(740,580,240,30);
    b4.shapeColor="blue";
    ball = createSprite(random(20,750),100,40,40);
    ball.velocityX=4;
    ball.velocityY=9;
    ball.shapeColor="white";

}

function draw() {
    background(rgb(169,169,169));
  
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    
    //add condition to check if box touching surface and make it box
    if(b1.isTouching(ball) && ball.bounceOff(b1)){

       ball.shapeColor="green";
       music.play();

    }

    if(b2.isTouching(ball)){

       ball.shapeColor="yellow";
       ball.velocityX=0;
       ball.velocityY=0;
       music.stop();

    } 
    if(b3.isTouching(ball) && ball.bounceOff(b3)){

        ball.shapeColor="pink";
        music.play();
 
     }
     if(b4.isTouching(ball) && ball.bounceOff(b4)){

        ball.shapeColor="blue";
        music.play();
 
     }


    drawSprites();
}
