function isOldEnoughToDrive(age) {
  // your code here
  if(age >= 16 ){
    return true
  }else{
    return false
  }
}
// Reforsze cuales son las entradas salidas y pseudocodigo
/* la entrada es age la edad 
la salida es el retorno un boleano
Mejora sugerida
Precisión en la descripción de la salida mas especifico:
→ La función retorna true si la edad es igual o mayor a 16 (edad legal en EE.UU.),
 y false en caso contrario.
Esto muestra dominio del contexto, no solo de la estructura.
 */
/*Bonus ¿Qué pasa si age no es un número? 
¿Debería aceptar decimales como 15.9?
Verifica que sea número, entero y mayor o igual a 16:
if (typeof age === "number" && !isNaN(age) && Number.isInteger(age) && age >= 16)
se pueden usar varios && para comparar 

**typeof age === "number": verifica que la variable es del tipo number.

**!isNaN(age): asegura que no sea NaN (Not a Number), 
que también es de tipo number pero no válido ejemplo:

Number.isInteger(age): asegura que age sea un número entero sin decimales.
isNaN("abc")     // ➜ true  ← No se puede convertir a número
isNaN(undefined) // ➜ true  ← No es un número
isNaN(NaN)       // ➜ true  ← Por definición, NaN es “Not a Number”
isNaN("16 años") // ➜ true  ← No es un número puro

aprendi a no comparar if (age === Number && age >= 16) // ❌ Incorrecto
Number es un constructor, no un tipo. Comparar con === Number
nunca será true para valores como 16.
 */