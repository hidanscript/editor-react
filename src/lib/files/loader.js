//requiring path and fs modules
import path from 'path';
import fs from 'fs';
//joining path of directory 
const directoryPath = path.join(__dirname, 'Documents');
console.log(fs);
/*
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        console.log(file); 
    });
});*/