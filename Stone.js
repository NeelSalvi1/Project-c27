class Stone{
constructor(x,y,width,height){
    var option={
        'restitution' : 0.8,
        'friction': 1.0,
        'density': 0.1
        
    }
    this.body=Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body);
    
    this.width=width;
    this.height=height;
}

display()
{
    var pos=this.body.position;
    var angle=this.body.angle;
    fill("black")
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
     
}


}




