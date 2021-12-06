/*window.onload = function() {
    document.getElementById('linkinclr').onclick = function() {
      document.getElementById("clrmen").style.backgroundColor = "#f2f1ec";
      return false;
    }
    document.getElementById('linkinclr2').onclick = function() {
      document.getElementById("clrmen").style.backgroundColor = "#374157";
      return false;
    }
    document.getElementById('linkinclr3').onclick = function() {
      document.getElementById("clrmen").style.backgroundColor = "#A6A6A6";
      return false;
    }
    document.getElementById('linkinclr4').onclick = function() {
      document.getElementById("clrmen").style.backgroundColor = "#93ace4";
      return false;
    }
}*/

function none() {
    if (document.getElementById('none').checked){
        let elements=document.querySelectorAll('img');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "";
        }
    }
}
function first() {
    if (document.getElementById('first').checked){
        let elements=document.querySelectorAll('img');
        for (let i = 0; i < elements.length; i++) {
            if(elements[i].id!="glasses"){
                elements[i].style.filter = "sepia(60%)";
            }
        }
    }
}
function second() {
    if (document.getElementById('second').checked){
        let elements=document.querySelectorAll('img');
        for (let i = 0; i < elements.length; i++) {
            if(elements[i].id!="glasses"){
                elements[i].style.filter = "grayscale(80%)";
            }
        }
    }
}

/*
window.onload = function() {
    document.getElementById('none').onclick = function() {
        if (document.getElementById('none').checked){
        let elements=document.querySelectorAll('img');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "";
        } 
    }
      return false;
    }
    document.getElementById('first').onclick = function() {
        if (document.getElementById('first').checked){
        let elements=document.querySelectorAll('img');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "sepia(30%)";
        } 
    }
      return false;
    }
    document.getElementById('second').onclick = function() {
        if (document.getElementById('second').checked){
        let elements=document.querySelectorAll('img');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "grayscale(50%)";
        } 
    }
      return false;
    }
}
*/