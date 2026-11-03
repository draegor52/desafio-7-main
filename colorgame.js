
let cuadrados = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let mensaje = document.querySelector("#message");
let titulo = document.querySelector("h1");
let botonReset = document.querySelector("#reset");
let botonFacil = document.querySelector("#easy");
let botonDificil = document.querySelector("#hard");

let modoActual = "dificil";

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

let juego = {
    colores: [],
    colorGanador: "",
    intentos: 0,
    terminado: false,
};

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

    pintarTablero();
}

function pintarTablero() {

    for (let i = 0; i < cuadrados.length; i++) {

        if (juego.colores[i]) {
            cuadrados[i].style.backgroundColor = juego.colores[i];
            cuadrados[i].style.display = "block";
        } else {
            cuadrados[i].style.display = "none";
        }
    }

    colorDisplay.textContent = juego.colorGanador;
}

function adivinarColor(indice) {

    if (juego.terminado === true) {
        return;
    }

    juego.intentos++;

    if (juego.colores[indice] === juego.colorGanador) {

        juego.terminado = true;

        console.log("¡Correcto! en " + juego.intentos + " intentos");

        cambiarColores(juego.colorGanador);

        titulo.style.backgroundColor = juego.colorGanador;

        mensaje.textContent = "¡Correcto!";

    } else {

        cuadrados[indice].style.backgroundColor = "#232323";
        cuadrados[indice].style.display = "none";

        mensaje.textContent = "Intentalo nuevamente";
    }
}

function cambiarColores(color) {

    cuadrados.forEach(function(cuadrado) {
        cuadrado.style.backgroundColor = color;
        cuadrado.style.display = "block";
    });
}

for (let i = 0; i < cuadrados.length; i++) {

    cuadrados[i].addEventListener("click", function() {
        adivinarColor(i);
    });
}

function reset() {

    nuevoJuego(modoActual);

    mensaje.textContent = "";
    botonReset.textContent = "Nuevos Colores";
    titulo.style.backgroundColor = "";
}

botonReset.addEventListener("click", function() {
    reset();
});

botonFacil.addEventListener("click", function() {

    botonFacil.classList.add("selected");
    botonDificil.classList.remove("selected");

    modoActual = "facil";

    nuevoJuego(modoActual);

    mensaje.textContent = "";
    titulo.style.backgroundColor = "";
});

botonDificil.addEventListener("click", function() {

    botonDificil.classList.add("selected");
    botonFacil.classList.remove("selected");

    modoActual = "dificil";

    nuevoJuego(modoActual);

    mensaje.textContent = "";
    titulo.style.backgroundColor = "";
});

// Iniciar el juego
nuevoJuego(modoActual);
