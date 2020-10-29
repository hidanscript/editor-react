const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const express = require('express');
const server = express();
const fs = require('fs');
const cors = require('cors');

try {
  require('electron-reloader')(module)
} catch (_) {}

function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
  win.loadURL(startURL);
  win.once('ready-to-show', () => win.show());
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

server.use(cors());

server.listen(8000);

server.get('/', (req, res) => {
  const directoryPath = "./test/";
  fs.readdir(directoryPath, function (err, files) {
    res.json(err ? { err } : { files });
  });
});