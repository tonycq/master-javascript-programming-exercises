function isLessThan(num1, num2) {
  // your code here
  if (num1 > num2){
    return true
  }else{
    return false
  }
}
//MÉTODO MÁS CORTO Y CLARO :

// La expresión num2 < num1 ya es booleana, 
// Siempre que un if retorna true o false directamente según 
// una comparación, puedo retornar la comparación sin el if.
//Esto reduce líneas, mejora la claridad y es una buena práctica profesional..

// true si num2 es menor, false si no...

// function isLessThan(num1, num2) {
 // return num2 < num1;
//}
