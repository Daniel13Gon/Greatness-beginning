  var teclas =
  {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  };

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("flechitas");
var papel = cuadrito.getContext("2d");
var estilo = document.getElementById("dimeElColor");
var botonon = document.getElementById("boton");
var x = 50;
var y = 50;


dibujo ("blue", 49, 49, 51, 51, papel);
function dibujo(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
  {
    var colorcito = dimeElColor.value;
    var movimiento = 10;
    switch(evento.keyCode)
      {
        case teclas.DOWN:
        dibujo(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        break;
        case teclas.UP:
        dibujo(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break;
        case teclas.RIGHT:
        dibujo(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;
        case teclas.LEFT:
        dibujo(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        break;
      }
  }
