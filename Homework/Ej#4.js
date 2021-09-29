//Ejercicio #4
function squareDigits(n) {

    return +(n.toString().split('').map(val => val * val).join(''));
  
  }
  
  console.log(squareDigits(9119));