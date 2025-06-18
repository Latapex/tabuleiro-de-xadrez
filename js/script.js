var canvas = document.getElementById("meu_canvas");
var context = canvas.getContext("2d");

//inicio tabuleiro
context.fillStyle = "white";
context.fillRect(50, 50, 400, 400);
context.fillStyle = "grey";
//linha1
context.fillRect(100, 50, 50, 50);
context.fillRect(200, 50, 50, 50);
context.fillRect(300, 50, 50, 50);
context.fillRect(400, 50, 50, 50);
//linha2
context.fillRect(50, 100, 50, 50);
context.fillRect(150, 100, 50, 50);
context.fillRect(250, 100, 50, 50);
context.fillRect(350, 100, 50, 50);
//linha3
context.fillRect(100, 150, 50, 50);
context.fillRect(200, 150, 50, 50);
context.fillRect(300, 150, 50, 50);
context.fillRect(400, 150, 50, 50);
//linha4
context.fillRect(50, 200, 50, 50);
context.fillRect(150, 200, 50, 50);
context.fillRect(250, 200, 50, 50);
context.fillRect(350, 200, 50, 50);
//linha5
context.fillRect(100, 250, 50, 50);
context.fillRect(200, 250, 50, 50);
context.fillRect(300, 250, 50, 50);
context.fillRect(400, 250, 50, 50);
//linha6
context.fillRect(50, 300, 50, 50);
context.fillRect(150, 300, 50, 50);
context.fillRect(250, 300, 50, 50);
context.fillRect(350, 300, 50, 50);
//linha7
context.fillRect(100, 350, 50, 50);
context.fillRect(200, 350, 50, 50);
context.fillRect(300, 350, 50, 50);
context.fillRect(400, 350, 50, 50);
//linha8
context.fillRect(50, 400, 50, 50);
context.fillRect(150, 400, 50, 50);
context.fillRect(250, 400, 50, 50);
context.fillRect(350, 400, 50, 50);
//fim tabuleiro
context.lineWidth = 5;
context.strokeRect(50, 50, 400, 400)

//PEÃO BRANCO
function b_peao() {
  var b_peao = new Image();
  b_peao.onload = function () {
    context.drawImage(b_peao, 55, 105, 40, 40);
    context.drawImage(b_peao, 105, 105, 40, 40);
    context.drawImage(b_peao, 155, 105, 40, 40);
    context.drawImage(b_peao, 205, 105, 40, 40);
    context.drawImage(b_peao, 255, 105, 40, 40);
    context.drawImage(b_peao, 305, 105, 40, 40);
    context.drawImage(b_peao, 355, 105, 40, 40);
    context.drawImage(b_peao, 405, 105, 40, 40);
  };
  b_peao.src = "../img/b_peao.png";
}
b_peao();

//REI BRANCO
function b_rei() {
  var b_rei = new Image();
  b_rei.onload = function () {
    context.drawImage(b_rei, 205, 55, 40, 40);
  };
  b_rei.src = "../img/b_rei.png";
}
b_rei();

//AINHA BRANCA
function b_rainha() {
  var b_rainha = new Image();
  b_rainha.onload = function () {
    context.drawImage(b_rainha, 255, 55, 40, 40);
  };
  b_rainha.src = "../img/b_rainha.png";
}
b_rainha();

//BISPO BRANCO
function b_bispo() {
  var b_bispo = new Image();
  b_bispo.onload = function () {
    context.drawImage(b_bispo, 305, 55, 40, 40);
    context.drawImage(b_bispo, 155, 55, 40, 40);
  };
  b_bispo.src = "../img/b_bispo.png";
}
b_bispo();

//CAVALO BRANCO
function b_cavalo() {
  var b_cavalo = new Image();
  b_cavalo.onload = function () {
    context.drawImage(b_cavalo, 355, 55, 40, 40);
    context.drawImage(b_cavalo, 105, 55, 40, 40);
  };
  b_cavalo.src = "../img/b_cavalo.png";
}
b_cavalo();

//TORRE BRANCA
function b_torre() {
  var b_torre = new Image();
  b_torre.onload = function () {
    context.drawImage(b_torre, 405, 55, 40, 40);
    context.drawImage(b_torre, 55, 55, 40, 40);
  };
  b_torre.src = "../img/b_torre.png";
}
b_torre();

//PEÃO PRETO
function p_peao() {
  var p_peao = new Image();
  p_peao.onload = function () {
    context.drawImage(p_peao, 55, 355, 40, 40);
    context.drawImage(p_peao, 105, 355, 40, 40);
    context.drawImage(p_peao, 155, 355, 40, 40);
    context.drawImage(p_peao, 205, 355, 40, 40);
    context.drawImage(p_peao, 255, 355, 40, 40);
    context.drawImage(p_peao, 305, 355, 40, 40);
    context.drawImage(p_peao, 355, 355, 40, 40);
    context.drawImage(p_peao, 405, 355, 40, 40);
  };
  p_peao.src = "../img/p_peao.png";
}
p_peao();

//REI PRETO
function p_rei() {
  var p_rei = new Image();
  p_rei.onload = function () {
    context.drawImage(p_rei, 205, 405, 40, 40);
  };
  p_rei.src = "../img/p_rei.png";
}
p_rei();

//RAINHA PRETA
function p_rainha() {
  var p_rainha = new Image();
  p_rainha.onload = function () {
    context.drawImage(p_rainha, 255, 405, 40, 40);
  };
  p_rainha.src = "../img/p_rainha.png";
}
p_rainha();

//BISPO PRETO
function p_bispo() {
  var p_bispo = new Image();
  p_bispo.onload = function () {
    context.drawImage(p_bispo, 305, 405, 40, 40);
    context.drawImage(p_bispo, 155, 405, 40, 40);
  };
  p_bispo.src = "../img/p_bispo.png";
}
p_bispo();

//CAVALO PRETO
function p_cavalo() {
  var p_cavalo = new Image();
  p_cavalo.onload = function () {
    context.drawImage(p_cavalo, 355, 405, 40, 40);
    context.drawImage(p_cavalo, 105, 405, 40, 40);
  };
  p_cavalo.src = "../img/p_cavalo.png";
}
p_cavalo();

//TORRE PRETA
function p_torre() {
  var p_torre = new Image();
  p_torre.onload = function () {
    context.drawImage(p_torre, 405, 405, 40, 40);
    context.drawImage(p_torre, 55, 405, 40, 40);
  };
  p_torre.src = "../img/p_torre.png";
}
p_torre();