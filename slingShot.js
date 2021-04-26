class SlingShot{
    constructor(x, y){

        var options= {
            bodyA: x,
            pointB: y,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= y;
        this.sling=Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA!==null){
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.pointB;
            strokeWeight(6)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}