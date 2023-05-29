
function saludo(nombre) {

var nombre = prompt("Ingrese su nombre:");

if (nombre != "") {
        alert("Bienvenido " + nombre);
    } else {
        alert("Por favor ingrese su nombre.");
    }
}
    
saludo();