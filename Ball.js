class Ball {
    constructor(x, y, width, height,angle) {
      var options = {
          
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
    this.height = height;
      //this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("green");
      strokeWeight(4);
      stroke("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };