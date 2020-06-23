export const defaultOptions = {
  // Turn on/off animation when annotating.
  animate: true,
  // Duration of the animation in milliseconds.
  animationDuration: 800,
  // Representing the color of the annotation sketch.
  color: 'currentColor',
  // Width of the annotation strokes.
  strokeWidth: 1,
  // Padding between the element and roughly where the annotation is drawn.
  // If you wish to specify different top, left, right, bottom paddings,
  // you can set the value to an array akin to CSS style padding [top, right, bottom, left] or just [top & bottom, left & right].
  padding: 5,
  // This property only applies to inline text.
  // To annotate multiline text (each line separately), set this property to true.
  multiline: false,
  // By default annotations are drawn in two iterations,
  // e.g.when underlining, drawing from left to right and then back from right to left.
  // Setting this property can let you configure the number of iterations.
  iterations: 2,
  // Value could be a string or an array of strings,
  // each string being one of these values: left, right, top, bottom.
  // When drawing a bracket, this configures which side(s) of the element to bracket.
  brackets: 'right',
};
