class Snow {
constructor(x,y,width,height) {
    var options = 
    {
    isStatic: false,
    friction:.5,
    density:.2,

    }
this.body = Bodies.rectangle(x,y,width,height,options);
this.image=loadImage("snow5.webp")
this.width=width
this.height=height
World.add(world,this.body)
}
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop()
    

}
}