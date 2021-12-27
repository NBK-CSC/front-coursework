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
                elements[i].style.filter = "";
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
                elements[i].style.filter = "";
                elements[i].style.filter = "grayscale(80%)";
            }
        }
    }
}
