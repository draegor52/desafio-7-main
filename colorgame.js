
const colores = [
    "rgb(255, 0, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(128, 0, 128)",
    "rgb(255, 165, 0)",
];

for (let i = 0; i < colores.length; i++) {
    console.log("cuadrado " + (i + 1) + ":" + colores[i]);
}

let coloresGanador = colores[2];

console.log("adivina este color :" + coloresGanador);

function elegirColor() {
    for (let i = 0; i < colores.length; i++) {
        let indice = Math.floor(Math.random() * colores.length);
        return console.log(colores[indice])
    }
}

function colorAleatorio() {
    let numero1 = Math.floor(Math.random() * 256);
    let numero2 = Math.floor(Math.random() * 256);
    let numero3 = Math.floor(Math.random() * 256);
    return "rgb(" + numero1 + ", " + numero2 + ", " + numero3 + ")";
}

function generarColores(cantidad) {
    let nuevosColores = [];
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
    } else {
        console.log("Incorrecto, intentá de nuevo");
    }
}

