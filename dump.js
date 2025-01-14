const adjustColor = (color, percentage, lighten = true) => {
  // Remove the hash (#) and parse the color values
  const num = parseInt(color.slice(1), 16);

  // Extract the red, green, and blue components
  let R = (num >> 16) & 0xff;
  let G = (num >> 8) & 0xff;
  let B = num & 0xff;

  if (lighten) {
      // Lighten the color by increasing RGB values towards white
      R = Math.min(255, R + Math.round((255 - R) * (percentage / 100)));
      G = Math.min(255, G + Math.round((255 - G) * (percentage / 100)));
      B = Math.min(255, B + Math.round((255 - B) * (percentage / 100)));
  } else {
      // Darken the color by decreasing RGB values towards black
      R = Math.max(0, R - Math.round(R * (percentage / 100)));
      G = Math.max(0, G - Math.round(G * (percentage / 100)));
      B = Math.max(0, B - Math.round(B * (percentage / 100)));
  }

  // Return the adjusted color as a hex string
  return `#${(1 << 24 | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};
// Lighten the color by 20%
let lighterColor = adjustColor("#E91E63", 20, true); // Lightens the color by 20%

// Darken the color by 20%
let darkerColor = adjustColor("#E91E63", 20, false); // Darkens the color by 20%

console.log("Lighter Color:", lighterColor); // Should be a lighter shade of #E91E63
console.log("Darker Color:", darkerColor); // Should be a darker shade of #E91E63
