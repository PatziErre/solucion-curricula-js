//Ingresos
var income = prompt("¿Cuanto es el ingreso?");
// costo
var costs = prompt("¿Cuanto es el costo?");
//Porcentaje de impuestos
var taxPercent = prompt("¿Cuanto es el pocentaje(%) de impuestos?");
//Ganancia bruta
var grossProfit = income-costs;
//Obteniendo cantidad de impuestos
var tax = grossProfit*taxPercent/100
//ganancia neta
var netIncome = grossProfit-tax;
//Mostrando ganancia neta
document.write("Tu ganancia neta es $" + netIncome);
