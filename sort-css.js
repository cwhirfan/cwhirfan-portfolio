const fs = require('fs');

// Read the CSS file
let css = fs.readFileSync('styles.css', 'utf8');

// Sort properties within each rule alphabetically
css = css.replace(/\{([^}]+)\}/g, (match, properties) => {
  // Split properties and filter empty ones
  const props = properties
    .split(';')
    .map(prop => prop.trim())
    .filter(prop => prop.length > 0);

  // Sort alphabetically
  props.sort();

  // Rejoin with semicolons
  return '{' + props.join(';') + '}';
});

// Write back
fs.writeFileSync('styles.css', css, 'utf8');
console.log('CSS properties sorted alphabetically!');
