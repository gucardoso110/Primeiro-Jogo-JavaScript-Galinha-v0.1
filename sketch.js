

//AQUI COMEÇA O JOGO
function setup() {
  createCanvas(500, 400);
  outputVolume(0.2);
  audioTrilha.loop();
}

function draw() {
  background(fundo);
  player1();
  mostraCarros();
  movPlayer1();
  movCarro();
  resetCarro();
  verificaColisaoP1();
  pontosPlayer1();
  marcarPontosP1();
 // limitePontos();
}

