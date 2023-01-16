var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button.sound")

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        licuadora.classList.add("active")
        console.log("me prendiste")
    } else {
        estadoLicuadora = "apagada"
        console.log("me apagaste");
        licuadora.classList.remove("active")
    }
}