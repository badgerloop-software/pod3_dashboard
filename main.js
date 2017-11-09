"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
let mainWindow;

// This function creates a new window`
function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 800, center: true});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.show();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);
app.on("window-all-closed", function () {
    app.quit();
})