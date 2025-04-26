const botao = document.querySelector("button");
const saida = document.querySelector(".saida");
const inputPalpite = document.querySelector(`input[type="number"]`);
const numeroTentativa = document.querySelector(`.numero-tentativa`);
const borda = document.querySelector(`main`);

let numeroSorteado = 0;
let msg;
let tentativas = 0;
const maxTentativas = 10;
let fimDeJogo = false;
function sortear() {
    let min = 1;
    let max = 100;
    numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetarJogo() {
    tentativas = 0;
    fimDeJogo = false;
    sortear();
    borda.style.border = "none";
    botao.innerHTML = "Enviar Palpite";
    botao.style.backgroundColor = "";
    botao.style.width = "";
    inputPalpite.value = "";
    numeroTentativa.innerHTML = "";
    saida.innerHTML = "";
}

sortear();

botao.addEventListener("click", function jogar() {
    if (fimDeJogo) {
        resetarJogo();
        return;
    }

    const palpite = Number(inputPalpite.value);
    tentativas += 1;

    if (palpite < numeroSorteado) {
        msg = `Seu palpite está muito baixo!`;
        borda.style.border = "5px solid red";
        botao.innerHTML = `Errado!`;
        botao.style.backgroundColor = `red`;

        numeroTentativa.innerHTML = `Número de tentativas: ${tentativas}`;
    } else if (palpite > numeroSorteado) {
        msg = `Seu palpite está muito alto!`;
        borda.style.border = "5px solid red";
        botao.innerHTML = `Errado!`;
        botao.style.backgroundColor = `red`;

        numeroTentativa.innerHTML = `Número de tentativas: ${tentativas}`;
    } else {
        msg = `Parabéns, você acertou!`;
        borda.style.border = "5px solid green";
        botao.innerHTML = `Jogar Novamente`;
        botao.style.backgroundColor = `green`;
        fimDeJogo = true;
    }

    if (tentativas >= maxTentativas && palpite !== numeroSorteado) {
        msg = `Você atingiu o limite de tentativas, o número era ${numeroSorteado}. Fim do jogo!`;
        borda.style.border = "5px solid red";
        botao.innerHTML = `Jogar Novamente`;
        botao.style.backgroundColor = `red`;
        botao.style.width = `70%`;
        fimDeJogo = true;
    }

    saida.innerHTML = `<b>Você falou ${palpite}. ${msg}</b>`;
});
