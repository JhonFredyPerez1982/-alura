var cerdo="imagenes/muñeco.png";
var imagen2 = new Image();
imagen2.src = cerdo;
imagen2.addEventListener("load",dibujar2);
function limpiar(){
lienzo.clearRect(0,0,600,500);
}
var  x=30;
var  y=200;    
var volver=false;
function dibujar2 ()//cuando ocurre el evento, se llama a estas funciones para que a su vez llamen la funcion de dibujar
{
  limpiar();
lienzo.drawImage(imagen2,x,y);
if(volver){
  x--;
}
if(x==220){
  volver=true;
}          
if(!volver){
  x++;
}
if(x==30){
  volver=false;
}
}
setInterval(dibujar2,10);







  