
//1- Imprimir por consola un mensaje guardado en una variable usando la función console.log().
/*
var x= "hola como estas";
console.log(x);
*/

//--------------------------------------------------------------------------------------------------------------

//2- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()
/*
var M =["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

for(var i=0;i<M.length;i++)
{
  console.log(M[i]);
}
*/
//--------------------------------------------------------------------------------------------------------------

//3- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.
/*
function parImpar(numero) 
{
  if(numero % 2 == 0) 
  {
    return "par";
  }
  else 
  {
    return "impar";
  }
}
console.log(parImpar(2));
*/

//--------------------------------------------------------------------------------------------------------------

//4- Define una función que dado un array de números nos dice si alguno es par.
/*
function algunoEsPar (arrnum)
{
if (Array.isArray(arrnum))
{
return arrnum.some (Element=>Element%2==0);
}
else
{
  console.log("no cuenta como arr");
}
}
console.log(algunoEsPar([1,2,3]));

*/
//--------------------------------------------------------------------------------------------------------------

//5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó.
// Un alumno aprobó si todas sus notas son mayores o iguales a 4
/*
function aprobo (nota)
{
  
  var notaaprobado = 4;

  return nota.every(Element=>Element>=notaaprobado)
}
console.log(aprobo([8,6,2,4]));
*/
//--------------------------------------------------------------------------------------------------------------

//6- Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron.
// Podés usar la función que hiciste en el ejercicio anterior.
/*
function aprobo (nota)
{
  
  var notaaprobado = 4;

  return nota.every(Element=>Element>=notaaprobado)

}
function quienesAprobaron (nota)
{

  return nota.filter(notas=>aprobo(notas))
  
} 

 console.log(quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]));

*/

//--------------------------------------------------------------------------------------------------------------

//7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
/*
function  hayAlgunNegativo (arr)
{
 return arr.some (Element=>Element<0);
}
console.log( hayAlgunNegativo([2,-3,9]));
*/
//--------------------------------------------------------------------------------------------------------------

//8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen
/*
function even(Element)
{

  return Element%2===0;

}
function cuantosCumplen(fun,array)
{

  var arr= array.filter(Element => fun(Element));

  return arr.length;

}

console.log(cuantosCumplen(even,[7,9,25,42]));

*/
//--------------------------------------------------------------------------------------------------------------

//9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen
/*

function even(Element)
{

  return Element%2===0;

}

function rechazar(fun,arr)
{

var arrqnocumplen = arr.filter(Element=>!fun(Element))

return arrqnocumplen;
}

console.log(rechazar(even,[7,9,87,42]));
*/
//--------------------------------------------------------------------------------------------------------------

//10- Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento
/*
function contiene (num,arr) 
{

  return arr.some (Element=> Element ==num);

}

console.log(contiene(8,[7,8,9]));
*/
//--------------------------------------------------------------------------------------------------------------

//11- Crea una clase Persona que tenga los atributos nombre y edad. 
//Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.
/*
class Persona
{

constructor(nombre , edad)
 {
  this.nombre=nombre;
  this.edad=edad;
 }
 Presentarse()
 {
   return this.nombre+" "+this.edad+" "+"este es mi nobre y edad";
 }

}

var persona = new Persona("giuliano",20);
console.log(persona.Presentarse());
*/
//12- Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
//El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
//El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.
/*
class Persona
{

constructor(nombre , edad)
 {
  this.nombre=nombre;
  this.edad=edad;
 }
 Presentarse()
 {
   return this.nombre+" "+this.edad+" "+"este es mi nobre y edad";
 }

}

class Estidiante extends Persona
{
  constructor (nombre,edad,profesor)
  {
super(nombre,edad)
this.profesor=profesor;
  }

estudiando()
  {
return "Estudiando con"+" "+this.profesor;
  }

  setProfesor(profesor)
  {
    this.profesor=profesor;
  }

}

var estidiante = new Estidiante("giuliano",20,"Christian Dario Nievas");
console.log(estidiante.Presentarse());
console.log(estidiante.estudiando());
*/

//13- Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante.
// Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando y
//el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista..
// Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)


class Persona
{

constructor(nombre , edad)
 {
  this.nombre=nombre;
  this.edad=edad;
 }
 Presentarse()
 {
   return this.nombre+" "+this.edad+" "+"este es mi nobre y edad";
 }

}


//-----------------------------------------------------------------------------------------------

class Estudiante extends Persona
{
  constructor (nombre,edad,profesor)
  {
super(nombre,edad)
this.profesor=profesor;
  }

  
estudiando()
  {
return "Estudiando con"+" "+this.profesor;
  }

  setProfesor(profesor)
  {
    this.profesor=profesor;
  }

}


//-----------------------------------------------------------------------------------------------

class Profesor extends Persona
{
  constructor(nombre ,edad)
  { 
    super (nombre, edad);
    this.estudiantes=[];
  }

enseñando()
{
    if(this.estudiantes.length>0)
    {
        console.log("los alumnos de: "+p1+" son: ");
        this.estudiantes.forEach(estudiante => console.log(estudiante.nombre));
    }   
}

addEstudiante(estudiante)
{
  this.estudiantes.push(estudiante);
  estudiante.setProfesor(this);
}

}

  a1=new Estudiante("giuliano,20");
  a2=new Estudiante("federico,30");
  a3=new Estudiante("giselle,40");

  p1=new Profesor("julio",50)

  p1.addEstudiante(a1);
  p1.addEstudiante(a2);
  p1.addEstudiante(a3);

  p1.enseñando(a1);

  a1.estudiando();
  a2.estudiando();
  a3.estudiando();