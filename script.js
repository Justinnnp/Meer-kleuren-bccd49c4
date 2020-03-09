var bgColor;
var tColor;
function bgStore() {
    var bgInput = document.getElementById("favColor");
    bgColor = bgInput.value;
}

function tStore() {
    var tInput = document.getElementById("favColor");
    tColor = tInput.value;
}

function change() {
    document.getElementById("color").style.backgroundColor = bgColor;
    document.getElementById("h1Color").style.color = tColor;
}