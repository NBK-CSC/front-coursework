function myFunction() {
    var x = document.getElementById("Head");
    if (x.className === "head") {
        x.className += " responsive";
    } else {
        x.className = "head";
    }
}