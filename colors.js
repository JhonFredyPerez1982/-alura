let nIntervId;
function flash(){
  nIntervId = setInterval( congratulation,1000);
}
       function congratulation(){
        const Elem = document.getElementById("congratulation");
    Elem.className = Elem.className === " congratulation" ? "begin" : " congratulation";
document.getElementById("congratulation").style.display = 'block'; 
const box1=document.querySelector('#congratulation');
box1.style.margin="-550px 50px";  
}
let changeColor;
changeColor=setInterval(firtsBox,100);
function firtsBox(){
    const Elem = document.getElementById("boox");
  Elem.className = Elem.className === "boox" ? "boox2" : "boox";
}
