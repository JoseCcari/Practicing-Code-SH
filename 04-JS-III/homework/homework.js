// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:}
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  lastElementArray = array [array.length - 1]; 
  return lastElementArray
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  sizeArray = array.length;
  return sizeArray
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0; i<=array.length-1; i++){
    array[i] +=1;
}
return array 

/* const newArr = numbers.map(myFunction)
   function myFunction(num) {
   return num - 1;
}

*/

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let phrase = palabras.join(' ');
  return phrase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i=0; i<=array.length-1; i++){
    if (array[i] == elemento){

        return true ;
    }
    
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let cont = 0;
  for(let i=0; i<=numeros.length-1; i++){
    cont+=numeros[i]; 
    
  }
  return cont


}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sumNumbers = 0;
  let promScores ;
  let sizeArray = resultadosTest.length;
  for(let i=0; i<=resultadosTest.length-1; i++){
    sumNumbers += resultadosTest[i];
  }
  promScores = sumNumbers/sizeArray;
  return promScores

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let upperNumber = Number.NEGATIVE_INFINITY;
  for (let i = 0 ; i < numeros.length ; i++){
    if (numeros[i]>upperNumber){
      upperNumber = numeros[i];
    }
  }
  return upperNumber

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let  sizeArguments = arguments.length;
  let productArgs = 1;
  if (sizeArguments === 0 ){
   return 0
  }
  else{
    for (let i=0 ; i < sizeArguments; i++) {
      productArgs *= arguments [i]
    } 
    return productArgs
  }

  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let numElements = 0;
  for (let i = 0 ; i < arreglo.length ; i++){
    if (arreglo[i]>18){
      numElements += 1;
    }
  } 
  return numElements

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana'
  }
  else {
    return 'Es dia Laboral'
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let number = n;
  while (number > 10 ){
    number /= 10;
  }
  if (Math.floor(number) === 9){
    return true
  }
  else{
    return false
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let equalNumber = arreglo [0];

  for (let i = 1 ; i < arreglo.length  ; i++){
    if(arreglo[i]===equalNumber){
      return true
    }
    else {
      return false
    }
  }

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

 // array.includes
 let newArray = [];
 for (let i = 0 ; i < array.length  ; i++){
  if(array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre' ){
    newArray.push(array[i])
  }
} 

  if (array.includes ('Enero') && array.includes ('Marzo') && array.includes ('Noviembre') ){
    return newArray
  }
  else {
    return 'No se encontraron los meses pedidos'
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArray = [];
  for (let i = 0 ; i < array.length  ; i++){
    if(array[i] > 100 ){
      newArray.push(array[i]);
    }
  }
  return newArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let newArrayn = [];
  for (let i = 0 ; i < 10 ; i++){

    numero = numero + 2;
    if(numero === i){
      return 'Se interrumpió la ejecución'
    }
    newArrayn.push (numero) ;
  }
  return newArrayn



}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let newArrayn = [];
  for (let i = 0 ; i < 10 ; i++){
    if(i === 5){
      continue;
    }
    numero = numero + 2;
    newArrayn.push (numero) ;
  }
  return newArrayn


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
