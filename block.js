class Block {
    constructor(x, y, width, height, angle) {
      var options = {
          isState: false,
          friction : 0.6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      rectMode(CENTER);
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  