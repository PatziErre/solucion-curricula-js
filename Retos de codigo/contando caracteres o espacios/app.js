

// Crea una web que pida, por medio de un prompt(), una frase al usuario.

var frase = prompt("Escribe una frase");

// La web debe presentar un mensaje que diga: el número de caracteres y espacios que componen el string ingresado: str.length.

alert("Tú frase tiene " + frase.length + " carácteres");

//En la consola, debe aparecer cada caracter impreso en una línea separada, en mayúscula: sign.toUpperCase() slice().

var imprimirCaracteres = function(frase) {
 for (i = 0; i < frase.length; i++) {
   var letra = frase.charAt(i).toUpperCase();
   console.log( letra + "\n");
 }
 return;
}
imprimirCaracteres(frase);

var contarCaracteres = function(frase) {
  var largoDeFrase = 0;
  do {
      largoDeFrase++;
    } while (frase.charAt(largoDeFrase) != "");
    return largoDeFrase;
}

console.log("El largo de la frase sin usar length es ", contarCaracteres(frase));

// Inicializamos el totalDeEspacios en cero

var contarEspacios = function (frase) {
  var totalDeEspacios = 0;
  for (var i = 0; i < frase.length; i++) {
  var letra = frase.charAt(i);
  if (letra == " ") {
    totalDeEspacios++;
  }
}
return totalDeEspacios;
}
console.log("El número de espacios en la frase es ", contarEspacios(frase));
