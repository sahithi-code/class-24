class Paper{
constructor(x,y){
    var options={
isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2}
this.body = Bodies.circle(x,y,30, options);

this.width = 30;
//this.height =30;  
World.add(world, this.body);   
}
 display(){   
var pos =this.body.position;


ellipseMode(CENTER)
fill("red")
ellipse(this.body.position.x,this.body.position.y,30)   
 }

}
