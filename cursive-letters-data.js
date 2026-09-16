// Hand-captured cursive stroke data for the 30 lowercase Serbian Cyrillic
// letters, on the same shared 0-200 coordinate grid as letters-data.js
// (canvas-style: y grows downward). Captured with stroke-recorder.html
// using the LovelySofiaBG cursive font as a tracing reference, unlike the
// print-style letterforms in letters-data.js.
//
// Reuses circlePoints()/arcPoints()/densify() from letters-data.js rather
// than redefining them - any page that loads this file must also load
// letters-data.js first.
//
// This is step one (lowercase) toward the full cursive set; uppercase
// cursive letters still need to be captured the same way, into their own
// entries here (or a parallel file) once lowercase is validated.
//
// Each captured letter should eventually record where its pen path starts
// and ends (first point of its first stroke / last point of its last
// stroke) so a future word-level renderer can stitch one letter's exit
// point into the next letter's entry point for connected cursive playback -
// no stitching logic exists yet, this file only holds per-letter strokes.

const CURSIVE_LETTERS = {
  // Fill in via stroke-recorder.html's "Copy this letter" / "Copy all
  // recorded" buttons, e.g.:
  // 'а': { strokes: [ ... ] },
};

// Lowercase Serbian Cyrillic alphabet, same order as LETTER_ORDER in
// letters-data.js (digraph letters њ/љ/џ kept in their alphabetical slot).
const CURSIVE_LETTER_ORDER = [
  'а', 'б', 'в', 'г', 'д', 'ђ', 'е', 'ж', 'з', 'и', 'ј', 'к', 'л', 'љ', 'м',
  'н', 'њ', 'о', 'п', 'р', 'с', 'т', 'ћ', 'у', 'ф', 'х', 'ц', 'ч', 'џ', 'ш'
];
