"use strict";

const electron = require('electron');
const request = require('request');

const myButton = document.getElementById("close");
const minimizer = document.getElementById('minimize');
const maximizer = document.getElementById('maximize');

const brand = document.getElementById('brand');
const os = require("os");
let data = document.getElementsByClassName('data');
const port = 3000;


myButton.addEventListener('click', (err) => {
    electron.remote.getCurrentWindow().close();
});

minimizer.addEventListener('click', (err) => {
    electron.remote.getCurrentWindow().minimize();
});


let previousSize;

maximizer.addEventListener('click', (err) => {
    if (electron.remote.getCurrentWindow().isMaximized()){
        electron.remote.getCurrentWindow().setSize(previousSize[0], previousSize[1]);
        electron.remote.getCurrentWindow().center();
        maximizer.innerHTML = '&#128470';
    } else {
        previousSize = electron.remote.getCurrentWindow().getSize();
        electron.remote.getCurrentWindow().maximize();
        maximizer.innerHTML = '&#128470;';
    }


});


let newWindow;
brand.addEventListener('click', () => {
    newWindow = new electron.remote.BrowserWindow({
        width: 600,
        height: 600,
        show: false,
        icon: __dirname + '/assets/icons/png/64x64.png'
    })

    newWindow.loadURL('http://badgerloop.com');
    newWindow.on('ready-to-show', () => {newWindow.show()})
    newWindow.on('closed', () => {newWindow = null})
})


let id = 0;
let sensorName = 'position'


//The loop that will keep requesting the most recent data
var requestLoop = setInterval(() => {
    if (id === 100) {
        id = 0;
    } else {
        id++;
    }

    request('http://localhost:' + port + '/' + sensorName + '/' + id + '/', (err, response, body) => {
        if (err) {
            return;
        }
        console.log(`STATUS: ${response.statusCode}`)
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        console.log(`BODY: ` + body)

        //myButton.innerHTML = body;
        for (let i = 0; i < data.length; i++) {
             data[i].innerHTML = body;
        }

    })
}, 100);


//requestLoop.start();




// constantly be updating the variables and printing them to the window
// potential idea: use an event listener for if time has changed
// then this method would encase all other methods of printing out to the window.

// run an alert every time there is a problem ie. velocity is negative, voltage too low,
// currently waiting on a list of all the problems we need to run an alert for
// TODO: have an over arching event listener that takes in error parameter that will print out the error
// with the alert box

// TODO: find a way to change the logo for the alert box to the BadgerLoop logo
