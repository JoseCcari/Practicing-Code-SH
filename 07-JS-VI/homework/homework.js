// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  let newName = nombre[0].toUpperCase() + nombre.substring(1) ;
    
  return newName

}
function invocarCallback(cb) {

  // Invoca al callback `cb`
  //Tu código:
  cb();


}
function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.

  //Tu código:
  cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function (acc , element){
    return acc + element
  });
  cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(cb);

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  return array.map(cb)

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let filterAlla = array.filter(element => element[0] === 'a' );
  return filterAlla
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};


/*
Aunque JS nunca dejará de ser "extraño", entendiendo cómo funciona por dentro tendremos menos confusión.
Verdadero
----------
¿Para qué creamos objetos en JavaScript?
Todas las respuestas son correctas.
------------------------
¿Qué es __proto__ en JavaScript?
Una sintaxis más amigable para las clases de JavaScript.-<<<<<< NO
-----
¿Cuál de las siguientes afirmaciones sobre los objetos en JavaScript es INCORRECTA?
Object es el prototipo madre de todos los objetos y prototipos. <<<<<NO
------------
¿Cuáles son las palabras clave que diferencian a una función de un prototipo en JavaScript?
this, new y prototype.

-------

¿Qué es programación orientada a objetos?
Un paradigma de programación imperativo.
-------------------------
¿Cuáles son ventajas de utilizar programación orientada a objetos?
Menos líneas de código y reusabilidad. NO
------------
¿Qué es un paradigma de programación?
Modelos para resolver problemas comunes.
-------------
¿Cuál de las siguientes es una mejor forma de calificar nuestro código JavaScript?
Legibilidad.
-----------------
¿Cuáles son los pilares de la POO?
Abstracción, encapsulamiento, herencia y polimorfismo.
---------------
¿Qué es abstracción en JavaScript?
Crear prototipos "molde" para abstraer la lógica y datos de nuestros objetos.
-----------------
¿Qué es encapsulamiento en JavaScript?
Esconder, proteger o evitar la manipulación de métodos y atributos en prototipos.

----------------
¿Qué es herencia en JavaScript?
La capacidad de heredar/extender los métodos y atributos de un prototipo "madre".
-----------------
Los atributos __proto__ en los objetos de JS pueden contener otro atributo __proto__ por dentro. Esto es:
Verdadero
---------------
Para aplicar la herencia en JavaScript, ¿cómo podemos ejecutar el método constructor del prototipo del que extendemos?
Con el método super.
--------------
Los módulos de ECMAScript 6 nos permiten:
Aplicar encapsulamiento a nivel de etiquetas. NO

------------------
¿Cómo podrías crear un getter que exponga al atributo "privado" _name en JavaScript?
get name() { return this._name; }
-------------------
¿Cuál de las siguientes líneas de código para acceder al atributo de un objeto en JavaScript es INCORRECTA?
objeto["atributo"] NO
------------------
¿Qué son los prototipos en JavaScript?
Instancias de clases en JavaScript.NO

----------
¿Si todos los arrays tienen el método .push dentro de su atributo __proto__, cuál es la forma más cómoda de ejecutarlo desde el array asignaturas en JavaScript?
asignaturas.push()
*/