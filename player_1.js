//Var Player
let vel = 2;
let velPlayer1X = vel;
let velPlayer1Y = vel;
let xPlayer1 = 40;
let yPlayer1 = 369;
let larguraP1 = 22;
let alturaP1 = 24;
let margHitP1x = 3;
let margHitP1y = 3;

let colisaoP1 = false;


//Pontos
let pontosP1 = 0;



function player1(){
  //rect(xPlayer1 + margHitP1x, yPlayer1 + margHitP1y, larguraP1, alturaP1);
  image(galinha, xPlayer1, yPlayer1);
  
}

function movPlayer1(){
  if (keyIsDown(UP_ARROW)){
      yPlayer1 -= velPlayer1Y;
  }
  if(keyIsDown(DOWN_ARROW)){
      yPlayer1 += velPlayer1Y; 
  }
   if (keyIsDown(LEFT_ARROW)){
      xPlayer1 -= velPlayer1X;
  }
  if (keyIsDown(RIGHT_ARROW)){
      xPlayer1 += velPlayer1X;
  }
 xPlayer1 = constrain(xPlayer1, 3, 470);
 yPlayer1 = constrain(yPlayer1, 0, 369);
}

function posP1inicio(){
  xPlayer1 = 40;
  yPlayer1 = 369;
}

function verificaColisaoP1(){
  for(let i = 0; i < carros.length; i++){
    colisaoP1 = collideRectRect(xCarros[i] + margemHitx, yCarros[i] + margemHity, larguraCarros, alturaCarros, xPlayer1 + margHitP1x, yPlayer1+ margHitP1y, larguraP1, alturaP1)
    if(colisaoP1){
      posP1inicio();
      audioMorreu.play();
      //print("colidiu");
      if (pontosP1MaiorZero()){
        pontosP1 -= 1;
      }
    }
  }
}

function pontosPlayer1(){
  textAlign(CENTER);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(3);
  text(pontosP1, 27, 27);
}

function marcarPontosP1(){
  if (yPlayer1 < 5){
    posP1inicio();
    audioPontos.play();
    pontosP1 += 1;
    
  }
}

/*function limitePontos(){
  rect(0, 5, width, 2);
}*/

function pontosP1MaiorZero(){
  return pontosP1 > 0;
}
