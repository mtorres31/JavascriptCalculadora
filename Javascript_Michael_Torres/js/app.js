var calculadora = function(){

  var numero0 = document.getElementById("0");
  var numero1 = document.getElementById("1");
  var numero2 = document.getElementById("2");
  var numero3 = document.getElementById("3");
  var numero4 = document.getElementById("4");
  var numero5 = document.getElementById("5");
  var numero6 = document.getElementById("6");
  var numero7 = document.getElementById("7");
  var numero8 = document.getElementById("8");
  var numero9 = document.getElementById("9");
  var reseton = document.getElementById("on");
  var punto  = document.getElementById("punto");
  var signo= document.getElementById("sign");
  var sumar = document.getElementById("mas");
  var restar = document.getElementById("menos");
  var multiplicar = document.getElementById("por");
  var dividir= document.getElementById("dividido");
  var raiz= document.getElementById("raiz");
  var igual = document.getElementById("igual");
  var resultadopantalla = document.getElementById("display");
  var operandoa;
  var operandob;
  var operador;

  var numeroingresado = document.getElementById("display").innerHTML;

  function digitaNumero(numero){
    if (numeroingresado == 0 && numeroingresado !== "0.0" && numeroingresado !== "0.")  {
      numeroingresado = numero.toString();
    } else {
      numeroingresado += numero;
    }
      maximoDigitosResultado()
  }

// Cambio del tamaño de las teclas de calculadora y asignacion del evento click

  var arregloidTeclado = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "mas", "menos", "por", "dividido", "raiz", "sign", "punto", "igual", "on"]

  arregloidTeclado.forEach( function (idKeyboard) {
  cambioTamanoTeclas(idKeyboard)
  });

  function cambioTamanoTeclas (idKeyboard) {
  var tamanoTeclas = document.getElementById(idKeyboard);
  tamanoTeclas.addEventListener('mousedown',function () {
  tamanoTeclas.setAttribute("style", "transform:scale(0.80,0.80)");
  })
  tamanoTeclas.addEventListener('mouseup', function() {
  tamanoTeclas.setAttribute("style", "transform:scale(1,1)");
  })
  }

// Validacion maximo numero de digitos
  function maximoDigitosResultado(){
    document.getElementById("display").innerHTML = numeroingresado.toString().substring(0,8);
  }
// Funcion para el punto decimal
  function ingresarPunto(){
    if (numeroingresado == 0) {
      numeroingresado = "0.";
    } else if (numeroingresado.indexOf(".") == -1) {
      numeroingresado += ".";
    }
    maximoDigitosResultado();
  }

//Asignar eventos a las teclas

  numero0.onclick = function(e){
    numero = "0";
    digitaNumero(numero)
  }

  numero1.onclick = function(e){
    numero = "1";
    digitaNumero(numero)
  }
  numero2.onclick = function(e){
    numero = "2";
    digitaNumero(numero)
  }
  numero3.onclick = function(e){
    numero = "3";
    digitaNumero(numero)
  }
  numero4.onclick = function(e){
    numero = "4";
    digitaNumero(numero)
  }
  numero5.onclick = function(e){
    numero = "5";
    digitaNumero(numero)
  }
  numero6.onclick = function(e){
    numero = "6";
    digitaNumero(numero)
  }
  numero7.onclick = function(e){
    numero = "7";
    digitaNumero(numero)
  }
  numero8.onclick = function(e){
    numero = "8";
    digitaNumero(numero)
  }
  numero9.onclick = function(e){
    numero = "9";
    digitaNumero(numero)
  }

// evento tecla del punto

  punto.onclick = function(e){
    ingresarPunto()
  }

//evento tecla boton ON/C

  reseton.onclick = function(e){
    resultadopantalla.innerHTML= "0"
    numeroingresado= ""
    operandoa = 0;
    operandob = 0;
    operador = ""
  }

// evento tecla cambio de signo
  signo.onclick = function(){
    numeroingresado = Number(numeroingresado)
    if (numeroingresado == -numeroingresado) {
        numeroingresado = numeroingresado
        numeroingresado = String(numeroingresado)
    }
    //condicional cambio de signo
    else {
        numeroingresado = Number(numeroingresado)
        numeroingresado = -numeroingresado
        numeroingresado = String(numeroingresado)
        display.innerHTML = numeroingresado
    }
  }
 // Operaciones matematicas basicas

 sumar.onclick = function(){
   operandoa = Number(numeroingresado);
   operador = "+";
   limpiaPantallaOperacion()
 }

 restar.onclick = function(){
   operandoa = Number(numeroingresado);
   operador = "-";
   limpiaPantallaOperacion()
 }

 multiplicar.onclick = function(){
   operandoa = Number(numeroingresado);
   operador = "*";
   limpiaPantallaOperacion()
 }

 dividir.onclick = function(){
   operandoa = Number(numeroingresado);
   operador = "/";
   limpiaPantallaOperacion()
 }

 raiz.onclick = function(){
   operandoa = Number(numeroingresado);
   operador = "raiz"
   solucionOperaciones()
 }

 igual.onclick = function(){
   operandob = Number(numeroingresado);
   solucionOperaciones()
 }

 function limpiaPantallaOperacion(){
   numeroingresado = "";
   resultadopantalla.innerHTML="";
 }

 function solucionOperaciones(){
   var resultadoperacion = 0;
   switch (operador) {
     case "+":
      resultadoperacion = parseFloat(operandoa) + parseFloat(operandob);
       break;

     case "-":
      resultadoperacion = parseFloat(operandoa) - parseFloat(operandob);
       break;

    case "*":
      resultadoperacion = parseFloat(operandoa) * parseFloat(operandob);
       break;

    case "/":
      resultadoperacion = parseFloat(operandoa) / parseFloat(operandob);
       break;

    case "raiz":
      resultadoperacion = Math.sqrt(operandoa)
       break;

   }
   numeroingresado = resultadoperacion;

   resultadopantalla.innerHTML = resultadoperacion.toString().substring(0,8);
 }
}
calculadora()
