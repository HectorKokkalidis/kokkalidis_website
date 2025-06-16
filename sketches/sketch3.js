new p5(function(p) {
  var canvaswidth = 400;
  var canvasheight = 400;

  p.setup = function() {
  let canvas = p.createCanvas(canvaswidth, canvasheight)
  canvas.parent('myCanvasContainer3'); // <- make sure this ID matches your HTML
    p.background(255);
  };

  p.draw = function() {
    let i = p.frameCount / 10;

    if (i <= 250) {
      let blu = p.random(0, 256);
      let redd = p.random(0, 256);
      let x = p.random(canvaswidth);
      let y = p.random(canvasheight);
      let w = p.random(canvaswidth);
      let h = p.random(canvasheight);

      p.strokeWeight(0.1);
      p.noFill();
      p.stroke(redd, 0, blu, 150);
      p.ellipse(w, y, w, h);
    }
  };
});
