class slingShot{
    constructor (body1 ,point) {
        var options = {
            bodyA : body1,
            pointB : point,
            length: 10,
            stiffness : 0.05
        }
        this.pointB = point ; 
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display() {
        if(this.sling.bodyA ){

        
        var ptA = this.sling.bodyA.position;
        var ptB = this.pointB;
        strokeWeight(4);
        line(ptA.x,ptA.y,ptB.x,ptB.y);
        

        }
    } 
    
    
    }