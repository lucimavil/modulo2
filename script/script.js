
//ventana alerta 
//alert("Método #3: Desde archivo externo");


// Comentario en línea 
/*
Comentario
multilínea
*/

//document.write("Esto no funciona mientras esté comentado");
/*



// Mensajes en la consola
// mensaje en el log
console.log("Esto es un mensaje en el log");
// error
console.error("Esto es un error");
// Añadir información
console.info("Añade información a la consola");
// warning
console.warn("Envía un aviso");

*/

//Las variables de tipo var, tienen un alcance de función y las variables let y const tienen ámbito de bloque
/*
nota = 5;
console.log(nota);

nota++;
console.log(nota);

nota--;
console.log(nota);

if (nota < 4)
  console.log("insuficiente");
  else
  console.log("aprobado");


  if ((nota >= 5) && (nota<6)){
    console.log("Suficiente");
  };
*/

//Alcance o scope de las variables
if  (1 === 1) {
  let bien = true;
}
//console.log(bien) // let de bloque no definida

//para solucionarlo
/*
let bien;
if  (1 === 1) {
  bien = true;
}
console.log(bien)
*/


// concatenacion
/*resultado='Luciana';
let frase = "Hola  " + resultado;
console.log(frase);
*/


//Cuadro de diálogo de confirmación
/*var v = confirm("¿Quieres enviarlo?");
if ( v ) {
    document.write("Ok, gracias.");
} else {
    document.write("Estaremos aquí para cuando te decidas ;)");
}
*/

/*funciones */
function calcularAlgo(){
    console.log("Calculando...");

}
  calcularAlgo();
  
 /* function aplicarDescuento(){
    const descuento = 100 * 0.2; //undefined //No podemos acceder a la variable desde fuera de la función
    //return descuento; //lo solucionamos 
  }
*/
//Uso de argumentos en las funciones
  function aplicarDescuento(precioProducto, desc){
    const descuentoAplicado = precioProducto * (desc / 100);
    return descuentoAplicado;
  }
  //en consola aplicarDescuento(50, parseInt(prompt("Introduzca descuento")));

 // Valores por defecto en los parámetros de las funciones
 function diHola(nombre = 'tú'){
    return "Hola " + nombre + ".";
  }

  //Otra forma de crear funciones
  let saludar = function(nombre){
    return "Hola " + nombre;
  } 
  //consola saludar('Diego');


  //Y vamos a seleccionarlo con un método JS que permite buscar por selector CSS:

  const button = document.querySelector(".hazClic");
  //A continuación vamos a agregarle un evento de clic mediante el método addEventListener(),
  // el cual llama a otra función como callback.
  
  function gestionarClic(){
      console.log("Clic!!");
  }
  button.addEventListener('click',gestionarClic);
  //Fíjate que en este caso, no se llama a la función en el callback, sino que sólo se especifica el nombre de la función que será llamada cuando la otra finalice.
  
  //También podríamos usar una función anónima:
  
  button.addEventListener('click',function(){
    console.log("Click 2!!");
  });

  //Selección u obtención de elementos HTML con JS

   /*
  método querySelector() obtenemos el primer elemento que coincida con el selector CSS que hayamos introducido como
   parámetro. En el ejemplo, el primer párrafo.
  */
  const p = document.querySelector('p.ejemplo');
  console.dir(p); //  todos los métodos y atributos disponibles.
  console.log(p.textContent);//el contenido en texto
  p.textContent = "nuevo contenido"; //lo actualizamos con un nuevo contenido


  //Si seleccionamos la imagen desde JS, podemos llamar al atributo classList para visualizar sus clases,
  // así como para observar otros métodos útiles que contiene el prototipo.
  const imagen = document.querySelector('.preparar');        
  console.log(imagen.classList);

  //add() remove() para eliminar clases o toggle() para intercambiar. Si no la tiene, la pone y si la tiene, la quita.


  //consola  imagen.classList.add('abrir');

  //consola imagen.classList.toggle('redondear');


  /* Con el método querySelectorAll() obtenemos todos los elementos que coincidan con el selector indicado.*/

const divs = document.querySelectorAll('div')



//Arrays en JavaScript


//Una forma para declarar y asignar valores a Arrays
//Creamos un objeto de la clase Array llamado "cadena" mediante la llamada a su constructor
var cadena=new Array();
//Importante recordar que comienza en 0
cadena[0]="rojo";
cadena[1]="amarillo";
alert(cadena[1]);//La mostramos
//Segunda forma de declarar y asignar valores a Arrays
var posts = ["Hola a todos!","Me encanta el riesgo"];

//a continuación se muestra en la consola todo el Array y el número de elementos que tiene
console.log(posts);
console.log(posts.length);
//Con push agregamos nuevo elemento
posts.push("nuevo elemento");
//Con Splice eliminamos elementos de un Array. Primer parámetro para inidcar a partir de dónde y el segundo para indicar el número de elementos a eliminar
posts.splice(1,1);
//Compruba cuál se ha eliminado mostrando de nuevo el Array
console.log(posts);
//También podemos agregar con splice, indicando que vamos a eliminar 0 elementos. Observa que se agrega en la posición indicada
posts.splice(1,0,"Nuevo post");
console.log(posts);

const gente = [
	{nombre: 'Diego', edad: 30},
  {nombre: 'Toni', edad: 10},
  {nombre: 'Johana', edad: 20},
];
//console.table(gente);
//Estructuras repetitvas

/*¿Cómo se hace un forEach en JavaScript?
forEach((value, i) => { console. log(value); }); 
La variable i se incrementará automáticamente en cada iteracción del bucle. 
*/
/*gente.forEach((persona,index) =>{
	console.groupCollapsed(`${persona.nombre}`);
  console.log(persona.edad);
  console.log("hola");
  console.groupEnd(`${persona.nombre}`);
  
});
console.log(gente[2].nombre);
*/
// while do while
//switch//json
