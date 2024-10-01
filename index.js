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
        pcChoise(pcPlaying);
    } else if (playing === "piedra" && pcPlaying === "tijera" || 
        playing === "papel" && pcPlaying === "piedra" ||
        playing === "tijera" && pcPlaying === "papel"
    ){
        resultPlay.innerText = `Ganaste esta ronda, elegiste ${playing} y la Pc eligio ${pcPlaying}.`;
        pcChoise(pcPlaying);
        scorePlayer++;
        scorePlayerText.innerText = scorePlayer;
        if (scorePlayer === 3){
            textWinner.innerText = "Ganaste ¿Quieres jugar de nuevo?";
            controls.style.display = 'none';
            buttonReset.style.display = "inline";
        }
    } else {
        resultPlay.innerText = `Perdiste esta ronda, elegiste ${playing} y la Pc eligio ${pcPlaying}`;
        pcChoise(pcPlaying);
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

function pcChoise(pcPlaying) {
    if (pcPlaying === "piedra"){
        imgPiedraPc.style.display = "block";
    }
    else if (pcPlaying === "papel") {
        imgPapelPc.style.display = "block";
    } 
    else {
        imgTijeraPc.display.style = "block";
    }
}

const resetImg = () => {
    imgPapelPc.style.display = "none";
    imgPiedraPc.style.display = "none";
    imgTijeraPc.style.display = "none";
    imgPapelPlayer.style.display = "none";
    imgPiedraPc.style.display = "none";
    imgTijeraPc.style.display = "none";
}



buttonPiedra.addEventListener("click", () => { 
    play("piedra", pcPlay());
    resetImg();
    imgPiedraPlayer.style.display = "block";
});
buttonPapel.addEventListener("click", () => { 
    play("papel", pcPlay());
    resetImg();
    imgPapelPlayer.style.display = "block";
});
buttonTijera.addEventListener("click", () => { 
    play("tijera", pcPlay());
    resetImg();
    imgTijeraPlayer.style.display = "block";
});
buttonReset.addEventListener("click", () => {
    reset();
    resetImg();
})

resetImg();
