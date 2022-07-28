const h1 = document.querySelector('h1');
const form = document.querySelector('sinRecargar');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
  //Tres formas diferentes de convertir un String a Number
  //const sumaInputs = Number(input1.value) + Number(input2.value);
  //const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  const sumaInputs = +input1.value + +input2.value;
  //console.log(Number(input1.value) + Number(input2.value));
  pResult.innerText = `Resultado es: ${sumaInputs}`;
}

/*
form.addEventListener('submit', sumarInputValues);    //ya no vamos a escuchar su evento de click, sino el de submit, cambiamos el nombre de la funcion porque ya no concuerda con el evento

//La funcion recibe como parametro un event del addEven Listener
function sumarInputValues(event){
  //console.log({event});   //ni con esto nos deja leer, porque recarga 
  event.preventDefault();   //debemos agregar la propiedad 'event' y llamar al metodo de preventDedault para que no EJECUTE lo que por defecto deberia EJECUTAR
  const sumaInputs = +input1.value + +input2.value;
  pResult.innerText = `Resultado es: ${sumaInputs}`;
}
*/