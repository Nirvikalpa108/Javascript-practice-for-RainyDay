requirejs(["./config"], function(config) {
function getAdvice(temp, wind) {
  var myAdvice = document.getElementById("advice")
    if (temp > 26 && wind < 10) {
    myAdvice.innerHTML="T-shirt";
    } else if (15 < temp < 25 && wind < 10) {
      myAdvice.innerHTML = "Jersey"; 
    } else if (!(temp <= 14) && 11 < wind < 24) {
      myAdvice.innerHTML = "Jersey";
    } else {
      myAdvice.innerHTML = "Jacket";
    }
}
function loadXMLDoc() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    var temp = myObj.main.temp;
    var wind = myObj.wind.speed;
    document.getElementById("temperature").innerHTML = temp;
    document.getElementById("wind").innerHTML = wind;
    getAdvice(temp, wind);
    }  
  }
request.open("GET", config.YOUR_API_KEY, true);
request.onload = function () {
console.log("API send request working")
}
request.send();
}
window.loadXMLDoc=loadXMLDoc;
});
