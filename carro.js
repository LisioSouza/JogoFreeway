//variáveis do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 98, 152, 210, 265, 320];
let velocidadeCarros = [2.1, 2.9, 3.6, 3.1, 2.6, 2.2];
let comprimentoCarros = 40;
let alturaCarros = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros,
      alturaCarros
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicialCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaPista(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}
function passouTodaPista(xCarros) {
  return xCarros < -40;
}
