new p5(function (p) {
  let points = [];

  function intersect(x1, y1, x2, y2, x3, y3, x4, y4, i) {
    let x69 =
      ((y3 - y1) * (x2 - x1) * (x4 - x3) +
        x1 * (y2 - y1) * (x4 - x3) -
        x3 * (y4 - y3) * (x2 - x1)) /
      ((y2 - y1) * (x4 - x3) - (y4 - y3) * (x2 - x1));
    let y69 = y1 + ((x69 - x1) * (y2 - y1)) / (x2 - x1);

    points[i] = [x69, y69];
  }

  function midpoint(x1, y1, x2, y2, i) {
    let x70 = x1 + (x2 - x1) / 2;
    let y70 = y1 + (y2 - y1) / 2;
    points[i] = [x70, y70];
  }

  p.setup = function () {
  let canvas = p.createCanvas(400, 400)
  canvas.parent('myCanvasContainer4'); // Attach to a specific div
  };

  p.draw = function () {
    // Geometry setup
    midpoint(200, 200, 0, 0, 0); // p0
    midpoint(200, 0, 0, 0, 1); // p1
    midpoint(points[0][0], points[0][1], points[1][0], points[1][1], 2); // p2
    midpoint(400, 200, 400, 0, 3); // p3
    midpoint(200, 0, points[1][0], points[1][1], 4); // p4
    midpoint(200, 200, 200, 400, 5); // p5
    midpoint(200, 400, 0, 400, 6); // p6
    midpoint(points[5][0], points[5][1], points[6][0], points[6][1], 7); // p7
    midpoint(200, 0, 400, 0, 8); // p8
    midpoint(200, 200, 0, 400, 9); // p9
    midpoint(0, 200, 0, 400, 10); // p10
    midpoint(points[9][0], points[9][1], points[10][0], points[10][1], 11); // p11

    intersect(
      points[2][0], points[2][1],
      points[3][0], points[3][1],
      points[4][0], points[4][1],
      points[7][0], points[7][1],
      12
    ); // p12

    intersect(
      points[2][0], points[2][1],
      points[3][0], points[3][1],
      points[8][0], points[8][1],
      200, 200,
      13
    ); // p13

    p.background(240);
    p.strokeWeight(5);

    for (let i = 0; i <= 13; i++) {
      p.point(points[i][0], points[i][1]);
    }

    p.stroke(255, 0, 0);
    points[14] = [0, p.mouseY];
    points[17] = [p.mouseX, 400];
    points[20] = [p.mouseX, 0];

    p.point(points[14][0], points[14][1]);
    p.point(points[17][0], points[17][1]);
    p.point(points[20][0], points[20][1]);

    p.stroke(0);

    let λ = (points[3][1] - points[2][1]) / (points[3][0] - points[2][0]);

    intersect(
      points[12][0], points[12][1],
      points[11][0], points[11][1],
      points[14][0], points[14][1],
      400, points[14][1],
      15
    ); // p15

    points[16] = [
      400,
      points[15][1] - λ * (points[15][0] - 400)
    ];

    midpoint(points[17][0], points[17][1], 200, 400, 18); // p18

    intersect(
      points[15][0], points[15][1],
      points[16][0], points[16][1],
      points[18][0], points[18][1],
      points[20][0], points[20][1],
      19
    ); // p19

    p.point(points[15][0], points[15][1]);
    p.point(points[16][0], points[16][1]);
    p.point(points[18][0], points[18][1]);
    p.point(points[19][0], points[19][1]);

    p.strokeWeight(0.1);
    p.line(points[2][0], points[2][1], points[3][0], points[3][1]);
    p.line(points[4][0], points[4][1], points[7][0], points[7][1]);
    p.line(points[8][0], points[8][1], 200, 200);
    p.line(points[12][0], points[12][1], points[11][0], points[11][1]);
    p.line(points[14][0], points[14][1], 400, points[14][1]);
    p.line(points[15][0], points[15][1], points[16][0], points[16][1]);
    p.line(points[18][0], points[18][1], points[20][0], points[20][1]);

    p.strokeWeight(1);
    p.line(points[13][0], points[13][1], points[12][0], points[12][1]);
    p.line(points[12][0], points[12][1], points[15][0], points[15][1]);
    p.line(points[15][0], points[15][1], points[19][0], points[19][1]);
    p.line(points[19][0], points[19][1], points[13][0], points[13][1]);
  };
});
