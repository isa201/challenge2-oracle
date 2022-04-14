//LISTADO DE PALABRAS
var palabras = [
  "Carne",
  "Martillo",
  "Lavadora",
  "Sucio",
  "Cangrejo",
  "Lento",
  "Alimentos",
  "Delgado",
  "Cubo",
  "Comida",
  "Caracol",
  "Abajo",
  "Alumno",
  "Bonito",
  "Cesta",
  "Sol",
  "Beber",
  "Botella",
  "Hamburguesa",
  "Invierno",
];

//Nodos del dom
var btnJugar = document.getElementById("jugar");
var btnAgregarPalabra = document.getElementById("agregar-palabra");
var nuevapalabra = document.getElementById("nueva-palabra");
var campoLetras = document.querySelector("#campo-letras");
var buscador = document.getElementById("buscador");
var btnBuscar = document.querySelector("#btn-buscar");
var btnReiniciar = document.querySelector("#btn-reinicio");

var menu = document.querySelector("#menu");
var contenido = document.querySelector("#contenido");

//Variables generales
var palabraOculta = ""; //palabra oculta
var palabra = ""; //palabra que el usuario ira adivinando
var intentos = 6;
var letrasPresionadas = [];

function agregarPalabras() {
  palabras.push(nuevapalabra.value);
  nuevapalabra.value = "";
}
btnAgregarPalabra.addEventListener("click", agregarPalabras);

function ocultarElementos() {
  menu.classList.add("invisible");
  contenido.classList.remove("invisible");
}

function reiniciarJuego() {
  window.location.reload();
}

function iniciarJuego() {
  ocultarElementos();
  horca();
  //sortear palabra y convertirla a minuscula cuando se inicia el juego
  palabraOculta =
    palabras[Math.floor(Math.random() * palabras.length)].toLowerCase();
  console.log(palabraOculta);

  /*
  asignar guiones a la palabra que se va adivinar
  recorriendo la palabra oculta dara el mismo numero de guiones que de letras
  */
  for (var i = 0; i < palabraOculta.length; i++) {
    palabra = palabra + "_";
  }
  //agregar contenido div de campos de letras para ver la palabra(con guiones) usando innerHTML
  campoLetras.innerHTML = palabra;
}

function comprobar() {
  let letra = buscador.value.toLowerCase();
  buscador.value = "";
  let nuevo = ""; //variable para ir guardando las letras y los espacios
  if (!letrasPresionadas.includes(letra)) {
    letrasPresionadas.push(letra);
    for (let i = 0; i < palabraOculta.length; i++) {
      if (letra == palabraOculta[i]) {
        nuevo = nuevo + letra;
      } else {
        nuevo = nuevo + palabra[i];
      }
    }
    if (nuevo == palabra) {
      intentos--;
      alert(
        "Fallaste vuelve a intentarlo..!!" + "\nIntentos restantes: " + intentos
      );
    }
    palabra = nuevo;
    campoLetras.innerHTML = palabra;

    if (intentos == 0) {
      alert("GAME OVER =(");
    }
    if (palabra.search("_") == -1) {
      alert("GANASTE =)");
    }
    //funcion para ir dibujando el monigote segun los errores
    dibujar(intentos);
    //volver a hacer foco sobre el input para no tener que estar selccionandolo de nuevo
    buscador.focus();
  } else {
    alert("Ya presionaste esta letra prueba con otra");
  }
}

btnJugar.addEventListener("click", iniciarJuego);
btnReiniciar.addEventListener("click", reiniciarJuego);
btnBuscar.addEventListener("click", comprobar);
