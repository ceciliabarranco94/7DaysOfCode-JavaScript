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

