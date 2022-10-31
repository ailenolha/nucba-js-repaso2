// NO ESTA LINEKADO ESTE ARCHIVO

const array = [1,2,3,4];

const arrayDeObjetos = [
  { id: 1, nombre: "ailen"}, 
  { id: 2, nombre: "pablo"},
  { id: 3, nombre: "carlos"}
];

// MINI RESUMEN DE LOS METODOS DE ARRAY:

array.filter();
// Devuelve un nuevo array con todos los elementos que cumplan con una condicion
// Se usa return

array.map();
// Devuelve un nuevo array
// Espera una callback, una funcion que producira un elemento del nuevo array
// Va a tener los resultados de la función para cada uno de los valores del array original
// Se usa return

array.forEach();
// Espera una callback, una funcion a ejecutar por cada uno de los elementos del array original
// Por cada uno de los elementos del array hace cumplir la condicion / la funcion
// Void, no devuelve nada
// No modifica el array original

array.find();
// Devuelve el primer elemento del array que cumpla con la condicion
// Espera una callback, una funcion que se ejecuta sobre cada valor en el array
// No modifica el array original

array.some();
// Evalua si al menos un elemento del array cumple con la condicion
// Devuelve true o false
// Espera una callback, una funcion que verifica cada elemento
// Parecido a .every(), pero permite que algunos no cumplan la condicion

array.every();
// Indica si todos los elementos del array cumplen con una condicion
// Espera una callback, una funcion que prueba cada elemento
// Devuelve true o false

array.sort();
// Ordena un array: los pasa a string, agarra el primer caracter (sin importar que tenga más)
// Compara con referencia a UNICODE
// Puede recibir por parametro una funcion comparadora
// En forma ascendente: a - b
//    Si la resta es menor a 0: a viene primero que b
//    Si la resta es igual a 0: no hay diferencias
//    Si la resta es mayor a 0: b viene primero que a
// En forma descendente: b - a
//    Si la resta es menor a 0: b viene primero que a
//    Si la resta es igual a 0: no hay diferencias
//    Si la resta es mayor a 0: a viene primero que b

array.sort( (a,b) => a - b ); // en forma ascendente numeros
array.sort( (a,b) => b - a ); // en forma descendente numeros

array.sort( (a,b) => { //para ordenar por array de objetos por alguna propiedad
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}); 

array.indexOf();
// Devuelve el indice del elemento del array. Si no lo encuentra devuelve -1

array.lastIndexOf();
// Devuelve el ultimo indice de un elemento del array

array.length;
// Dice la longitud del array

array.includes();
// Indica si el array incluye lo que pongamos en el parametro

array.concat();
//concatena lo que ponemos en el parametro

array.join();
// Une todos los elementos de un array en un string, pero por defecto los separa con coma si no se pone nada entre ()

array.pop();
// Elimina el ultimo elemento del array y lo devuelve.
// Modifica el array original, no crea uno nuevo.

array.push();
// Agrega algo al final del array, queda como ultimo elemento del array

array.shift();
// Elimina el primer elemento del array

array.unshift();
// Agrega algo al principio del array, como primer elemento

array.slice();
// Devuelve un array que es una copia del original desde donde le indiquemos hasta donde le indiquemos (éste no inclusive)

array.splice(indiceDesde, cuantosBorrar, queAgregar);
// Modifica el array original.
// Agrega o elimina elementos.
// Elimina desde donde digo y agrega desde donde digo.
// Devuelve si elimino o agrego algo?, sino lo devuelve vacío

array.toString();
// Devuelve todos los elementos juntos en un solo string, separados por coma.
// No modifica al array original

arrayDeObjetos.findIndex();
// Devuelve el indice de un objeto

array.reduce();
// Reduce el array en un solo valor.
// Recibe un callback y un valor inicial (es opcional este)