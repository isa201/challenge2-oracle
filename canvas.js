var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function horca() {
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.moveTo(150, 20);
  ctx.lineTo(150, 10);
  ctx.moveTo(150, 10);
  ctx.lineTo(90, 10);
  ctx.moveTo(90, 10);
  ctx.lineTo(90, 130);
  ctx.moveTo(90, 130);
  ctx.lineTo(70, 130);
  ctx.moveTo(90, 130);
  ctx.lineTo(110, 130);
  ctx.stroke();
}

function cabeza() {
  ctx.beginPath();
  ctx.arc(150, 40, 20, 0, Math.PI * 2, true);
  ctx.stroke();
}
function cuerpo() {
  ctx.beginPath();
  ctx.moveTo(150, 60);
  ctx.lineTo(150, 100);
  ctx.stroke();
}

function brazoIzq() {
  ctx.beginPath();
  ctx.moveTo(150, 60);
  ctx.lineTo(130, 100);
  ctx.stroke();
}

function brazoDer() {
  ctx.beginPath();
  ctx.moveTo(150, 60);
  ctx.lineTo(170, 100);
  ctx.stroke();
}

function piernaIzq() {
  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(130, 130);
  ctx.stroke();
}

function piernaDer() {
  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(170, 130);
  ctx.stroke();
}

function dibujar(intentos) {
  if (intentos <= 5) {
    cabeza();
  }
  if (intentos <= 4) {
    cuerpo();
  }
  if (intentos <= 3) {
    brazoDer();
  }
  if (intentos <= 2) {
    brazoIzq();
  }
  if (intentos <= 1) {
    piernaDer();
  }
  if (intentos == 0) {
    piernaIzq();
  }
}
