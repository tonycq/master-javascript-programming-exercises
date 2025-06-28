// Write your function here
function areBothOdd(num1, num2){
return (num1 %2 !==0) && (num2 %2) !==0
}

//“El sistema evalúa primero la operación matemática, luego la comparación, y 
// según esa comparación devuelve true o false”

//repaso de lo que es un modulo :
//El operador % devuelve el residuo o resto de una división.
//Ejemplos:
//5 % 2 → 1 (porque 5 dividido entre 2 da 2, sobra 1)
//6 % 3 → 0 (porque 6 dividido entre 3 da 2, sin residuo)
//7 % 2 → 1 (porque 7 dividido entre 2 da 3, sobra 1)

//ejemplo practico :
//(num1 + num2) % 3 === 0
//¿La suma de num1 y num2, dividida entre 3, 
// tiene residuo cero?"
//Si se, devuelve true. Si no, devuelve false.

//Orden de evaluación:
//JavaScript evalúa de adentro hacia afuera:

//Paréntesis: se evalúa (num1 + num2)
//Módulo: se calcula el residuo con %
//Comparación: se compara con === 0 o !== 0

//importante no puedo comparar :return num1 && num2 % 2 !== 0
//porque num2 % 2 se evalúa primero (por precedencia de operadores)y
//Luego se evalúa:num1 && (resultado de lo anterior)
//⚠️ Esto no está evaluando si num1 es impar, solo si num1 es un valor "truthy"
// 
//  (no cero, no null, no undefined, etc.)