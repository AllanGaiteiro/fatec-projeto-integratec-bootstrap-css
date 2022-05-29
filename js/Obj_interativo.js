


///var name = ['coler', 'processador', 'placaVideo']
var posX = [0, 0, 0], posY = [0, 0, 0]
var obj = [
    document.getElementById("coler"),
    document.getElementById("processador"),
    document.getElementById("placaVideo")
]
function iniciarColer(e) {
    posX[0] = e.pageX - obj[0].offsetLeft
    posY[0] = e.pageY - obj[0].offsetTop
    obj[0].style.zIndex = 10
    addEventListener("mousemove", moverColer)
    var parar = addEventListener("mouseup", function () {
        obj[0].style.zIndex = 3
        removeEventListener("mousemove", moverColer)
        obj[0].removeEventListener('click', parar, false)
    });
}
function iniciarProc(e) {
    posX[1] = e.pageX - obj[1].offsetLeft
    posY[1] = e.pageY - obj[1].offsetTop
    obj[1].style.zIndex = 10

    addEventListener("mousemove", moverProc)
    var parar = addEventListener("mouseup", function () {
        obj[0].style.zIndex = 4
        removeEventListener("mousemove", moverProc)
        obj[1].removeEventListener('click', parar, false)
    });
}
function iniciarVideo(e) {
    posX[2] = e.pageX - obj[2].offsetLeft;
    posY[2] = e.pageY - obj[2].offsetTop;
    obj[2].style.zIndex = 10
    addEventListener("mousemove", moverVideo);
    var parar = addEventListener("mouseup", function () {
        obj[0].style.zIndex = 5
        removeEventListener("mousemove", moverVideo)
        obj[1].removeEventListener('click', parar, false)
    });
}

function moverColer(e) {
    let colerX = (e.pageX - posX[0])
    let colerY = (e.pageY - posY[0])
    colerX = Math.max(0, Math.min(1060 - 345, colerX))
    colerY = Math.max(0, Math.min(560 - 150, colerY))
    obj[0].style.left = colerX + 'px'
    obj[0].style.top = colerY + 'px'
}

function moverProc(e) {
    let colerX = (e.pageX - posX[1])
    let colerY = (e.pageY - posY[1])
    colerX = Math.max(0, Math.min(1060 - 330, colerX))
    colerY = Math.max(0, Math.min(560 - 195, colerY))
    obj[1].style.left = colerX + 'px'
    obj[1].style.top = colerY + 'px'
}
function moverVideo(e) {
    let colerX = (e.pageX - posX[2])
    let colerY = (e.pageY - posY[2])
    colerX = Math.max(0, Math.min(1060 - 330, colerX))
    colerY = Math.max(0, Math.min(560 - 185, colerY))
    obj[2].style.left = colerX + 'px'
    obj[2].style.top = colerY + 'px'
}


obj[0].addEventListener("mousedown", iniciarColer)
obj[1].addEventListener("mousedown", iniciarProc)
obj[2].addEventListener("mousedown", iniciarVideo)


