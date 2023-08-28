let arriba=document.querySelector(".arriba"); 
let abajo=document.querySelector(".abajo"); 
let izquierda=document.querySelector(".izquierda"); 
let derecha=document.querySelector(".derecha"); 
let auto=document.querySelector(".auto");
let positionx=95;
let positiony=230;
let rotationAngle=0;
let direction="rigt";


arriba.addEventListener("click", function(){
    auto.style.position = "absolute";
    if (direction!="arriba"){
        rotationAngle = 270;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="arriba"
    }
    auto.style.top = (positiony -= 1) + "px";
})

abajo.addEventListener("click", function(){
    auto.style.position = "absolute";
    if (direction!="abajo"){
        rotationAngle = 90;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="abajo"
    }
    auto.style.top = (positiony += 1) + "px";
})

derecha.addEventListener("click", function(){
    auto.style.position = "absolute";
    if (direction!="derecha"){
        rotationAngle = 0;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="derecha"
    }
    auto.style.left = (positionx+= 10) + "px";
})

izquierda.addEventListener("click", function(){
    auto.style.position = "absolute";
    if (direction!="derecha"){
        rotationAngle = 180;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="izquierda"
    }
    auto.style.left = (positionx -= 10) + "px";
})



