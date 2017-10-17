

//Crea una web que pida, por medio de un prompt(),
//la edad de una persona, en años. Dependiendo del número brindado,
// la web debe dar un mensaje que clasifica a la persona en: toddler,
// preschooler, gradeschooler, teenager, young adult and adult, según el criterio de esta página.
//
// Si la persona ingresa un dato que no es un número entero (por ejemplo: un string,
// un número decimal, un cero, o un campo vacío), la web debe dar un mensaje de error.
// Revisa este link que tiene un par de tips interesantes relacionados a este proyecto.

// Función tomada de StackOverflow
// n es el parámetro y al pasarlo por parseInt comprobamos que
// YA sea un entero y por esto sea === a n
var isInt = function(n) {
  return parseInt(n) == n;
}

var age = prompt("¿Cual es tu edad?");

var validAge = function(age){
  // Checar que la edad sea no sea cero o campo vacío y que sea entero
  if(age>0 && age!= "" && isInt(age)) {
    return true;
  } else {
    // Si age es 0, cadena vacia o no es entero, regresamos false
    return false;
  }
}

// Funcion para clasificar edades
// Toddler: 1-3 yrs.
// Preschool: 3-5 yrs.
// Gradeschooler: 5-12 yrs.
// Teen: 12-18 yrs.
// Young Adult: 18-21 yrs.
var clasificarEdad = function(age) {
  if (age < 3) {
    return "toddler";
  } else if (age < 6) {
    return "Preschool";
  } else if (age < 12) {
    return "Grandeschooler";
  } else if (age < 18) {
    return "Teen";
  } else if (age < 21) {
    return "Young adult";
  } else {
    return "Adulto";

  }
}

// Usamos validAge() para ver si continuamos
if(validAge(age)){
  alert("Tú eres un " + clasificarEdad(age));
} else {
  alert("Eres muy viejo o demasiado joven o tu edad no existe");
}
