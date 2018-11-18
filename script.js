function loadXMLDoc() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric,uk&APPID=b626cf4076aabf3d744469a9ed262f07", true);
    // Console log at onload means I know as soon as some data comes back.
    request.onload = function () {
      console.log("API send request working")
    }
    request.send();
  }

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