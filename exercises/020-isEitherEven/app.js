// Write your function here
function isEitherEven (num1,num2){
return (num1  % 2 ===0 || num2 %2 ===0) 

}
// como funciona el operador || OR
//   A 	      B	         A || B
//  true	 true	      true
//  true	 false	      true
//  false    true	      true
//  false	 false	      false

//ESCENARIO DOS COMO DEVOLVERIA TRUE SI SOLO UNO ES TRUE 
//js No tiene directo un  XOR que evalua esa condicion como python ejemplo: ^^
//usando una comparacion de este resultado es distinto a este podemos devolver true cuando solo 
// uno sea true ej:(num1 es par) !== (num2 es par)
//                    true       !==   false      → true
//                    true       !==   true       → false
//                    false      !==   false      → false
//(num1 %2===0) !== (num2 %2===0)