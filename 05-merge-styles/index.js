

const fs = require('fs');
const path = require('path');

const stylesPath = path.resolve(__dirname, 'styles');
const bundlePath = path.resolve(__dirname, 'project-dist', 'bundle.css');

let writeableStream = fs.createWriteStream(bundlePath);

fs.readdir(stylesPath, (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    fs.stat(path.resolve(stylesPath, `${files[i]}`), (err, stats) => {
      if (stats.isFile()) {
        if (path.extname(files[i]) === '.css') {
          let readableStream = fs.createReadStream(path.resolve(stylesPath, `${files[i]}`), 'utf8');
          readableStream.pipe(writeableStream);
        }
      }
    });
  }

});