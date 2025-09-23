//Dia 1
/*tu tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:
Si deseas cambiar los nombres de las variables y los valores, siéntete libre de hacerlo. Pero nunca imprimas algo que no sea verdadero, ¿eh?
*/

/*
let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

if (numeroUn == stringUn) {

  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')

}


if (numeroTreinta === stringTreinta) {

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

}


if (numeroDiez == stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')

}
*/

//Dia 2
/* desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas. Al final, el sistema mostrará el mensaje:

"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
*/

/*
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguajeProgamacion = prompt("¿Qué lenguaje de programación estás estudiando?");

const msg = `Hola ${nombre}!, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgamacion}!`;

alert(msg);
*/


/* EJERCICIO OPCIONAL:
Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:
¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:

1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/

/*
const respuesta = prompt(`¿Te gusta estudiar ${lenguajeProgamacion}? Responde con el número 1 para SÍ o 2 para NO.`);

if (respuesta == 1) {
    // da la respuesta positiva
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}

if (respuesta == 2) {
    // da la respuesta negativa
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
*/

//Dia 3
/*Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

1. Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
 
2. Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender  o aprender Java.
 
3. Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
 
4. Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
*/

//let respuestaUno = prompt("¿quieres seguir hacia el área de Front-End, hacia el área de Back-End o prefieres seguir hacia el área Fullstack?");

/*
function preguntaUno () {
  respuestaUno = prompt("¿quieres seguir hacia el área de Front-End, hacia el área de Back-End o prefieres seguir hacia el área Fullstack?");
}

function preguntaDos () {
    if (respuestaUno == "Front-End") {
    respuestaDos = prompt("¿quieres aprender React o aprender Vue?")
    alert("Suerte en tu camino Front-End")
    } else if (respuestaUno == "Back-End") {
      respuestaDos = prompt("¿quieres aprender C# o Java")
      alert("Suerte en tu camino Back-End")  
    } else if (respuestaUno == "Fullstack"){
      alert("Suerte en tu camino Fullstack")
    } else {
      alert("Elige un camino ninja válido")
    }
}

function preguntaAdicional () {
  respuestaTres = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
  if (respuestaTres == "no") {
    alert("oki")
  } else {
    respuestaCuatro = prompt("¿Escribe que tecnologías te gustaría aprender?");
  }
} 
*/


//otra solución para el día 3
/*
const area = prompt("¿Quieres seguir en el área de 'Front-End' o 'Back-End'? Escribe el nombre del área:");
let lenguaje = "";
if (area === "Front-End") {
    lenguaje = prompt("¿Quieres aprender React o Vue?");
} else if (area === "Back-End") {
    lenguaje = prompt("¿Quieres aprender C# o Java?");
} else {
    alert("¡No ingresaste un área válida!");
}

const especialidadOFullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack");
if (especialidadOFullstack == 1) {
    alert(`¡Sigue especializándote en ${lenguaje} para dominar el área de ${area}!`);
} else if (especialidadOFullstack == 2) {
    alert(`¡Es hora de comenzar a aprender otros lenguajes además de ${lenguaje} si quieres convertirte en Fullstack!`);
} else {
    alert("¡No ingresaste un valor válido!");
}

let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje === "ok") {
    let nuevaTecnología = prompt("¿Cuál?");
    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}
*/

//Dia 4
/*Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.
*/

let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        } 
        intentos++;
        limpiarCaja();

        //se acabaron los intentos permitidos
        if (intentos >= 4){
          asignarTextoElemento('p',`Se acabaron tus intentos, el número secreto era: ${numeroSecreto}`);
          document.getElementById('reiniciar').removeAttribute('disabled');
        }

    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    return numeroGenerado;

}

function condicionesIniciales() {
    asignarTextoElemento('h3','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();