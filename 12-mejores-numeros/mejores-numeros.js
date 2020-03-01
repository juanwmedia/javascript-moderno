// Math.trunc
// Convierte a número antes de comparar
const num = 123.345;
console.log(Math.trunc(num));
// console.log(Math.ceil(num));
// const num2 = 1312312312312312312312.1;
// console.log(num2.toString());
// console.log(parseInt(num2));

// Number.isNaN
let valor = undefined + 1;
console.log(Number.isNaN(valor));
// El método global retorna true en valores que se pueden convertir en NaN pero que no tienen por qué ser NaN. Ojo con esto.
// console.log(isNaN(valor));

// valor = "NaN";
// console.log(Number.isNaN(valor));
// console.log(isNaN(valor));

// Number.isInteger
let entero = 10;
console.log(Number.isInteger(entero));

// entero = 10.0;
// console.log(Number.isInteger(entero));

// entero = 10.234;
// console.log(Number.isInteger(entero)); // false

// Number.isFinite
let finito = 20;
console.log(Number.isFinite(finito));
// El método global convierte a número
// console.log(isFinite(finito));

// finito = "20";
// console.log(Number.isFinite(finito));
// console.log(isFinite(finito));
