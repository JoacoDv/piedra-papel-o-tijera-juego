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
        imgPapelPlayer.classList.add("tie-img");
        imgPiedraPlayer.classList.add("tie-img");
        imgTijeraPlayer.classList.add("tie-img");
        imgPapelPc.classList.add("tie-img");
        imgPiedraPc.classList.add("tie-img");
        imgTijeraPc.classList.add("tie-img");
    } 
    else if (playing === "piedra" && pcPlaying === "tijera" || 
        playing === "papel" && pcPlaying === "piedra" ||
        playing === "tijera" && pcPlaying === "papel"
    ){
        resultPlay.innerText = `Ganaste esta ronda, elegiste ${playing} y la Pc eligio ${pcPlaying}.`;
        pcChoise(pcPlaying);
        imgPapelPlayer.classList.add("winner-img");
        imgPiedraPlayer.classList.add("winner-img");
        imgTijeraPlayer.classList.add("winner-img");
        imgPapelPc.classList.add("lost-img");
        imgPiedraPc.classList.add("lost-img");
        imgTijeraPc.classList.add("lost-img");
        scorePlayer++;
        scorePlayerText.innerText = scorePlayer;
        if (scorePlayer === 3){
            textWinner.innerText = "Ganaste ¿Quieres jugar de nuevo?";
            controls.style.display = 'none';
            buttonReset.style.display = "inline";
        }
    } 
    else {
        resultPlay.innerText = `Perdiste esta ronda, elegiste ${playing} y la Pc eligio ${pcPlaying}`;
        pcChoise(pcPlaying);
        imgPapelPlayer.classList.add("lost-img");
        imgPiedraPlayer.classList.add("lost-img");
        imgTijeraPlayer.classList.add("lost-img");
        imgPapelPc.classList.add("winner-img");
        imgPiedraPc.classList.add("winner-img");
        imgTijeraPc.classList.add("winner-img");
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
        imgTijeraPc.style.display = "block";
    }
}

const resetImg = () => {
    imgPapelPc.style.display = "none";
    imgPiedraPc.style.display = "none";
    imgTijeraPc.style.display = "none";
    imgPapelPlayer.style.display = "none";
    imgPiedraPlayer.style.display = "none";
    imgTijeraPlayer.style.display = "none";
    imgPapelPlayer.classList.remove("tie-img");
    imgPiedraPlayer.classList.remove("tie-img");
    imgTijeraPlayer.classList.remove("tie-img");
    imgPapelPc.classList.remove("tie-img");
    imgPiedraPc.classList.remove("tie-img");
    imgTijeraPc.classList.remove("tie-img");
    imgPapelPlayer.classList.remove("winner-img");
    imgPiedraPlayer.classList.remove("winner-img");
    imgTijeraPlayer.classList.remove("winner-img");
    imgPapelPc.classList.remove("winner-img");
    imgPiedraPc.classList.remove("winner-img");
    imgTijeraPc.classList.remove("winner-img");
    imgPapelPlayer.classList.remove("lost-img");
    imgPiedraPlayer.classList.remove("lost-img");
    imgTijeraPlayer.classList.remove("lost-img");
    imgPapelPc.classList.remove("lost-img");
    imgPiedraPc.classList.remove("lost-img");
    imgTijeraPc.classList.remove("lost-img");
}



buttonPiedra.addEventListener("click", () => {     
    resetImg();
    play("piedra", pcPlay());
    imgPiedraPlayer.style.display = "block";
});
buttonPapel.addEventListener("click", () => {     
    resetImg();
    play("papel", pcPlay());
    imgPapelPlayer.style.display = "block";
});
buttonTijera.addEventListener("click", () => {     
    resetImg();
    play("tijera", pcPlay());
    imgTijeraPlayer.style.display = "block";
});
buttonReset.addEventListener("click", () => {
    reset();
    resetImg();
})


