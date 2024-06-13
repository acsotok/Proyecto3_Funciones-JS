/* Ejercicio 3 */

/* Parte 1 */

let cuadro1 = document.querySelector("#ele1")
let cuadro2 = document.querySelector("#ele2")
let cuadro3 = document.querySelector("#ele3")
let cuadro4 = document.querySelector("#ele4")

cuadro1.addEventListener("click", () =>{
    if(cuadro1.style.backgroundColor == "blue"){
        cuadro1.style.backgroundColor = "black"
    }
    else{
        cuadro1.style.backgroundColor = "blue"
    }
})

cuadro2.addEventListener("click", () =>{
    if(cuadro2.style.backgroundColor == "red"){
        cuadro2.style.backgroundColor = "black"
    }
    else{
        cuadro2.style.backgroundColor = "red"
    }
})

cuadro3.addEventListener("click", () =>{
    if(cuadro3.style.backgroundColor == "green"){
        cuadro3.style.backgroundColor = "black"
    }
    else{
        cuadro3.style.backgroundColor = "green"
    }
})

cuadro4.addEventListener("click", () =>{
    if(cuadro4.style.backgroundColor == "yellow"){
        cuadro4.style.backgroundColor = "black"
    }
    else{
        cuadro4.style.backgroundColor = "yellow"
    }
})

/* Parte 2 */

let cambio = document.querySelector("#key")
let letraA = "pink"
let letraS = "orange"
let letraD = "lightblue"
let cuadrado = document.querySelector("#key2")
let letraQ = "purple"
let letraW = "gray"
let letraE = "brown"

document.addEventListener("keydown", (evento) =>{
    if(evento.key === 'a'){
        cambio.style.borderColor = letraA
    }else if(evento.key === 's'){
        cambio.style.borderColor = letraS
    }else if(evento.key === 'd'){
        cambio.style.borderColor = letraD
    }
})

document.addEventListener("keydown", (evento) => {
    if(evento.key === 'q'){
        cuadrado.style.backgroundColor = letraQ
    }else if(evento.key === 'w'){
        cuadrado.style.backgroundColor = letraW
    }else if(evento.key === 'e'){
        cuadrado.style.backgroundColor = letraE
    }
})



