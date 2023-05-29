//Con el condicional SWITCH simularás un pedido

let pedido = prompt("¿Que clase de menu va a pedir?");

switch(pedido){
    case "Carne":
        console.log("Con la carne se le ofrecerá un vino tinto.");
        break;
    case "Pescado":
        console.log("Con el pescado se le ofrecerá un vino blanco.");
        break;
    case "Verdura":
        console.log("Con las verduras se le ofrecerá una botellas de 500Mlts de agua.");
        break;
    default:
        console.log("Puede elehir entre carne, pescado o verdura.");
}
