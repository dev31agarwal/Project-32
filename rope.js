class Rope{
    constructor(x, y){

        var options= {
            bodyA: x,
            pointB: y,
            stiffness:0.04,
            length: 8,
        }
        this.body= Matter.Constraint.create(options)
        World.add(world, this.body);
    }

    display(){

        if(this.body.bodyA!==null){
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
}