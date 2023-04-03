let xCarros = [8000, 8000, 8000, 8000, 8000, 8000];
let yCarros = [295, 710, 1060, 1480, 1860, 2210];
let lCarros = 600;
let hCarros = 280;
let velocidadeCarros = [29, 58.5, 45.2, 70, 60.7, 40.9]

function mostraCarros() {
  for (let i = 0; i < imagensCarros.length; i = i + 1) {
    image(imagensCarros[i], xCarros[i], yCarros[i], lCarros, hCarros);
  }
}

function movimentaCarros() {
  for (let i = 0; i < imagensCarros.length; i = i + 1) {
    xCarros[i] -= velocidadeCarros[i]; 
  }
}

function carrosEmLoop() {
  for (let i = 0; i < imagensCarros.length; i = i + 1) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 7050;
    }
  }
} 

function passouTodaTela(xCarro) {
  return xCarro < -550;
}
