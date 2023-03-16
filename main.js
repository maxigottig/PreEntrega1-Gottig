function sumar(a,b){
    return a+b
}
function restar(a,b){
    return a-b
}
function dividir(a,b){
    return a/b
}
function multiplicar(a,b){
    return a*b
}

let rta = ""

do{

    let operacionElegida = prompt("Elegí una opción: sumar, restar, dividir, multiplicar")
    let numA = Number(prompt("Ingresa el número A"))
    let numB = Number(prompt("Ingresa el número B"))

    switch (operacionElegida){
        case "sumar":
            alert("El resultado de la suma da: "+sumar(numA,numB))
        break;
        case "restar":
            alert("El resultado de la resta da: "+restar(numA,numB))
        break;
        case "dividir":
            alert("El resultado de la división da: "+dividir(numA,numB))
        break;
        case "multiplicar":
            alert("El resultado de la multiplicación da: "+multiplicar(numA,numB))
            break;
        default:
            break;
    }
    rta = prompt("Escriba ESC para salir u otra tecla para continuar").toUpperCase()
}while (rta != "ESC")