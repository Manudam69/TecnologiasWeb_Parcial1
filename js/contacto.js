function changeFont(font) {
    var fuente = document.getElementById("text_Body").style.fontFamily = font.value;
    sessionStorage.setItem('fuentes', fuente);
}

function size() {
    var size = 200;
    document.getElementById("text_Body").style.fontSize = size;
}

function sizePlus() {
    var size = 30;
    document.getElementById("text_Body").style.fontSize = size;

}

function changeBG(color) {
    var bg = document.getElementById("text_Body").style.backgroundColor = color.value;
    sessionStorage.setItem('Color', bg);
}

function comprueba() {
    var fuente = sessionStorage.getItem('fuentes');
    if (fuente !== null) {
        document.getElementById("text_Body").style.fontFamily = fuente;
    } else if (fuente === null) {

    }
    var bg = sessionStorage.getItem('Color');
    if (bg !== null) {
        document.getElementById("text_Body").style.backgroundColor = bg;
    } else if (bg === null) {

    }
    
    var fc = sessionStorage.getItem('colorFont');
    if (fc !== null) {
        document.getElementById("text_Body").style.color = fc;
    } else if (fc === null) {

    }
}

function colorFont(color){
     var cf = document.getElementById("text_Body").style.color = color.value;
    sessionStorage.setItem('colorFont', cf);
}

window.addEventListener('load', comprueba, true);
