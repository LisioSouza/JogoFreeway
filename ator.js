//ator
let xAtor = 240;
let yAtor = 368;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}
function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor < 368)
    yAtor += 3;
  }
}
function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor,15);
    if (colisao) {
      yAtor = 368;
      somColisao.play();
      if(colisao && meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}
function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0));
  text(meusPontos, width / 4, 27);
}
function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    yAtor = 368;
    somPontos.play();
  }
}
