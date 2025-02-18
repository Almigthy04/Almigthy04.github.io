const btnNo = document.querySelector("#btn-random"); 
const btnSi = document.querySelector("#btn-yes"); 
let size = 16; // Variable global para que siga creciendo

function agrandarBoton() {
    size += 10;
    btnSi.style.fontSize = size + "px";
    btnSi.style.padding = (size / 2) + "px " + size + "px";
}

btnNo.addEventListener("click", agrandarBoton);