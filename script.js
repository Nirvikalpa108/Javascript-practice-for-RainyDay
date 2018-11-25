function loadXMLDoc() {
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  var myObj = JSON.parse(this.responseText);
  document.getElementById("temperature").innerHTML = myObj.main.temp;
  document.getElementById("wind").innerHTML = myObj.wind.speed;

    if (myObj.main.temp > 25 && myObj.wind.speed < 10) {
    document.getElementById("advice").innerHTML = "T-shirt";
    } else if (myObj.main.temp < 25 > 15 && myObj.wind.speed < 10) {
    document.getElementById("advice").innerHTML = "Jersey"; 
    } else if (!(myObj.main.temp <= 14) && myObj.wind.speed < 24 > 11) {
    document.getElementById("advice").innerHTML = "Jersey";
    } else {
    document.getElementById("advice").innerHTML = "Jacket";
    }
  }
};
    //getting ERROR unexpected identifier
    import {YOUR_API_KEY} from "config.js";
    console.log (YOUR_API_KEY)

    request.open("GET", "YOUR_API_KEY", true);
    request.onload = function () {
      console.log("API send request working")
    }
    request.send();
  }
