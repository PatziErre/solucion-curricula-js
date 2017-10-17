
var add = function(num1, num2){
  var suma = num1 + num2;
  return suma;
}

var multiply = function(x, y){
  return x * y;
}

var sumaB = add(9824, 777);
//36325 * (9824 + 777)
console.log("El resultado es " + multiply(36325, sumaB));
