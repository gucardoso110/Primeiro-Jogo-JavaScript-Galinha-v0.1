//Var Carros

let xCarros = [550, 500, 510, 520, 530, 600];
let yCarros = [316, 259, 205, 150, 99, 43];
let velCarros = [5, 3, 8, 4.2, 6, 5];
let larguraCarros = 60;
let alturaCarros = 28;
let margemHitx = 3
let margemHity = 4

function mostraCarros(){
  for (let i = 0; i < carros.length; i++){
    
    image(carros[i], xCarros[i], yCarros[i]);
   // rect(xCarros[i] + margemHitx, yCarros[i] + margemHity, larguraCarros, alturaCarros);
  }
}

function movCarro(){
  for (let i = 0; i < carros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}
function resetCarro(){
  for (let i = 0; i < carros.length; i++){
    if(passouTela(xCarros[i])){
      xCarros[i] = 550;
    }
  }
}

function passouTela(xCarros){
  return xCarros <= -150;
}