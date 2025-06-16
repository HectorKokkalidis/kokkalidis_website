new p5(function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(400, 400);
    canvas.parent('myCanvasContainer1');

    p.background(0, 24, 64);

    // Blue circle + triangles
    p.noStroke();
    p.fill(30, 117, 170);
    p.circle(200, 200, 400);
    p.triangle(0, 0, 350, 50, 50, 350);
    p.triangle(400, 0, 350, 350, 50, 50);
    p.triangle(400, 400, 350, 50, 50, 350);
    p.triangle(0, 400, 350, 350, 50, 50);

    // Dark blue diagonals
    p.fill(0, 24, 64);
    p.stroke(0, 24, 64);
    p.strokeWeight(2);
    p.line(0, 0, 400, 400);
    p.line(400, 0, 0, 400);

    // Dark blue ellipses
    p.noStroke();
    p.ellipse(200, 200, 400, 270);
    p.ellipse(200, 200, 270, 400);

    // Orange circle + triangles
    p.fill(209, 120, 67);
    p.circle(200, 200, 250);
    p.triangle(200, 0, 300, 200, 100, 200);
    p.triangle(400, 200, 200, 300, 200, 100);
    p.triangle(200, 400, 300, 200, 100, 200);
    p.triangle(0, 200, 200, 300, 200, 100);

    // Beige lines
    p.fill(255, 240, 212);
    p.stroke(255, 240, 212);
    p.strokeWeight(1);
    p.line(200, 0, 200, 400);
    p.line(0, 200, 400, 200);

    // Beige ellipses
    p.noStroke();
    p.ellipse(200, 200, 250, 150);
    p.ellipse(200, 200, 150, 250);

    // Blue circle
    p.fill(33, 74, 105);
    p.circle(200, 200, 158);
  };
});
