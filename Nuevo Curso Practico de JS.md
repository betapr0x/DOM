# Nuevo Curso Practico de JS

## Clase 1-8. Introduccion y Test

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios

¿Qué es una variable y para qué sirve?

Una variable es un espacio en memoria en donde podemos guardar informacion

¿Cuál es la diferencia entre declarar e inicializar una variable?

Tenemos tres tipos de variables: var (ya casi no se usa), let y const, let nos permite cambair el valor de nuestra variable, sin embargo const no, ya que es de tipo constante. Declarar es crear la variable e inicializar es asignarle un valor

![Uso de let y const](./imagenes/clase3_letConst.png)

¿Cuál es la diferencia entre sumar números y concatenar strings?

Que el operador '+' nos permite sumar numeros pero con strings nos une o concatena el texto

¿Cuál operador me permite sumar o concatenar?

'+'

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios

```js
let nombre = 'Manu';
let apellido = 'Perez';
let username
let edad
let email
let esMayorDeEdad
let dineroAhorrado = 1000;
let deudas = 300;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```js
let nombreCompleto = nombre + '' + apellido;
let dineroReal = dineroAhorrado - deudas;
```

### Funciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios

- ¿Qué es una función?

Es la forma en que encapsulamos, organizamos y reutilizamos codigo en JS

- ¿Cuándo me sirve usar una función en mi código?

Cuando tenemos variables o bloques de codigo similares que podemos encapsular para reutilizar mas de una vez en el futuro.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Las funciones reciben parametros cuando las creamos, en el caso de nuestro ejemplo name y lastName:

```js
function nombreCompleto(name, lastName){
  return name + ' ' + lastName
}
```

Y les enviamos argumentos cuando las ejecutamos:

```js
nombreCompleto('Maria', 'Alvarez')
```

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
function nombreCompleto(name, lastName){
  return name + ' ' + lastName
}

function saludo(name, lastName, nickname){
  const completeName = nombreCompleto(name, lastName);

  console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.)
}
```

### Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios

- ¿Qué es un condicional?

Es la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF (else y else if), Switch
El conficional if nos permite hjacer validaciones completamente distintas (si asi lo queremos) en cada validacion o condicional, mientras que el switch todos los cases se comparan con la misma variable o condicion que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?

Si, las funciones puede encapsular cualquier bloque de codigo, incluyendo condicoonales.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```js
if(tipoDeSuscripcion == 'Free'){
  console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == 'Basic'){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == 'Expert'){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion == 'ExpertDuo'){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
function tipoSuscripcion(suscripcion){
    if(suscripcion == 'Free'){
       console.log("Solo puedes tomar los cursos gratis");
       return;
    }
    
    if(suscripcion == 'Basic'){
      console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
      return;
    }
    
    if(suscripcion == 'Expert'){
      console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
      return;
    } 
    
    if(suscripcion == 'ExpertDuo'){
      console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
      return;  
    }
    console.warn("Ese tipo de suscripcion NO EXISTE, intenta con una suscripcion valida");
}
```

![Salida ejercicio 3 tipoSuscripcion(suscripcion)](./imagenes/clase8_ej3Condicionales.png)

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

El analisis para poder dar la solucion del bonus se describe a continuacion:

![Analisis Solucion Bonus](./imagenes/clase8_analisisSolucionBonus.png)

```js
const tipoSuscripcion = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function evaluaTipoSuscripcion(suscripcion){
    if(tipoSuscripcion[suscripcion]){
        console.log(tipoSuscripcion[suscripcion]);
        return;
    }
    console.warn("Ese tipo de suscripcion NO EXISTE, intenta con una suscripcion valida");
}
```

![Salida bonus](./imagenes/clase8_bonusCondicionales.png)

#### Ciclos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

Es la forma de ejecutar un bloque de codigo hasta que se cumpla cieta condicion.

- ¿Qué tipos de ciclos existen en JavaScript?

While, do while y for.

- ¿Qué es un ciclo infinito y por qué es un problema?

Es cuando la validacion de nuestros condicionales nunca se cumple y termina dannando la aplicacion (ej. cuando el navegador ya no puede mas de tanta ejecucion de ese bloque de codigo).

- ¿Puedo mezclar ciclos y condicionales?

Si, aunque los ciclos son una especie de condiciones, nada nos impide agregar mas condicionales dentro de un ciclo.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```js
let i = 0;

while (i < 5){
  console.log("El valor de i es: " + i);
  i++;
} 

let = 10;

while (i >= 2){
  console.log("El valor de i es: " + i);
  i--;
}
```

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

💡 Pista: puedes usar la función prompt de JavaScript.

```js
let respuesta;

while (respuesta != '4'){
  let pregunta = prompt('Cuanto es 2 + 2?');
  respuesta = pregunta;
}
```

Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos.

```js
const array = [1, 'hola', true, 'je je'];
```

- ¿Qué es un objeto?

Es una lista de elementos, pero cada elemento tiene un nombre clave.

```js
const object = {
  nombre: 'Fulanito',
  edad: 13,
};
```

- ¿Cuándo es mejor usar objetos o arrays?

Arreglos (arrays) cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplir), mientras que un objeto es cuando los nombres de cada elemento son importnates para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si. Los arrays pueden guardar objetos, y los objetos pueden guardar arrays entre sus propiedades. Ejemplo:

```js
const array = [1, 'hola', true, 'je je', {apodo: 'nerdo', sexo: 'masculino'}];

const obj = {
  nombre: 'Fulanito',
  edad: 13,
  comidaFavorita: ['Hamburguesa', 'Pizza', 'ensaladas'],
};
```

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
function imprimirPrimerElementoArray(arr){
  console.log(arr[0]);
}
```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirCadaElemento(arr){
  for (let i = 0; i < arr.length; i++){
    console.log(`el valor de i es: ${arr[i]}`);
  }
}
```

![Salida function imprimirCadaElemento(arr)](./imagenes/clase7_salidaFuncionElemento.png)

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
function imprimirCadaElementObjeto(obj){
  const arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++){
    console.log(`el valor de i es: ${arr[i]}`);
  }
}
```

![Salida function imprimirCadaElementObjeto(obj)](./imagenes/clase7_salidaFuncionElementoObjeto.png)

## Clase 9. Cómo conectar JavaScript con HTML

Creamos un archivo HTML y le ligamos un archivo JS mediante la etiqueta:

```html
<script src="./script.js"></script>
```

## Clase 10. Leyendo HTML desde JavaScript

En el archivo de JS agregamos lo siguiente para interactuar con nuestro HTML, DOM (Document Object Model):

```js
//Interactuando desde JS con las etiquetas de nuestro HTML
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('#pid');
const input = document.querySelector('input');

console.log({h1, p, parrafito, pid, input});
```

![Salida en consola DOM](./imagenes/clase10_DOM.png)

Podemos visualizar los metodos y atributos que trae por default el navegador:

![Metodos y Atributos del navegador](./imagenes/clase10_metodosYatributosNavegador.png)

## Clase 11. Escribiendo HTML desde JavaScript

```js
h1.innerHTML = 'Probando cambiar "Usando el DOM" <br> Probando salto de linea';
```

![innerHTML](./imagenes/clase11_innerHTML.png)

```js
h1.innerText = 'Probando cambiar "Usando el DOM" <br> Probando salto de linea';
```

![innerText](./imagenes/clase11_innerText.png)

```js
//nos imprime en Console el valor del atributo class
h1.getAttribute('class')

> {h1: h1.verde, p: p, parrafito: HTMLCollection(0), pid: null, input: input}

////modifica el valor del atributo class a rojo en el html del navegador (lo vemos en la pesta;a Elements), mas no de nuestro documento 
h1.setAttribute('class', 'rojo');

<h1 class="rojo">Probando cambiar "Usando el DOM" &lt;br&gt; Probando salto de linea</h1>


//classList es un atributo que funciona especificamente con class
h1.classList.add('blanco')    //agrega una clase

<h1 class="verde blanco">Probando cambiar "Usando el DOM" &lt;br&gt; Probando salto de linea</h1>


h1.classList.remove('verde')    //elimina una clase

<h1 class="blanco">Probando cambiar "Usando el DOM" &lt;br&gt; Probando salto de linea</h1>

input.value = "777";    //modificamos el valor del input y ahora sale ese 777 en el navegador, no se modifica el archivo HTML
```

Crear elemento desde cero:

```js
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

console.log(img);   //solo se uso para ver en consola, no es necesario
pid.append(img
```

Hubo un error y es que en la linea que hace referencia al 'pid', tenia un '#pid', sin mebargo, eso se usa con 'querySelector', no con 'getElementById':

```js
const pid = document.getElementById('pid');
```

![Crear elemento](./imagenes/clase11_crearElemento.png)

Sin embargo, queriamos quitar "Esto es un parrafo con ID" y se hizo:

```js
pid.innerHTML = "";   //String vacio
pid.append(img);
```

![Quitar parrafo con ID](./imagenes/clase11_quitaPid.png)

## Clase 12. Eventos en JavaScript: interactuando con usuarios

Una de la forma para escuchar los eventos es agregando onchange en un input y el onclick del button

```html
<body>
  <h1>Usando el DOM</h1>

  <input id="calculo1" placeholder="Escribe algo aqui" />
  <input id="calculo2" placeholder="Escribe algo aqui"  />
  <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>

  <p id="result"></p>


  <script src="./script2.js"></script>
</body>
```

```js
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){
  const sumaInputs = +input1.value + +input2.value;
  pResult.innerText = `Resultado es: ${sumaInputs}`;
}
```

[CUANDO USAR: Number() VS ParseInt()](https://thisthat.dev/number-constructor-vs-parse-int/)

## Clase 13. addEventListener

Quitamos el '**onclick="btnOnClick()"**' de nuestra etiqueta 'button' en el HTML, para probar todo desde el JS, mediante el uso del metodo que consta de dos elementos, '**addEvenListener**('nombre_evento', 'nombre_funcion_a_ejecutar') :

```js
btn.addEventListener('click', btnOnClick);
function btnOnClick(){
  const sumaInputs = +input1.value + +input2.value;
  pResult.innerText = `Resultado es: ${sumaInputs}`;
}
```

Cuando metemos los input y el button en un formulario (etiqueta form), lo que sucede es que se refresca la pagina cada que damos clic en el boton, ya que lo toma por defecto como un 'submit', pero no nos muestra el resultado, ya que recarga la pagina, pero si se esta recibiendo el resultado, motivo por el cual hay varias opciones:

1. Yo he aprendido que hay que especificar que nuestro boton es de tipo 'button' (type="button"), ya que por defecto lo toma como si fuese tipo 'submit'

2. La que se explico es mas larga y requiere hacer diferentes modificaciones al codigo :

    - Agregar un Id a la etiqueta 'form' del HTML
    - Declarar un nuevo selector en el js
    - El metodo **addEventListener()** ya no se aplicara en el boton, sino en el formulario, y ya no sera en el evento 'click', sino en el 'submit'
    - Hacer modificaciones a la funcion que habiamos declaro ya ahora funciona ligeramente distinto
    - En pocas palabras, lo veo muy engorroso, me quedo con la primera opcion que yo habia aprendido

```js
//Etiqueta de HTML alterada:  <form id="sinRecargar">

//Agregar selector
const form = document.querySelector('sinRecargar');

form.addEventListener('submit', sumarInputValues);    //ya no vamos a escuchar su evento de click, sino el de submit, cambiamos el nombre de la funcion porque ya no concuerda con el evento

//La funcion recibe como parametro un event del addEven Listener

function sumarInputValues(event){
  //console.log({event});   //ni con esto nos deja leer, porque recarga 
  event.preventDefault();   //debemos agregar la propiedad 'event' y llamar al metodo de preventDedault para que no EJECUTE lo que por defecto deberia EJECUTAR
  const sumaInputs = +input1.value + +input2.value;
  pResult.innerText = `Resultado es: ${sumaInputs}`;
}
```

[HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

## Clase 14. Conectando GitHub a proyectos de JavaScript
