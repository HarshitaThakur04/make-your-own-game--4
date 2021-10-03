class Form{
    counstructor(){
        //this.tittle=createElement("h1");
        //this.play=createButton("play")
    }

    display(){
    var tittle=createElement("h1");

    tittle.html("BasketBall Game");
    tittle.position(displayWidth/2-180,180);

    var play=createButton("play")
    play.class("customButton")

    play.position(displayWidth/2-50,displayHeight-300);
    play.mousePressed(()=>{
        tittle.hide();
        play.hide();
        gameState=PLAY;
        player1=new Player(350,400,50,50);
        player2=new Player(950,400,50,50);
    })
    }
}