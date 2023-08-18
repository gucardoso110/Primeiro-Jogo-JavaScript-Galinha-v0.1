let fundo;
let galinha;
let carro_1;
let carro_2; 
let carro_3; 
let carro_4; 
let carro_5; 
let carro_6; 

let audioTrilha;
let audioMorreu;
let audioPontos;

function preload(){
  fundo   = loadImage("imagens/fundo.png");
  galinha = loadImage("imagens/galinha.png")
  carro_1 = loadImage("imagens/carro_1.png");
  carro_2 = loadImage("imagens/carro_2.png");
  carro_3 = loadImage("imagens/carro_3.png");
  carro_4 = loadImage("imagens/carro_4.png");
  carro_5 = loadImage("imagens/carro_5.png");
  carro_6 = loadImage("imagens/carro_6.png");
  carros  = [carro_1, carro_2, carro_3, carro_4, carro_5, carro_6]
  
  audioTrilha = loadSound("sons/trilha.mp3");
  audioMorreu = loadSound("sons/colidiu.mp3");
  audioPontos = loadSound("sons/pontos.wav");
}