var cuadrito=document.getElementById("dibujando");
var lienzo=cuadrito.getContext("2d");
  document.addEventListener("keydown",funcion);
  document.getElementById("begin"); 
  document.getElementById("congratulation").style.display = 'none'; 
let changeColorBoton;
  changeColorBoton=setInterval(question,100);
  function question(){
   const Elem2 = document.getElementById("pregunta");
  Elem2.className = Elem2.className === "boox" ? "boox2" : "boox";
  }
function questionTo(){
    document.getElementById("pregunta").style.display="none";
  }
var teclas={
 A:65,
 L:76,
 U:85,
 R:82
};
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo){
 lienzo.beginPath();
 lienzo.strokeStyle=color;
 lienzo.lineWidth=6;
 lienzo.moveTo(xinicial,yinicial);
 lienzo.lineTo(xfinal,yfinal);
 lienzo.stroke();
 lienzo.closePath();
}
 function funcion(evento){
  questionTo()
  var colorA="yellow";
  var colorb="white";
  var colorL="blue";
var colorU="red";
var colorR="green";
  var margenArriba=530;
var margenAbajo=580;
  switch(evento.keyCode){
 case teclas.A:{//    inicia   termina 
  dibujarLinea(colorA,118,margenArriba,98,margenAbajo,lienzo);
  dibujarLinea(colorA,120,margenArriba,140,margenAbajo,lienzo);
  dibujarLinea(colorA,105,margenAbajo-14,135,margenAbajo-14,lienzo);
   dibujarLinea(colorb,518,margenArriba,495,margenAbajo,lienzo);
   dibujarLinea(colorb,520,margenArriba,540,margenAbajo,lienzo);
   dibujarLinea(colorb,500,margenAbajo-14,535,margenAbajo-14,lienzo);
   resultado1=1;
   break;
}
 case teclas.L:{
    dibujarLinea(colorL,203,margenAbajo,203,margenArriba,lienzo);
  dibujarLinea(colorL,203,margenAbajo,250,margenAbajo,lienzo);
  resultado2=1;
  break;
}
 case teclas.U:{
  dibujarLinea(colorU,293,margenAbajo,293,margenArriba,lienzo);
  dibujarLinea(colorU,293,margenAbajo,340,margenAbajo,lienzo);
  dibujarLinea(colorU,340,margenAbajo,340,margenArriba,lienzo);
  resultado3=1;
  break;
}
case teclas.R:{
  dibujarLinea(colorR,400,margenArriba,400,margenAbajo,lienzo);
  dibujarLinea(colorR,400,margenArriba,435,margenArriba,lienzo);
  dibujarLinea(colorR,435,margenArriba,435,margenArriba+25,lienzo);
   dibujarLinea(colorR,435,margenArriba+25,400,margenArriba+25,lienzo); 
   dibujarLinea(colorR,400,margenArriba+25,435,margenAbajo,lienzo);
   resultado4=1;
  break;
  }
  default:
    location.href='./losse.html';
  }
  let sum=resultado1+resultado2+resultado3+ resultado4;
  if(sum>3){
    congratulation();
    flash();
  }
}  