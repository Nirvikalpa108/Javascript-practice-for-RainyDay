function loadXMLDoc() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
          document.getElementById("temperature").innerHTML =
          myObj.main.temp;
          document.getElementById("wind").innerHTML =
          myObj.wind.speed;

          if (myObj.main.temp > 25 && myObj.wind.speed < 10) {
            document.getElementById("advice").innerHTML = "T-shirt";
          } else if (myObj.main.temp < 25 > 15 && myObj.wind.speed < 10) {
            document.getElementById("advice").innerHTML = "Jersey"; 
          } else if ((!myObj.main.temp <= 14) && myObj.wind.speed < 24 > 11) {
            document.getElementById("advice").innerHTML = "Jersey";
          } else {
            document.getElementById("advice").innerHTML = "Jacket";
          }
      }
    };
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b626cf4076aabf3d744469a9ed262f07&units=metric", true);
    // Console log at onload means I know as soon as some data comes back.
    request.onload = function () {
      console.log("API send request working")
    }
    request.send();
  }
  

