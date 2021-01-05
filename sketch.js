var player1,virus,virus2
var edges
function preload (){

}
function setup(){
    createCanvas(600,600)
     player1=createSprite(250,200,100,10)
    // virus1=createSprite(10,10,20,40)
    // virus2=createSprite(10,10,30,30)
    //log1=createSprite(250,560,50,10)
    virus=new Group()

}
function draw(){
    background("black")
   edges=createEdgeSprites()
    if (frameCount%100===0){
    virus1=createSprite(random(200,201),40,20,40)
    virus.add(virus1)
    virus1.shapeColor="yellow" 
        
    virus1.velocityY=random(10,15)
    }
    if(keyDown("left")){
        player1.velocityX=-10
    }
    if(keyDown("right")){
        player1.velocityX=10
    }
    if(virus.isTouching(player1)){
        virus1.remove()
        }

    player1.bounceOff(edges[0])
    player1.bounceOff(edges[1])
   
    drawSprites()
    text(mouseX + "   "+"  "+mouseY,mouseX+20,mouseY+10)
    

}