function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18){
    return true
    }else{
      return false
    }
  }
// Mejoras y sugerencias de dificultad puedo evaluar si el numero 
// es  real, entero, y válido (no NaN, no null, no string)
/*typeof age === 'number'         ✅
&& !isNaN(age)                  ✅
&& Number.isInteger(age)        ✅
&& age >= 0                     ✅ (edad no negativa)
Importante : typeof age === 'number' descarta null, string, y undefined
importante : 💡 Todas las validaciones con typeof comparan 
con strings escritos entre comillas.
-Porque typeof siempre retorna una cadena 
(string) que describe el tipo del valor.
typeof SIEMPRE se compara con un string en minúsculas,
 como 'number', 'string', 'boolean', 'object'  */

 //Ejemplo:

/*typeof 18 === 'number'         // ✅
typeof "hola" === 'string'     // ✅
typeof null === 'object'       // ✅
typeof undefined === 'undefined' // ✅
typeof true === 'boolean'      // ✅
typeof {} === 'object'         // ✅
typeof [] === 'object'         // ✅ (los arrays también son objetos)
typeof function(){} === 'function' // ✅

 */