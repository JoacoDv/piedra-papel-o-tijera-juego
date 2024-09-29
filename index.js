const scorePcText = document.querySelector(".score-number-pc");
const scorePlayerText = document.querySelector(".score-player-number");
const resultPlay = document.querySelector(".result-play");
const buttonPiedra = document.querySelector(".btn-piedra");
const buttonPapel = document.querySelector(".btn-papel");
const buttonTijera = document.querySelector(".btn-tijera");
const textWinner = document.querySelector(".winner");
const winner = document.querySelector(".winner");
const arrChoise = ["piedra", "papel", "tijera"];
let scorePc = 0;
let scorePlayer = 0;

function play(playing, pcPlaying) {
    if (playing === pcPlaying){
        resultPlay.innerText = `Ambos eligieron ${playing}. Es un empate.`;
    } else if (playing === "piedra" && pcPlaying === "tijera" || 
        playing === "papel" && pcPlaying === "piedra" ||
        playing === "tijera" && pcPlaying === "papel"
    ){
        resultPlay.innerText = `Ganaste, elegiste ${playing} y la Pc eligio ${pcPlaying}.`;
        scorePlayer++;
        scorePlayerText.innerText = scorePlayer;
        if (scorePlayer = 3){
            winner.innerText = "Ganaste";
        }
    } else {
        resultPlay.innerText = `Perdiste, elegiste ${playing} y la Pc eligio ${pcPlaying}`;
        scorePc++;
        scorePcText.innerText = scorePc;
        if (scorePc = 3){   
            winner.innerText = "Perdiste";
        }
    }
}

function pcPlay() {
    const playing = arrChoise[Math.floor(Math.random() * 3)];
    return playing;
}


