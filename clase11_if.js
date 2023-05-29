//Con el condicional IF simularás una heladería

let textohelado = prompt("¿Que sabor quiere?");
let textotopping = prompt("¿Que salsa quiere?");
var preciohelado;
var preciotopping;
var precioFinal;
var helado = ["Oreo", "KitKat", "Kinder"];
var topping = ["Cholocate", "Caramelo", "Frutilla"];

if (textohelado == "Oreo") {
    preciohelado = 10;
    } else if (textohelado == "KitKat") {
        preciohelado = 15;
        } else if (textohelado == "Kinder") {
            preciohelado = 20;
        }else{
            alert("No tenemos este sabor.");
        }

if (textotopping == "Chocolate") {
    preciotopping = 2;
    } else if (textotopping == "Caramelo") {
        preciotopping = 3;
        } else if (textotopping == "Frutilla") {
            preciotopping = 4;
            }else{
                alert("No tenemos este topping.");
            }

if (precioFinal = preciohelado + preciotopping){
    alert("El precio final es: " + precioFinal);
} else if (precioFinal = preciohelado){
    alert("El precio final es: " + precioFinal);
}

