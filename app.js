
/*
let nombre = "Delfina";
let apellido = "Piendibene";
let edad = 22;*/
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let añoNacimiento = prompt("Ingresa tu año de nacimiento:");

let diasVividos = (2024 - añoNacimiento) * 365

alert(`Bienvenido ${nombre} ${apellido}, has vivido ${diasVividos} días aproximadamente.`);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enviarBtn').addEventListener('click', function() {
        alert('Gracias por su consulta.');
    });
});
