class bob{
    constructor(x, y, radius){
        var options={
            isStatic:true,
            restitution:0.8,
            friction:0.3,
            density:1.0
        
        }
    this.body = Bodies.circle(x, y, radius, options)
    this.radius = radius;
    World.add(world, this.body)
    }
    display(){
        var position = this.body.position;
        ellipseMode(CENTER)
        fill("blue")
        ellipse(this.body.position.x, this.body.position.y, this.body.radius)
    } 
}