class Game{
    counstructor(){}
   start(){
       if(gameState===START){
           background(startImg);
           form=new Form();
           form.display();
       }
       ground=new Ground(displayWidth/2,displayHeight-300,displayWidth,10);
       ball=new Ball(displayWidth/2-10,displayHeight/2,40);
       basket1=new Basket(300,200,100,10);
       basket2=new Basket(900,200,100,10);
      }

   play(){
    background(playImg);
    Engine.update(engine);
    ground.display();
    ball.display();
    player1.display();
    player2.display();  
    basket1.display();
    basket2.display();

    if(keyDown("left")){
        player2.body.position.x-=10
    }
    if(keyDown("right")){
        player2.body.position.x+=10
    }
    if(keyDown("UP_ARROW")){
        player2.body.position.y-=10
    }

   }

   end(){}

}