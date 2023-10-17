var lamp = document.getElementById("lampada");

function estaQuebrada() {
  return lamp.src.indexOf("quebrada") > -1;
}

function ligar() {
  if (!estaQuebrada()) {
    lamp.src = "/img/ligada.jpg";
  }
}

function desligar() {
  if (!estaQuebrada()) {
    lamp.src = "/img/desligada.jpg";
  }
}

lamp.addEventListener("click", quebrar);

function quebrar() {
  lamp.src = "/img/quebrada.jpg";
}
