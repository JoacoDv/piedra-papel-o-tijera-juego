// IMAGENES

const imgPiedraPc = document.querySelector(".pc-piedra-img");
const imgPapelPc = document.querySelector(".pc-papel-img");
const imgTijeraPc = document.querySelector(".pc-tijera-img");
const imgPiedraPlayer = document.querySelector(".player-piedra-img");
const imgPapelPlayer = document.querySelector(".player-papel-img");
const imgTijeraPlayer = document.querySelector(".player-tijera-img");

// BOTONES Y TEXTO
const scorePcText = document.querySelector(".score-number-pc");
const scorePlayerText = document.querySelector(".score-player-number");
const resultPlay = document.querySelector(".result-play");
const buttonPiedra = document.querySelector(".btn-piedra");
const buttonPapel = document.querySelector(".btn-papel");
const buttonTijera = document.querySelector(".btn-tijera");
const buttonReset = document.querySelector(".btn-reset");
const controls = document.querySelector(".controls")
const textWinner = document.querySelector(".winner");
const winner = document.querySelector(".winner");
const arrChoise = ["piedra", "papel", "tijera"];
let scorePc = 0;
let scorePlayer = 0;

function pcPlay() {
    const playing = arrChoise[Math.floor(Math.random() * 3)];
    return playing;
}

function play(playing, pcPlaying) {
    if (playing === pcPlaying){
        resultPlay.innerText = `Ambos eligieron ${playing}. Es un empate.`;
        
    } else if (playing === "piedra" && pcPlaying === "tijera" || 
        playing === "papel" && pcPlaying === "piedra" ||
        playing === "tijera" && pcPlaying === "papel"
    ){
        resultPlay.innerText = `Ganaste esta ronda, elegiste ${playing} y la Pc eligio ${pcPlaying}.`;
        scorePlayer++;
        scorePlayerText.innerText = scorePlayer;
        if (scorePlayer === 3){
            textWinner.innerText = "Ganaste ¿Quieres jugar de nuevo?";
            controls.style.display = 'none';
            buttonReset.style.display = "inline";
        }
    } else {
        resultPlay.innerText = `Perdiste esta ronda, elegiste ${playing} y la Pc eligio ${pcPlaying}`;
        scorePc++;
        scorePcText.innerText = scorePc;
        if (scorePc === 3){   
            textWinner.innerText = "Perdiste ¿Quieres jugar de nuevo?";
            controls.style.display = "none";
            buttonReset.style.display = "inline";
        }
    }
}

function reset() {
    scorePc = 0;
    scorePlayer = 0;
    scorePcText.innerText = scorePc;
    scorePlayerText.innerText = scorePlayer;
    resultPlay.innerText = " ";
    textWinner.innerText = " ";
    controls.style.display = "inline";
    buttonReset.style.display = "none";
}

buttonPiedra.addEventListener("click", function () { play("piedra", pcPlay())});
buttonPapel.addEventListener("click", function () { play("papel", pcPlay())});
buttonTijera.addEventListener("click", function () { play("tijera", pcPlay())});
buttonReset.addEventListener("click", function () {reset()})

