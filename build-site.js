const fs = require('fs');
const path = require('path');

const root = __dirname;
const output = path.join(root, 'dist');
const files = ['index.html', 'styles.css', 'script.js', 'Harith-Irfan-Resume.pdf'];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(output, file));
  }
}

const assets = path.join(root, 'assets');
if (fs.existsSync(assets)) {
  fs.cpSync(assets, path.join(output, 'assets'), { recursive: true });
}

console.log(`Built static site in ${path.relative(root, output)}/`);