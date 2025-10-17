let turno = "X"; 
let ganadasX = 0;
let ganadasO = 0;

const celdas = document.querySelectorAll(".celda");
const marcadorX = document.getElementById("ganadasX");
const marcadorO = document.getElementById("ganadasO");
const mensajeTurno = document.getElementById("turno");

celdas.forEach(celda => {
    celda.addEventListener("click", function() {
        if (celda.innerText === "") { 
            celda.innerText = turno;
            if (hayGanador()) {
                alert("Gana: " + turno);
                if (turno === "X") ganadasX++;
                else ganadasO++;
                actualizarMarcador();
                reiniciarTablero();
            } else {
                cambiarTurno();
            }
        }
    });
});

function cambiarTurno() {
    turno = (turno === "X") ? "O" : "X";
    mensajeTurno.innerText = "Turno de: " + turno;
}

function hayGanador() {
    const combos = [
        [0,1,2],[3,4,5],[6,7,8], 
        [0,3,6],[1,4,7],[2,5,8], 
        [0,4,8],[2,4,6]          
    ];

    for (let i = 0; i < combos.length; i++) {
        const a = combos[i][0];
        const b = combos[i][1];
        const cIndex = combos[i][2];

        const valorA = celdas[a].innerText;
        const valorB = celdas[b].innerText;
        const valorC = celdas[cIndex].innerText;

        if (valorA !== "" && valorA === valorB && valorA === valorC) {
            return true;
        }
    }
    return false;
}

function reiniciarTablero() {
    celdas.forEach(celda => celda.innerText = "");
    turno = "X";
    mensajeTurno.innerText = "Turno de: " + turno;
}

function actualizarMarcador() {
    marcadorX.innerText = ganadasX;
    marcadorO.innerText = ganadasO;
}
