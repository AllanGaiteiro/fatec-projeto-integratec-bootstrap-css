
var posX = 0, posY = 0;
var obj = [
    document.getElementById("coler"),
    document.getElementById("processador"),
    document.getElementById("placaVideo")
]



function iniciarColer(e) {

    posX = e.pageX - obj[0].offsetLeft;

    posY = e.pageY - obj[0].offsetTop;

    /* adiciona os eventos */
    addEventListener("mousemove", mover);
    addEventListener("mouseup", parar);
}

/* ao ser arrastado */
function mover(e) {
    /* atualiza a posição do elemento */
        obj[0].style.left = (2 + e.pageX - posX) + 'px'
        obj[0].style.top = (e.pageY - posY) + 'px'
        

}

/* ao terminar o drag */
function parar() {
    /* remove os eventos */

    removeEventListener("mousemove", mover);
    removeEventListener("mouseup", parar);
}

/* adiciona o evento que começa o drag */
for (let i = 0; i < obj.length; i++) {

    obj[0].addEventListener("mousedown", iniciarColer);
    obj[1].addEventListener("mousedown", iniciarProc);
    obj[2].addEventListener("mousedown", iniciarVideo);
}

