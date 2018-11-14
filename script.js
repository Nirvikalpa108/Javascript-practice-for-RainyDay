// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
// QUESTION - how do I hide my darksky key? 
// QUESTION - have I excluded the data blocks correctly?
request.open('GET', 'ENTER DARK SKY KEY'/[51.461040],[0.138160]/[minutely,hourly,daily,alerts,flags]);

request.onload = function () {
  // Onload, means upon receiving response. Add console.log - as soon as some data comes back, I get console log.
  //  nothing will happen until i get the data back.
  }

// Send request to server. Make when I click button.
request.send();

// Begin accessing JSON data here
let data = JSON.parse(this.response);

data.forEach(temperature => {
  console.log(temperature);
  // QUESTION I want to console.log Dark Sky's temperature key. Correct?
});

// Some ideas from https://github.com/deanbot/dark-sky-api

DarkSkyApi.loadCurrent()
  .then(result => console.log(result));


//Amina's random number generator and IF statements for temperature
function generateRandomNumber() {
    let rand = Math.floor((Math.random() * 35) + (-10));
    document.getElementById("demo").innerHTML = rand;

if (rand < 14) {
    document.getElementById("advice").innerHTML = "Jacket";
} else if (rand < 25) {
    document.getElementById("advice").innerHTML = "T-shirt";
} else {
    document.getElementById("advice").innerHTML = "Vest";
}
}
