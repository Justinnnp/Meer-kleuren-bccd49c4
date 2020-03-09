function change() {

    var theInput = document.getElementById("favColor");
    var theColor = theInput.value;

    document.getElementById("color").style.backgroundColor = theColor;
}