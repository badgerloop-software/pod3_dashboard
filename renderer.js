const button1 = document.getElementById("0");

button1.addEventListener('click', function (event) {
    alert("ALERT");
});



// constantly be updating the variables and printing them to the window
// potential idea: use an event listener for if time has changed
// then this method would encase all other methods of printing out to the window.

// run an alert every time there is a problem ie. velocity is negative, voltage too low,
// currently waiting on a list of all the problems we need to run an alert for
// TODO: have an over arching event listener that takes in error parameter that will print out the error
// with the alert box

// TODO: find a way to change the logo for the alert box to the BadgerLoop logo