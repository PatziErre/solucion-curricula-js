//
// 2. Ordenando comida
//
// Imagina que estás pidiendo comida en un restaurante.
// Tu plato favorito es ceviche, así que lo elegirías si está en el menú.
// Si no hay ceviche, elegirías tacos al pastor. Si eso no está, te irías por empanada chilena.
// En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa.
//  Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú,
//  decidas qué ordenar.
//

var orderFood = function(){
  var ceviche = 1;
  var tacosAlPastor = 1;
  var empanadaChilena = 3;
  if (ceviche > 0){
    return "ceviche";
  } else if (tacosAlPastor > 0) {
    return "tacos al pastor";
  }
  else if (empanadaChilena > 0) {
    return "empanada chilena";
  } else {
    return "hamburguesa";
  }
}
console.log("Tu orden en el restaurante es " + orderFood());
