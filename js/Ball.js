class Ball {
  constructor(radius,options) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = ellipse(30,30,30,30); 
    World.add(world,this.body);
  }

  display() {
    fill("green");
  }
}
