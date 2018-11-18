function loadXMLDoc() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    request.open("GET", "API goes here", true);
    // Onload, means upon receiving response. As soon as some data comes back, I get console log.
    request.onload = function () {
      console.log("API send request working")
      }
    // request.send is sending the request to the server, so I could do this after button click
    request.send();
  }

  //not sure if I still need this? Begin accessing JSON data here
let data = JSON.parse(this.response);

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