//Interactuando desde JS con las etiquetas de nuestro HTML
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({h1, p, parrafito, pid, input});

//h1.innerHTML = 'Probando cambiar "Usando el DOM" <br> Probando salto de linea';
h1.innerText = 'Probando cambiar "Usando el DOM" <br> Probando salto de linea';

//Ejemplos de modificar HTML desde JS
/*
h1.getAttribute('class')  //nos imprime en consola el valor de la class
h1.setAttribute('class', 'rojo'); //modifica el valor del atributo class a rojo en el html del navegador, mas no de nuestro documento
*/
//classList es un atributo que funciona especificamente con class
h1.classList.add('blanco')    //agrega una clase
h1.classList.remove('verde')    //elimina una clase

input.value = "777";    //modificamos el valor del input

//Crear elemento desde cero
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

console.log(img);

pid.innerHTML = "";   //String vacio
pid.append(img);