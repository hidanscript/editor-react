const fs = window.require('fs');

function readDirectory(dir = './', callback) {
  const files = fs.readdirSync(dir);
  callback(files.map(file => { return { name: file, dir: `${dir}${file}` } }));
}

function readFile(dir) {
  const stats = fs.statSync(dir);
  if (stats.isFile()) {
    const content = fs.readFileSync(dir, 'utf-8')
    return content;
  }
}

module.exports = { readDirectory, readFile };
