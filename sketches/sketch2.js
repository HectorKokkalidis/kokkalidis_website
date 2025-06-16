new p5(function (p) {
  p.setup = function () {
  let canvas = p.createCanvas(500, 500);
  canvas.parent('myCanvasContainer2');

    p.background(255);
    p.angleMode(p.DEGREES);
  };

  p.draw = function () {
    let i = p.frameCount / 10;

    if (i <= 250) {
      // Random points
      let x1 = p.random(0, 501);
      let x2 = p.random(0, 501);
      let y1 = p.random(0, 501);
      let y2 = p.random(0, 501);

      // Spiral angle
      let angle = p.frameCount % 360;

      // Spiral point
      let x = 250 + i * p.cos(angle);
      let y = 250 + i * p.sin(angle);

      // Line styling
      p.strokeWeight(0.05);
      p.stroke(0, 0, 255, 255);

      // Draw lines
      p.line(x, y, x1, 0);
      p.line(x, y, x2, 500);
      p.line(x, y, 0, y1);
      p.line(x, y, 500, y2);
    }
  };
});
