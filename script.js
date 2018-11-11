

function generateRandomNumber() {
    let rand = Math.floor((Math.random() * 35) + (-10));
    document.getElementById("demo").innerHTML = rand;

if (rand < 14) {
    document.getElementById("advice").innerHTML = "wear a jacket";
} else if (rand < 25) {
    document.getElementById("advice").innerHTML = "wear a t-shirt";
} else {
    document.getElementById("advice").innerHTML = "wear a vest";
}
}
