

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
