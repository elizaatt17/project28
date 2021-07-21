reduceLife(archerLife){
    if(archerLife===2){
        this.life1="red";

    }
    if(archerLife===1){
        this.life2="red";
    }
    if(archerLife===0){
        this.life3="red";
    }
    if(
        baseCollision.collided||
        archerCollision.collided||
        playerCollision.collided

    )
    {
        computerArcherLife-=1;
        computer.reduceLife(computerArcherLife);
        if(computerArcherLife<=0){
            computerArcher.collapse=true;
             Matter.Body.setStatic(computerArcher.body,false);
             Matter.Body,setStatic(computer.body,false);
             Matter.Body.setPosition(computer.body,{
                 x:width-100.
                 y:computer.body.positrion.y
             });
        }
    }

}