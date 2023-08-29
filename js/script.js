let arriba=document.querySelector(".arriba"); 
let abajo=document.querySelector(".abajo"); 
let izquierda=document.querySelector(".izquierda"); 
let derecha=document.querySelector(".derecha"); 
let auto=document.querySelector(".auto");
let contenedor=document.querySelector(".contenedor")
const start = document.querySelectorAll(".start");
console.log(start)
let positionx=95;
let positiony=230;
let rotationAngle=0;

contenedor.addEventListener("click", function(){
    start.forEach(function(element){
        element.style.display="none";
    })
})

arriba.addEventListener("click", function(){
    if (rotationAngle<270 & rotationAngle!=0 ){
        rotationAngle += 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
        direction="arriba"
    }
    if (rotationAngle==0){
        rotationAngle=360
    }
    if (rotationAngle>270){
        rotationAngle -= 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (positiony >10){
        auto.style.top = (positiony -= 5) + "px";
        
    }
})

abajo.addEventListener("click", function(){
    if (rotationAngle<90){
        rotationAngle += 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (rotationAngle>90){
        rotationAngle -= 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }


    if (positiony<220){
        auto.style.top = (positiony += 5) + "px";

    }
})

derecha.addEventListener("click", function(){
    if (rotationAngle>0 & rotationAngle<=180){
        rotationAngle -= 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }

    if (rotationAngle>180){
        rotationAngle += 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (rotationAngle==360){
        rotationAngle=0
    }

    if (rotationAngle<0){
        rotationAngle += 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }

if (positionx<170) {
    auto.style.left = (positionx+= 10) + "px";
}
})

izquierda.addEventListener("click", function(){
    if (rotationAngle>180){
        rotationAngle -= 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (rotationAngle<180){
        rotationAngle += 45;
        auto.style.transform = `rotate(${rotationAngle}deg)`;
    }

    if (positionx >15){

        auto.style.left = (positionx -= 10) + "px";
    }
})



