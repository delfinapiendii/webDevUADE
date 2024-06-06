
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
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('ocultar-btn').addEventListener('click', function() {
        $(".mi-imagen").hide();
        $("h1").text("¡No tenemos ninguna imagen!");
    });

    document.getElementById('mostrar-btn').addEventListener('click', function() {
        $(".mi-imagen").show();
        $("h1").text("¡Mirá la siguiente imagen!");
    });
});
