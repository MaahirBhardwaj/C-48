class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
      if(gameState===0){
         player=new Player();
         var playerCountRef=await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
           playerCount=playerCountRef.val();
           player.getCount();
         }
         form=new Form();
         form.display();
      }
      player1=createSprite(600,displayHeight-250);
      player1.addImage(player1image);
      player1.scale=1.0;
      punch1=createSprite(600,displayHeight-250);
      punch1.addImage(p1punch);
      punch1.scale=1.0;
      punch1.visible=false;
      player2=createSprite(1000,displayHeight-250);
      player2.addImage(player2image);
      player2.scale=1.5;
      punch2=createSprite(1000,displayHeight-250);
      punch2.addImage(p2punch);
      punch2.scale=1.5;
      punch2.visible=false;
      players=[player1,player2];
      fall1=createSprite(600,displayHeight-250);
      fall1.addImage(p1f);
      fall1.scale=1.0;
      fall1.visible=false;
      fall2=createSprite(1000,displayHeight-250);
      fall2.addImage(p2f);
      fall2.scale=1.0;
      fall2.visible=false;
      p1score=0;
      p2score=0;

    }
  play(){
  form.hide();
  Player.getPlayerInfo();
  if(allplayers!==undefined){
    background("red");
    image(bg,0,0,displayWidth,displayHeight);
    fill("white");
    textSize(20);
    text("Player1 score: "+p1score,200,200);
    text("Player2 score: "+p2score,200,250);
    var index=0;
    var x=175;
    var y
    for(var i in allplayers){
      index=index+1;
     //x=x+500;
    // y=displayHeight-allplayers[i].distance;
      
    //players[index-1].x=x;
    //players[index-1].y=y;
      
    
    
  }
  //if( keyDown(RIGHT_ARROW)){
    //players[index-1].shapeColor="red"
    //camera.position.x=displayWidth/2;
    //camera.position.y=players[index-1].y
    //allplayers[i].x=allplayers[i].x+10;
    //player.update();
    //}
  //if(keyDown(LEFT_ARROW) && player.index!==null){
  // player.distance=player.distance+10 
    //player.update();
   //}
   if(keyDown(LEFT_ARROW)){
   player1.x=player1.x-10;
   punch1.x=punch1.x-10;
   } 
   if(keyDown(RIGHT_ARROW)){
    player1.x=player1.x+10;
    punch1.x=punch1.x+10;
    } 
    if(keyDown(UP_ARROW)){
      player2.x=player2.x-10;
      punch2.x=punch2.x-10;
      } 
      if(keyDown(DOWN_ARROW)){
       player2.x=player2.x+10;
       punch2.x=punch2.x+10;
       } 
if(keyWentDown("space")){
  punch1.visible=true;
  player1.visible=false;
}
if(keyWentUp("space")){
  punch1.visible=false;
  player1.visible=true;
}
if(keyWentDown("enter")){
  punch2.visible=true;
  player2.visible=false;
}
if(keyWentUp("enter")){
  punch2.visible=false;
  player2.visible=true;
}
/*if(punch1.isTouching(player2)||punch1.isTouching(punch2)){
  fall2.visible=true;
  player2.visible=false;
  punch2.visible=false;
  player1.visible=true;
}
if(punch2.isTouching(player1)||punch2.isTouching(punch1)){
  fall1.visible=true;
  player1.visible=false;
  punch1.visible=false;
}*/
if(punch1.isTouching(player2)){
  p1score=p1score+5;
}
if(punch2.isTouching(player1)){
  p2score=p2score+5;
}
if(p1score>=500){
  player1.x=600;
  fill("white");
  textSize(30);
  text("Player1 is the WINNER!",200,displayHeight/2);
}
if(p2score>=500){
  player2.x=1000;
  fill("white");
  textSize(30);
  text("Player2 is the WINNER!",200,displayHeight/2);
}
if(p1score>=500||p2score>=500){
  p1score=0;
  p2score=0
  player1.x=600;
  player2.x=1000;
}
  drawSprites()
} 

}
}