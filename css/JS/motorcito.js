var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound")

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerbrbrbr();
        licuadora.classList.add("active")
        console.log("me prendiste")
    } else {
        estadoLicuadora = "apagada"
        console.log("me apagaste");
        hacerbrbrbr();
        licuadora.classList.remove("active")
    }
    function hacerbrbrbr(){
        if(sonidoLicuadora.paused) {
            botonLicuadora.play();
            sonidoLicuadora.play();
        } else {
            botonLicuadora.play();
            sonidoLicuadora.pause();
            sonidoLicuadora.currentTime = 0;
        }
    }
}