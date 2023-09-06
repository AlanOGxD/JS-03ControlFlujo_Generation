console.log("Hola generation");

/*

Flujo de control

Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/ abajo, izq/der). Estas instrucciones pueden ser una funcion, un console .log, un ciclo, etc.

lo importante que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de un condicional (un elemento o instruccion detonante)


Condicionales

las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas solidas esperadas siempre partiran de un true o false.

tengo la camisa limpia?
    si: voy a la fiesta
    no: me quedo en casita

tengo esta variable?
    si: ejecuto la linea 57 de mi codigo
    no: ejecuto la linea 80 de mi codigo


    condicional if (si)

    If nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de cosigo que esta dentro del if. Si no se cumple, entonces no hacemos nada.
    nota: Es la condicion mas sencilla, pero lo mas simitante porque solo nos permite una opcion.

    if(condicion){
        //bloque de codigo que se ejecuta si la condicion es verdadera (se cumple)
    }

*/


/*
Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir
*/


if (camisaLimpia = false) {
    console.log("Felipe va a la fiesta");
}


/*

else (de otro modo, de lo contrario, si no)


if (condicion detonante){
    //bloque de codigo que se ejecuta si la condicion es verdadera
}
else{
    //bloque de codigo que se ejecuta si la condicion es falsa
}

*/

if (camisaLimpia = false) {
    console.log("Felipe va a la fiesta");//true
} else {
    console.log("Felipe se queda en casa a hacer la lloracion");//false
}




/*
else if

esta condicion nos ayuda a jugar con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo. para lograr esto, vamos a unir el else con el if.

if(condicion detonante){
    //bloque de codigo si la condicion es verdadera
} else if( condicion detonante 2){
    //bloque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
} else {
    //bloque de codigo si las dos condiciones son falsas
}

//Ejemplo 2: Felipe tiene hambre, y quiere comer chilaquiles verdes



*/







/*
Ejemplo 3: Escribe un programa que me muetre 3 mensajes diferentes.

primer mensaje:se muestra si son las 13 horas y debera imprimir vamos a descanso

segundo mensaje: Se muetra si son las 14:30 y debera imprimir "vamos a comer"

tercer mensaje: se muestra si no se cumple nada de lo anterior y debera imprimir "lo siento mi ciela, seguimos programando"


 */


//alert("dime una hora");
//let hora = prompt("Hola dime una hora")

let horas = 14;
let minutos = 30;

if (horas == 13 && (minutos == 0)) {
    console.log("Vamos a descanso");
} else if ((horas == 14) && (minutos == 30)) {
    console.log("Vamos a comer");
} else {
    console.log("Lo siento mi ciela, seguimos programando");
}



/*
Switch(cambiar o intercambiar / segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en función de la opción deseada (estado de la variable)

Evalúa una expresión commparando el valor de una variable con la expresión o caso, y ejecuta las declaraciones asociadas con ese caso, así como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general.


expresión con un valoor
switch(expresión){
    case 1: 
    //bloque de código que se ejecuta si la opción seleccionada es igual a 1
    break;

    case 2: 
    //bloque de código que se ejecuta si la opción seleccionada es igual a 2
    break;

    case 3: 
    //bloque de código que se ejecuta si la opción seleccionada es igual a 3
    break;

    default;
    //bloque de código que se ejecuta si ninguna opción coincide.
}

*/

//Elevador con else if

let piso = 5;

if (piso == 1) {
    console.log("Llegamos al piso 1");
} else if (piso == 2) {
    console.log("Llegamos al piso 2");
} else if (piso == 3) {
    console.log("Llegamos al piso 3");
} else if (piso == 4) {
    console.log("Llegamos al piso 4");
} else if (piso == 5) {
    console.log("Llegamos al piso 5");
} else {
    console.log("Piso no encontrado");
}

//Elevador con swwitch
let pisoSwitchOriginal = prompt("A qué piso vas?");
console.log(typeof (pisoSwitchOriginal));
pisoSwitch = parseInt(pisoSwitchOriginal);


switch (pisoSwitch) { //si recibo un número
    case 1: //caso evalúa un string 
        console.log("Llegaste al piso 1");
        break;
    case 2:
        console.log("Llegaste al piso 2");
        break;
    case 3:
        console.log("Llegaste al piso 3");
        break;
    default:
        console.log("Opción no válida");
}


//Funciones aplicadas a un consultorio dental

//funcion calcular costo de una consulta (condicionales)

//Variables para mis datos 
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente) {

    //Datos que necesito para mi funcion
    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;

    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;

    //Condicional para saber si agrego otra promoción por ser cliente frecuente
    if (clienteFrecuente == true) {
        //costoTotal * promocionClienteFrecuente;
        invocacionFuncion();
    }

}

//Un ejemplo más sencillo
function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente) {
    let costoTotal = duracionMinutos * costoPorMinuto;

    if (clienteFrecuente) {
        costoTotaConDescuento = costoTotal * .9;
    }

    return costoTotaConDescuento;
}

console.log(calcularCostoConsultaDos(45, 15, true));




/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

//Ejemplos

let mayorEdad = true;

if (mayorEdad) {
    console.log("Puedes agendar tu cita");
} else {
    console.log("Ve a la chiza de los pequeñines");
}




/*
Lista doctores
Dr. Jairo Campos
Dra. Laura Martínez
Dr. Alejandro López
Dra. María Rodríguez
Dr. Carlos Hernández
*/


/*
Limpieza Dental
Tratamiento de Caries
Blanqueamiento
Ortodoncia
Extracciones
Estética Dental
Endodoncia
Radiografía
 */

let servicio = parseInt(prompt("¿Que servicio requiere? \n1. Limpieza Dental \n2. Tratamiento de Caries \n3. Blanqueamiento \n4. Ortodoncia \n5. Extracciones \n6. Estética Dental \n7. Endodoncia \n8. Radiografía"));

if (servicio == 1) {
    console.log("Servicio de Limpieza dental.");
} else if (servicio == 2) {
    console.log("Servicio de tratamiento de caries.");
} else if (servicio == 3) {
    console.log("Servicio de Blanqueamiento.");
} else if (servicio == 4) {
    console.log("Servicio de Ortodoncia.");
} else if (servicio == 5) {
    console.log("Servicio de Extracciones.");
} else if (servicio == 6) {
    console.log("Servicio de Estetica Dental.");
} else if (servicio == 7) {
    console.log("Servicio de Endononcia.");
} else if (servicio == 8) {
    console.log("Servicio de Radiografia.");
} else {
    console.log("Error, servicio no existe");
}


let disponibiladDoctor = parseInt(prompt("¿Que doctor deseas consultar? \n1. Dr. Jairo Campos \n2. Dra. Laura Martínez \n3. Dr. Alejandro López \n4. Dra. María Rodríguez \n5. Dr. Carlos Hernández"));


switch (disponibiladDoctor) {
    case 1:
        console.log("Cita registrada con exito");
        break;
    case 2:
        console.log("Cita registrada con exito");
        break;
    case 3:
        console.log("Cita registrada con exito");
        break;
    case 4:
        console.log("Cita registrada con exito");
        break;
    case 5:
        console.log("Cita registrada con exito");
        break;
    default:
        console.log("Error respuesta incorrecta");
        break;
}







