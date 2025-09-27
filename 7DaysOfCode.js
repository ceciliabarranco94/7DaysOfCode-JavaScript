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
¿Te gusta estudiar [lenguaje]? Responde con el número 1 para si o 2 para NO.

Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:

1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/

/*
const respuesta = prompt(`¿Te gusta estudiar ${lenguajeProgamacion}? Responde con el número 1 para si o 2 para NO.`);

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
    alert(`Suerte en tu camino Front-End con ${respuestaDos}`)
    } else if (respuestaUno == "Back-End") {
      respuestaDos = prompt("¿quieres aprender C# o Java")
      alert(`Suerte en tu camino Back-End con ${respuestaDos}`)  
    } else if (respuestaUno == "Fullstack"){
      alert(`Suerte en tu camino Fullstack`)
    } else {
      alert("Elige un camino ninja válido")
    }
}

function preguntaAdicional () {
  respuestaTres = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
  if (respuestaTres == "no" || respuestaTres == "NO") {
    alert("oki")
  } else {
    respuestaCuatro = prompt("¿Escribe que tecnologías te gustaría aprender?");
  }
} 



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
    asignarTextoElemento('h3','¡Adivina el número secreto!');
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

//otra solución para el día 4
/*const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert(`¡Felicidades, acertaste! El número era ${numeroAdivinacion}.`);
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert(`Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!`);
}*/


//Dia 5
/*
1. Debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "si" o "no".
2. A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".
3. Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Asi podrás separar todo en su respectivo grupo.
4. Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista:
banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:

Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados: 
Dulces: chicle y gominola
*/

/*let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let articuloSuper = "";
let categoria = "";

function agregarArticulo(){
  //cuando aprieto boton añadir empiezan las preguntas
  // valor inicial como "si", porque la primera vez siempre va a entrar en el while
  let agregarMas = "si";  
  
  while(agregarMas != "no"){
    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'.");
    //mientras el texto leído sea diferente de "si" y de "no", mostrar que no fue reconocido y preguntar nuevamente
    while (agregarMas != "si" && agregarMas != "no") {  
	  alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'.");
    }
    
    //si el texto leído es "no", salir del while
    if (agregarMas === "no"){  
        break;
    }
	
    articuloSuper = prompt("¿Qué comida deseas agregar?");
    categoria = prompt("¿En qué categoria encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(articuloSuper);
    } else if (categoria === 'lacteos'){
        lacteos.push(articuloSuper);
    } else if (categoria === 'dulces'){
        dulces.push(articuloSuper);
    } else if (categoria === 'congelados'){
        congelados.push(articuloSuper);
    } else {
        alert("Esa categoria no está predefinida.")
    }
    
  }
  alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);
  //document.querySelector('#eliminar').setAttribute('disabled','true');
}/*

//**********************************PRUEBAS DESAFIO 5*******************/

//solución prueba
/*
let listaPrueba = [];
let listaSuper = prompt("¿Deseas agregar un alimento a tu lista de compras?")

// Recorrer el array con un bucle for para agregarlos a la lista uno por uno
  if(listaSuper == "si"){
  alimento = prompt("qué alimento deseas agregar");
  alimentoCategoria = prompt("en qué categoría se encaja ese alimento");
  } else{
    prompt("weno");
  }

listaPrueba.push(listaPrueba);
console.log(listaPrueba)
*/

/*function agregarElemento(){
    //obtener elemento desde el input elemento de html
    let elementoLista = document.getElementById('elemento').value;
    let ubicacionElemento = document.getElementById('elementoArea').value;

    //validar entrada de elemento
    if (elementoLista == "") {
      alert("Por favor, escribe que comprarás.");
    } else if(ubicacionElemento == "frutas"){
      console.log(elementoLista);
    }
        /*prompt("En que área encuentras el elemento ingresado");
        listaPrueba.push(ubicacionElemento);
        console.log(listaPrueba);
        mostrarListaEnHtml();
        if (ubicacionElemento == "frutas"){
          frutas.push(elemento);
          console.log(frutas);
          mostrarListaEnHtml();
        } /*else if(ubicacionElemento == "lacteos"){
          lacteos.push(elemento);
          console.log(lacteos);
          mostrarListaEnHtml();
        } else if(ubicacionElemento == "congelados"){
          congelados.push(elemento);
          console.log(congelados);
          mostrarListaEnHtml();
        } else if(ubicacionElemento == "dulces"){
          dulces.push(elemento);
          console.log(dulces);
          mostrarListaEnHtml();
        } else {
          otros.push(elemento);
          console.log(otros);
          mostrarListaEnHtml();
        }*/
    //limpiarCaja();


/*function limpiarCaja() {
    document.querySelector('#elemento').value = '';
}

function mostrarListaEnHtml(){
    //Obtener el elemento de la lista html y asignarle una variable
    let listaDelSuper = document.getElementById('listaCompras');
    //Limpiar la lista existente para evitar agregar participantes ya ingresados
    listaDelSuper.innerHTML = "";

    // Recorrer el array listaPrueba con un bucle for para agregarlos a la lista uno por uno
    for (let i = 0; i < listaPrueba.length; i++) {
        let li = document.createElement("li"); // Crear <li> de html
        li.textContent = listaPrueba[i]; // Asignar texto
        listaDelSuper.appendChild(li); // Agregarlo al <ul> de html
    }

    // Recorrer el array frutas con un bucle for para agregarlos a la lista uno por uno
    for (let i = 0; i < frutas.length; i++) {
        let li = document.createElement("li"); // Crear <li> de html
        li.textContent = frutas[i]; // Asignar texto
        listaDelSuper.appendChild(li); // Agregarlo al <ul> de html
    }
}
*/


//Dia 6
/*
1. Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: 
“¿deseas añadir un alimento a la lista de compras?”.
2. A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos presentes en la lista actual, 
  y la persona deberá escribir cuál de ellos desea eliminar.
3. Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.
4. Finalmente, el programa volverá al ciclo inicial de preguntas.

Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.
Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.

Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento en que exista al menos un elemento en la lista de compras.
*/ 

/*function elimnarArticulo(){
  //alert("articulo eliminado")
  if(agregarMas === "eliminar"){
  //si la lista está vacía 
  // (tratamiento de bug, en caso de que la persona escriba "eliminar" incluso cuando solo se muestren las opciones "si" y "no")
	if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){  
		alert(`¡La lista está vacía!`);
	} else {  //si la lista no está vacía
		eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
		if(frutas.indexOf(eliminar) != -1){
			frutas.splice(frutas.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if(lacteos.indexOf(eliminar) != -1){
			lacteos.splice(lacteos.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (dulces.indexOf(eliminar) != -1){
			dulces.splice(dulces.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (congelados.indexOf(eliminar) != -1){
			congelados.splice(congelados.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else {
			alert(`¡No fue posible encontrar el ítem dentro de la lista!`)
		}
	}
    }
}
*/

/*let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let eliminar = "";

// valor inicial como "si", porque la primera vez siempre va a entrar en el while
let agregarMas = "si";  
while(agregarMas != "no"){
    if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'.");
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'si', 'no' o 'eliminar'.");
    }
	  //mientras el texto leído sea diferente de "si", "no" y "eliminar", mostrar que no fue reconocido y preguntar nuevamente
    while (agregarMas != "si" && agregarMas != "no" && agregarMas != "eliminar") {  
	alert(`¡Operación no reconocida!`);
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'.");
    }
    //si el texto leído es "no", salir del while
    if (agregarMas === "no"){  
      break;
    }
	
    if(agregarMas === "si"){
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'lacteos'){
            lacteos.push(comida);
        } else if (categoria === 'dulces'){
            dulces.push(comida);
        } else if (categoria === 'congelados'){
            congelados.push(comida);
        } else {
            alert("Esa categoria no está predefinida.")
        }
    } else if(agregarMas === "eliminar"){
	if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){  
    //si la lista está vacía (tratamiento de bug, en caso de que la persona escriba "eliminar" incluso cuando solo se muestren las opciones "si" y "no")
		alert(`¡La lista está vacía!`);
	} else {  //si la lista no está vacía
		eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
		if(frutas.indexOf(eliminar) != -1){
			frutas.splice(frutas.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if(lacteos.indexOf(eliminar) != -1){
			lacteos.splice(lacteos.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (dulces.indexOf(eliminar) != -1){
			dulces.splice(dulces.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (congelados.indexOf(eliminar) != -1){
			congelados.splice(congelados.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else {
			alert(`¡No fue posible encontrar el ítem dentro de la lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);
*/

//Dia 7
/*
Crea tu propia calculadora, pero con un detalle muy importante: cada operación debe ser una función 
diferente en tu código.
1. Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.
2. Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de 
  la operación en cuestión.
3. Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. 
  En esta última, el programa debe detenerse y       mostrar un mensaje "Hasta la próxima".
*/ 

function calculadoraSuma(){
  alert("SUMA!")
}
function calculadoraResta(){
  alert("RESTA!")
}
function calculadoraMult(){
  alert("MULTIPLICACIÓN!")
}
function calculadoraDiv(){
  alert("DIVISIÓN!")
}
