const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for (let i = 0; i < dias.length; i++) {
    console.log("El dia es: ", dias[i]);
    // colocar el push aca recorre ese elemento de forma infinita
}

dias.push("Nose");

for (let j = 0; j < dias.length; j++) {
    console.log( dias[j]);
}