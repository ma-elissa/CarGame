function setup() {
  createCanvas(6130, 2800);
  somDaTrilha.loop();
  somDaTrilha.setVolume(0.3);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  verificaColisãoAtor();
  mostraCarros();
  movimentaCarros();
  carrosEmLoop();
  placar();
  pontos();
}