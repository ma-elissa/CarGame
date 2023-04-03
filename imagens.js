let imagemEstrada; 
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somPontos;


function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator.png");
  imagemCarro1 = loadImage("imagens/carro1.png");
  imagemCarro2 = loadImage("imagens/carro2.png");
  imagemCarro3 = loadImage("imagens/carro3.png");
  imagensCarros = [imagemCarro1, imagemCarro2,imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav"); 
}