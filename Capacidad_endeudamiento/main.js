const form = document.querySelector('#form')
const buttonCalcular = document.querySelector('#button')
buttonCalcular.addEventListener('click', calcular)

function calcular(event){
    alert('hola, funciono')
    event.preventDefault();
}