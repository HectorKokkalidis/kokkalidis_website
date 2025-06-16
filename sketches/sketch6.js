const mySketch = (p) => {
  var holes = [];
  var objects = [];
  var N = 15;
  var colors = [];
  var selection;
  var canvaswidth = 1000;
  var canvasheight = 500;

  class Hole {
    constructor(x, y, c) {
      this.xpos = x;
      this.ypos = y;
      this.colorr = c;
    }
    display() {
      p.strokeWeight(5);
      p.stroke(this.colorr);
      let colorrtransparent = p.color(this.colorr[0], this.colorr[1], this.colorr[2], 20);
      p.fill(colorrtransparent);
      p.circle(this.xpos, this.ypos, 60);
    }
  }

  class Obj {
    constructor(x, y, c) {
      this.xpos = x;
      this.ypos = y;
      this.colorr = c;
    }
    display() {
      p.stroke(this.colorr);
      p.strokeWeight(1.5);
      p.fill(this.colorr);
      p.circle(this.xpos, this.ypos, 40);
    }
    move() {
      this.xpos = p.constrain(this.xpos, 0, canvaswidth);
      this.ypos = p.constrain(this.ypos, 0, canvasheight);
      if (p.keyIsDown(87)) this.ypos -= 7;  // W
      if (p.keyIsDown(65)) this.xpos -= 7;  // A
      if (p.keyIsDown(83)) this.ypos += 7;  // S
      if (p.keyIsDown(68)) this.xpos += 7;  // D
    }
    check(index) {
      if (p.dist(this.xpos, this.ypos, holes[index].xpos, holes[index].ypos) < 20) {
        this.xpos = holes[index].xpos;
        this.ypos = holes[index].ypos;
        selection = undefined;
      }
    }
  }

  p.mousePressed = () => {
    for (let i = 0; i < N; i++) {
      if (p.dist(objects[i].xpos, objects[i].ypos, p.mouseX, p.mouseY) < 20) {
        selection = i;
        break;
      }
    }
  };

  p.setup = () => {
    let canvas = p.createCanvas(canvaswidth, canvasheight);
    canvas.parent('myCanvasContainer6');
    for (let i = 0; i < N; i++) {
      colors[i] = [p.random(255), p.random(255), p.random(255)];
      holes[i] = new Hole(p.random(canvaswidth), p.random(canvasheight), colors[i]);
      objects[i] = new Obj(p.random(canvaswidth), p.random(canvasheight), colors[i]);
    }
  };

  p.draw = () => {
    p.background(220);
    for (let i = 0; i < N; i++) {
      holes[i].display();
      objects[i].display();
    }
    if (selection !== undefined) {
      objects[selection].move();
      objects[selection].check(selection);
    }
  };
};

new p5(mySketch);
