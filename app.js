

/*
let nombre = "Delfina";
let apellido = "Piendibene";
let edad = 22;*/
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let añoNacimiento = prompt("Ingresa tu año de nacimiento:");

let diasVividos = (2024 - añoNacimiento) * 365

alert(`Bienvenido ${nombre} ${apellido}, has vivido ${diasVividos} días aproximadamente.`);

$(document).ready(function() {
    $('#enviarBtn').on('click', function() {
        alert('Gracias por su consulta.');
    });

    $('#ocultar-btn').on('click', function() {
        $(".mi-imagen").hide();
        $("h1").text("¡No tenemos ninguna imagen!");
    });

    $('#mostrar-btn').on('click', function() {
        $(".mi-imagen").show();
        $("h1").text("¡Mirá la siguiente imagen!");
    });

    $('#modoClaro').on('click', function() {
        $('body').removeClass('dark-mode');
    });

    $('#modoOscuro').on('click', function() {
        $('body').addClass('dark-mode');
    });
});
