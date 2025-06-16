const gridSketch = (p) => {
  var cells = []
  var canvaswidth = 1000
  var canvasheight = 500
  var xcells = 16
  var ycells = 8

  p.setup = () => {
  let canvas = p.createCanvas(canvaswidth, canvasheight)
  canvas.parent('myCanvasContainer5')
    canabos(0, 0, canvaswidth, canvasheight, xcells, ycells)
    makeit()
  }

  function canabos(x, y, w, h, n, m) {
    var columns = []
    var rows = []
    var subcolumns = []
    var subrows = []

    for (var i = 0; i <= n; i++) {
      columns[i] = x + (i * (w - x)) / n
    }
    for (var i = 0; i <= m; i++) {
      rows[i] = y + (i * (h - y)) / m
    }
    cells[0] = columns
    cells[1] = rows

    for (var i = 0; i < columns.length - 1; i++) {
      subcolumns[i] = []
      subrows[i] = []
      for (var u = 0; u < rows.length - 1; u++) {
        let n1 = p.int(p.random(3, 9))
        let m1 = p.int(p.random(3, 9))
        subcolumns[i][u] = []
        subrows[i][u] = []

        for (var o = 0; o <= n1; o++) {
          subcolumns[i][u][o] = columns[i] + (o * (columns[i + 1] - columns[i])) / n1
        }
        for (var o = 0; o <= m1; o++) {
          subrows[i][u][o] = rows[u] + (o * (rows[u + 1] - rows[u])) / m1
        }
      }
    }
    cells[2] = subcolumns
    cells[3] = subrows
  }

  function makeit() {
    let columns = cells[0]
    let rows = cells[1]
    let subcolumns = cells[2]
    let subrows = cells[3]

    p.stroke(255)
    p.strokeWeight(2)

    for (var u = 0; u < columns.length; u++) {
      p.line(columns[u], 0, columns[u], canvasheight)
    }
    for (var u = 0; u < rows.length; u++) {
      p.line(0, rows[u], canvaswidth, rows[u])
    }

    p.strokeWeight(0.8)

    for (var i = 0; i < subcolumns.length; i++) {
      for (var u = 0; u < subcolumns[i].length; u++) {
        let cols = subcolumns[i][u]
        let rowws = subrows[i][u]

        for (let si = 0; si < cols.length; si++) {
          for (let su = 0; su < rowws.length; su++) {
            let sx = cols[si]
            let sy = rowws[su]
            let sw = cols[si + 1] - cols[si]
            let sh = rowws[su + 1] - rowws[su]

            p.fill(0, p.random(100, 255), p.random(100, 255))
            p.rect(sx, sy, sw, sh)
          }
        }
      }
    }
  }

  function interact() {
    let columns = cells[0]
    let rows = cells[1]
    let subcolumns = cells[2]
    let subrows = cells[3]

    for (var i = 0; i < subcolumns.length; i++) {
      for (var u = 0; u < subcolumns[i].length; u++) {
        let cols = subcolumns[i][u]
        let rowws = subrows[i][u]

        for (let si = 0; si < cols.length; si++) {
          for (let su = 0; su < rowws.length; su++) {
            let sx = cols[si]
            let sy = rowws[su]
            let sw = cols[si + 1] - cols[si]
            let sh = rowws[su + 1] - rowws[su]

            if (
              p.mouseIsPressed &&
              p.mouseX > sx &&
              p.mouseX < sx + sw &&
              p.mouseY > sy &&
              p.mouseY < sy + sh
            ) {
              p.fill(255, p.random(100, 255), p.random(100, 255))
              p.rect(sx, sy, sw, sh)
            }
          }
        }
      }
    }
  }

  p.draw = () => {
    // If you want background clearing:
    // p.background(0)
    interact()
  }
}

// Initialize the sketch on the page
new p5(gridSketch)
