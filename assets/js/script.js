/* Ejercicio 2

function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
*/

const ele = document.querySelector("#ele1")

function pintar(evento, color = 'green'){
    evento.target.style.backgroundColor = color
}

ele.addEventListener("click", (evento) => {
    pintar(evento, 'yellow')
})
