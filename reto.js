function obtenerIniciales(nombreCompleto){
    if (typeof nombreCompleto !== "string" || nombreCompleto.trim () === "" ){
        return "Entrada inválida";
    }
        const palabras = nombreCompleto.split(" ").filter (palabra => palabra !== "")
        const iniciales = palabras.map(palabra => palabra[0])
    return iniciales.join("").toUpperCase();
}
console.log(obtenerIniciales("Brajhan  david Rivera Duarte"));
console.log(obtenerIniciales("gero el bombero"));
console.log(obtenerIniciales("parangacutirimicuaro    "));
console.log(obtenerIniciales(" duvan pregunta "));
console.log(obtenerIniciales(123));