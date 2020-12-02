class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.ground = Bodies.rectangle(450,650,900,10,options);
        World.add(world, this.ground);
    }

    display(){
        var pos  = this.ground.position;
        this.ground.visible = false;
        rectMode(CENTER);
        rect(pos.x, pos.y, 900, 10);
    }
}