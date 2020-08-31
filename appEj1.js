
//1- Imprimir por consola un mensaje guardado en una variable usando la función console.log().
/*
var x= "hola como estas";
console.log(x);
*/

//--------------------------------------------------------------------------------------------------------------

//2- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()
/*
var y =["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
console.log(y);
*/

//--------------------------------------------------------------------------------------------------------------

//3- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.
/*
function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
console.log(parImpar(2));
*/

//--------------------------------------------------------------------------------------------------------------

//4- Define una función que dado un array de números nos dice si alguno es par.
/*
algunoEsPar = [1,2,3]

algunoEsPar.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item % 2 == 0;
  return true
}
*/

//--------------------------------------------------------------------------------------------------------------

//5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó.
// Un alumno aprobó si todas sus notas son mayores o iguales a 4
/*
const aprobo =[
{notas1:8,notas2:6,notas3:2,notas4:4}
]

const check=aprobo.every(item=>{
  return item.notas1>=4 && item.notas2>=4 && item.notas3>=4 && item.notas4>=4
})

console.log(check)
*/

//--------------------------------------------------------------------------------------------------------------

//6- Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron.
// Podés usar la función que hiciste en el ejercicio anterior.
/*
const quienesAprobaron =[
  {nota1:8,nota2:6,nota3:2,nota4:4},
  {nota1:7,nota2:9,nota3:4,nota4:5},
  {nota1:6,nota2:2,nota3:4,nota4:2},
  {nota1:9,nota2:6,nota3:7,nota4:10}];

var result=quienesAprobaron.filter(function(quienesAprobaron){
  return quienesAprobaron.nota1>=4 && quienesAprobaron.nota2>=4 && quienesAprobaron.nota3>=4 && quienesAprobaron.nota4>=4;
})

console.log(result);

*/

//--------------------------------------------------------------------------------------------------------------

//7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
/*
 hayAlgunNegativo =[2,-3,9]
 const even=(element)=> element <0;
console.log(hayAlgunNegativo.some(even));
*/

//--------------------------------------------------------------------------------------------------------------

//8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen
/*
cuantosCumplen=[7,9,25,42]
const result= cuantosCumplen.filter(cuantosCumplen=>cuantosCumplen% 2 == 0) ;
console.log(result);
*/


//--------------------------------------------------------------------------------------------------------------

//9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen
/*
rechazar=[7,9,87,42]
const result= rechazar.filter(rechazar=>rechazar% 2 == 1);
console.log(result);
*/

//--------------------------------------------------------------------------------------------------------------

//10- Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento

contiene=[7,8,9]

const result= contiene.filter(contiene=>contiene==8);
console.log(result);
