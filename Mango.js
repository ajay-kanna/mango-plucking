class Mango{

    constructor(x,y){
    
        var options = {
        
        isStatic:true,
        restitution:0,
        friction:0.5,
        density:0.6
        }
        
        this.body = Bodies.circle(x, y, 25, options)
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body)
        
        
        
        }
        
        display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        imageMode(RADIUS)
        image(this.image,0,0,50,50)
        pop();
        }
        
        }












