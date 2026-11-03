let cuadrados = document.querySelectorAll(".square");
let colorDisplay =
    document.querySelector("#colorDisplay");
let mensaje = document.querySelector("#message");
let titulo = document.querySelector("h1");
let botonReset = document.querySelector("#reset");
let botonFacil = document.querySelector("#easy");
let botonDificil = document.querySelector("#hard");


function colorAleatorio() {
    let numero1 = Math.floor(Math.random() * 256);
    let numero2 = Math.floor(Math.random() * 256);
    let numero3 = Math.floor(Math.random() * 256);
    return "rgb(" + numero1 + ", " + numero2 + ", " + numero3 + ")";
}

function generarColores(cantidad) {
    const nuevosColores = [];
    for (let i = 0; i < cantidad; i++) {
        nuevosColores.push(colorAleatorio());
    }
    return nuevosColores;
}

function adivinar(Numero) {
    if (adivinar[Numero] === coloresGanador) {
        console.log("ganaste");
    } else {
        console.log("perdiste, intentalo de nuevo");
    }
}

let juego = {
    colores: [],
    colorGanador: "",
    intentos: 0,
    terminado: false,
}

function nuevoJuego(modo) {
    if (modo === "facil") {
        juego.colores = generarColores(3);
    }

    if (modo === "dificil") {
        juego.colores = generarColores(6);
    }

    juego.colorGanador = juego.colores[
        Math.floor(Math.random() * juego.colores.length)
    ];

    juego.intentos = 0;
    juego.terminado = false;
}

function adivinarColor(indice) {

    if (juego.terminado === true) {
        console.log("El juego terminó. Usá nuevoJuego()");
        return;
    }

    juego.intentos++;

    if (juego.colores[indice] === juego.colorGanador) {
        juego.terminado = true;
        console.log("¡Correcto! en " + juego.intentos + " intentos");
        cuadrados.forEach(function(cuadrados, index ) {
            cuadrados.style.juego["colorGanador"]
        });
    } else {
        console.log("Incorrecto, intentá de nuevo");
        cuadrados.forEach(function(cuadrados, index){
            cuadrados.style.null
        })
    }



}

function píntarTablero() {
    for (let i = 0; i < cuadrados.length; i++) {
        if (juego.colores[i]){
            cuadrados[i].style.backgroundColor = juego.colores[i];
        cuadrados[i].style.display = "block";
    }else {
    cuadrados[i].style.display = "none";
    }
    colorDisplay.textContent = juego.colorGanador;
}
}

for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].addEventListener("click", function () {
        adivinar(i + 1);
    });
}


