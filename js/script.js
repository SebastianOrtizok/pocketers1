let arriba=document.querySelector(".arriba"); 
let abajo=document.querySelector(".abajo"); 
let izquierda=document.querySelector(".izquierda"); 
let derecha=document.querySelector(".derecha"); 
let auto=document.querySelector(".auto");
let contenedor=document.querySelector(".contenedor")
const start = document.getElementById("start");
console.log(start)
let positionx=95;
let positiony=230;
let rotationAngle=0;
let direction="rigt";
let click=0;

contenedor.addEventListener("click", function(){
    start.style.display="none";
})

arriba.addEventListener("click", function(){
    if (direction=="arriba" && click==1){
        rotationAngle = 270;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (direction!="arriba"){
        click=0
        rotationAngle = 135;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="arriba"
    }
    click+=1
    auto.style.top = (positiony -= 5) + "px";
})

abajo.addEventListener("click", function(){
  
    if (direction=="abajo" && click==1){
        rotationAngle = 90;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (direction!="abajo"){
        click=0
        rotationAngle = 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="abajo"
    }
    click+=1
    auto.style.top = (positiony += 5) + "px";
})

derecha.addEventListener("click", function(){
    if (direction=="derecha" && click==1){
        rotationAngle = 0;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (direction!="derecha" ){
        click=0;
        rotationAngle = 315;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="derecha"
    }
    click+=1
    auto.style.left = (positionx+= 10) + "px";
})

izquierda.addEventListener("click", function(){
    if (direction=="izquierda" && click==1){
        rotationAngle = 180;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (direction!="izquierda"){
        click=0;
        rotationAngle = 225;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="izquierda"
    }
    click+=1
    auto.style.left = (positionx -= 10) + "px";
})



