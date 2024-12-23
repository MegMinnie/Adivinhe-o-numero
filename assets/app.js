const botao = document.querySelector("button");
const saida = document.querySelector(".saida");
const inputPalpite = document.querySelector(`input[type="number"]`);
const numeroTentativa = document.querySelector(`.numero-tentativa`);
const borda = document.querySelector(`main`);

let numeroSorteado = 0;
let msg;
let tentativas = 0;
const maxTentativas = 10;

function sortear() {
  let min = 1;
  let max = 100;
  let dif = max - min;
  let aleatorio = Math.random();
  numeroSorteado = min + Math.trunc(dif * aleatorio);
}

sortear();

botao.addEventListener("click", function jogar() {
  const palpite = Number(inputPalpite.value);
  tentativas += 1;

  if (palpite < numeroSorteado) {
    msg = `Seu palpite está muito baixo!`;
    borda.style.border = "5px solid red";
    botao.innerHTML = `Errado!`;
    botao.style.backgroundColor = `red`;
    botao.style.width = `70%`;
    numeroTentativa.innerHTML = `Números de tentativas: ${tentativas}`;
  } else if (palpite > numeroSorteado) {
    msg = `Seu palpite está muito alto!`;
    borda.style.border = "5px solid red";
    botao.style.backgroundColor = `red`;
    botao.style.width = `70%`;
    botao.innerHTML = `Errado!`;
    numeroTentativa.innerHTML = `Número de tentativas: ${tentativas}`;
  } else {
    msg = `Parabéns, você acertou!`;
    borda.style.border = "5px solid green";
    botao.innerHTML = `Fim do jogo!`;
    botao.style.backgroundColor = `green`;
    botao.style.width = `70%`;
    tentativas = 0;
    sortear();
  }

  if (tentativas >= maxTentativas && palpite !== numeroSorteado) {
    msg = `Você atingiu o limite de tentativas, o número era ${numeroSorteado}. Fim do jogo!`;
    tentativas = 0;
    borda.style.border = "5px solid red";
    botao.innerHTML = `Fim do jogo!`;
    botao.style.backgroundColor = `red`;
    botao.style.width = `70%`;

    sortear();
  }

  saida.innerHTML = `<b>Você falou ${palpite}. ${msg}</b>`;
});
