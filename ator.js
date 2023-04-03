let xAtor = 400;
let yAtor = 2620;
let lAtor = 220;
let hAtor = 170;

colisao = false;

let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, lAtor, hAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 35;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (limiteAtor()) {
      yAtor += 35;
    }
  }
}

function limiteAtor() {
  return yAtor < 2600;
}

function verificaColisãoAtor() {
  for (let i = 0; i < imagensCarros.length; i = i + 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], lCarros, hCarros, xAtor, yAtor, lAtor)
    if (colisao) {
      posisaoInicialDoAtor();
      somDaColisao.play();
    if (verificaPontos()) {
      meusPontos -= 1;
      }
    }
  }
}

function verificaPontos() {
  return meusPontos > 0;
}

function posisaoInicialDoAtor() {
  return yAtor = 2620;
}

function placar() {
  textAlign(CENTER);
  textSize(200);
  fill(color(255, 240, 60));
  text(meusPontos, width/5, 180);
}

function pontos() {
  if (yAtor < 20) {
    meusPontos += 1;
    posisaoInicialDoAtor();
    somDoPonto.play();
  }
}











