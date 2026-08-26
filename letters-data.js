// Hand-authored stroke data for the 30 uppercase Serbian Cyrillic letters,
// on a shared 0-200 coordinate grid (canvas-style: y grows downward).
// Each letter is a list of strokes; each stroke is a single continuous pen
// path (a polyline of [x, y] points). Straight parts are just vertices;
// curved parts are pre-sampled via arcPoints()/circlePoints() and spliced
// into the same point list, since the animation/rendering code just treats
// every stroke as "a list of points to draw through," regardless of origin.

function circlePoints(cx, cy, r, n) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = -Math.PI / 2 + (i / n) * Math.PI * 2; // start at top, go clockwise
    pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
  }
  return pts;
}

// Angle convention: 0 deg = pointing right (+x), 90 deg = pointing down
// (+y), matching standard math angles but with y-down, so increasing angle
// sweeps clockwise on screen. startDeg/endDeg are linearly interpolated, so
// e.g. 40 -> 320 sweeps the "long way" through 90/180/270.
function arcPoints(cx, cy, rx, ry, startDeg, endDeg, n) {
  const pts = [];
  const start = (startDeg * Math.PI) / 180;
  const end = (endDeg * Math.PI) / 180;
  for (let i = 0; i <= n; i++) {
    const t = start + (end - start) * (i / n);
    pts.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)]);
  }
  return pts;
}

const LETTERS = {
  'А': { strokes: [
    [[25, 180], [100, 20]],
    [[100, 20], [175, 180]],
    [[55, 120], [145, 120]]
  ]},
  'Б': { strokes: [
    [[40, 20], [40, 180]],
    [[40, 20], [115, 20]],
    arcPoints(40, 137.5, 45, 42.5, -90, 90, 40)
  ]},
  'В': { strokes: [
    [[40, 20], [40, 180]],
    arcPoints(40, 57.5, 42, 37.5, -90, 90, 30),
    arcPoints(40, 142.5, 46, 37.5, -90, 90, 30)
  ]},
  'Г': { strokes: [
    [[35, 20], [35, 180]],
    [[35, 20], [160, 20]]
  ]},
  'Д': { strokes: [
    [[70, 20], [130, 20]],
    [[70, 20], [35, 160], [35, 180]],
    [[130, 20], [165, 160], [165, 180]],
    [[25, 160], [175, 160]]
  ]},
  'Ђ': { strokes: [
    [[50, 20], [50, 110], ...arcPoints(50, 145, 35, 35, -90, 90, 30), [65, 200]]
  ]},
  'Е': { strokes: [
    [[40, 20], [40, 180]],
    [[40, 20], [150, 20]],
    [[40, 100], [130, 100]],
    [[40, 180], [150, 180]]
  ]},
  'Ж': { strokes: [
    [[100, 20], [100, 180]],
    [[30, 20], [170, 180]],
    [[170, 20], [30, 180]]
  ]},
  'З': { strokes: [
    [...arcPoints(90, 60, 45, 40, -90, 90, 30), ...arcPoints(90, 140, 48, 40, -90, 90, 30)]
  ]},
  'И': { strokes: [
    [[40, 20], [40, 180]],
    [[40, 180], [160, 20]],
    [[160, 20], [160, 180]]
  ]},
  'Ј': { strokes: [
    [[110, 20], [110, 150], ...arcPoints(90, 150, 20, 20, 0, 110, 15)]
  ]},
  'К': { strokes: [
    [[40, 20], [40, 180]],
    [[40, 100], [160, 20]],
    [[40, 100], [160, 180]]
  ]},
  'Л': { strokes: [
    [[40, 20], [160, 20]],
    [[40, 20], [40, 160], [20, 180]],
    [[160, 20], [160, 180]]
  ]},
  'Љ': { strokes: [
    [[30, 20], [170, 20]],
    [[30, 20], [30, 140], [15, 160]],
    [[100, 20], [100, 115], ...arcPoints(100, 147.5, 38, 32.5, -90, 90, 25)]
  ]},
  'М': { strokes: [
    [[30, 180], [30, 20]],
    [[30, 20], [100, 100]],
    [[100, 100], [170, 20]],
    [[170, 20], [170, 180]]
  ]},
  'Н': { strokes: [
    [[40, 20], [40, 180]],
    [[160, 20], [160, 180]],
    [[40, 100], [160, 100]]
  ]},
  'Њ': { strokes: [
    [[30, 20], [30, 180]],
    [[30, 100], [100, 100]],
    [[100, 20], [100, 115], ...arcPoints(100, 147.5, 38, 32.5, -90, 90, 25)]
  ]},
  'О': { strokes: [
    circlePoints(100, 100, 80, 60)
  ]},
  'П': { strokes: [
    [[35, 20], [165, 20]],
    [[35, 20], [35, 180]],
    [[165, 20], [165, 180]]
  ]},
  'Р': { strokes: [
    [[40, 20], [40, 180]],
    arcPoints(40, 57.5, 45, 37.5, -90, 90, 30)
  ]},
  'С': { strokes: [
    arcPoints(100, 100, 75, 75, 40, 320, 40)
  ]},
  'Т': { strokes: [
    [[20, 20], [180, 20]],
    [[100, 20], [100, 180]]
  ]},
  'Ћ': { strokes: [
    [[40, 20], [160, 20]],
    [[100, 20], [100, 150], ...arcPoints(80, 150, 20, 20, 0, 100, 15)]
  ]},
  'У': { strokes: [
    [[30, 20], [100, 100]],
    [[170, 20], [100, 100]],
    [[100, 100], [80, 180]]
  ]},
  'Ф': { strokes: [
    [[100, 10], [100, 190]],
    circlePoints(100, 100, 55, 45)
  ]},
  'Х': { strokes: [
    [[30, 20], [170, 180]],
    [[170, 20], [30, 180]]
  ]},
  'Ц': { strokes: [
    [[40, 20], [40, 180]],
    [[40, 180], [165, 180]],
    [[165, 20], [165, 200]]
  ]},
  'Ч': { strokes: [
    [[140, 20], [140, 180]],
    [[60, 20], [60, 85], [140, 100]]
  ]},
  'Џ': { strokes: [
    [[35, 20], [35, 180]],
    [[35, 180], [165, 180]],
    [[165, 20], [165, 200]]
  ]},
  'Ш': { strokes: [
    [[30, 20], [30, 180]],
    [[100, 20], [100, 180]],
    [[170, 20], [170, 180]],
    [[20, 180], [180, 180]]
  ]}
};

// Official Serbian Cyrillic alphabet order, matching the Latin ALPHABET
// order used elsewhere in the app.
const LETTER_ORDER = [
  'А', 'Б', 'В', 'Г', 'Д', 'Ђ', 'Е', 'Ж', 'З', 'И', 'Ј', 'К', 'Л', 'Љ', 'М',
  'Н', 'Њ', 'О', 'П', 'Р', 'С', 'Т', 'Ћ', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш'
];
