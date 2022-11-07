
const fs = require('fs');
const path = require('path');
const filesPath = path.resolve(__dirname, 'files');
const copyFilesPath = path.resolve(__dirname, 'files-copy');

function copyDir () {

  fs.mkdir(copyFilesPath, {recursive: true}, err=> {
    if(err) throw err;
  })

  fs.readdir(copyFilesPath, (err,files) => {
    if(err) throw err;

    for (let i = 0; i < files.length; i++) {
      fs.unlink(path.resolve(copyFilesPath, `${files[i]}`), err => {
        if (err) throw error;


        });
      }
    });

  fs.readdir(filesPath, (err, files) => {
    if(err) throw err;

    for (let i = 0; i < files.length; i++) {
      fs.copyFile(path.resolve(filesPath, `${files[i]}`), path.resolve(copyFilesPath, `${files[i]}`), err => {
        if (err) throw error;
      });

    }
  });
}


copyDir();
