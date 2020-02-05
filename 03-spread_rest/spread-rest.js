const mapState = {
	loggedIn() {
		return true
	},
	member() {
		return false
	}
}

const computed = {
	...mapState,
	computedProp() {
		return null
	}
}

console.log(computed);

// SPREAD
// Expande valores (string o matriz) allá donde se esperan argumentos(función) o elementos(matrices)
const numeros = [1, 2, 3, 4, 5];
console.log(...numeros);

const oracion = "Hola mundo";
console.log(...oracion);

// Pasar matrices como argumentos
function sumar(a, b, c, d ,e) {
	return a + b + c + d + e;
}

//console.log(sumar.apply(null, numeros));
console.log(sumar(...numeros));

// Clonar matrices y objetos
const numerosCopia = [...numeros];
//console.log(numerosCopia);
numeros.push(6);
console.log(numeros, numerosCopia);

const datos = {nombre: 'Juan', ciudad: 'Valencia'};
const datosCopia = {...datos};
console.log(datosCopia);

// Fusionar matrices y objetos
const preferencias = {nombre: 'Andrés', cerveza: 'Judas', color: 'rojo'};
const persona = {...datos, ...preferencias};
console.log(persona);


// REST
// Representa un número infinito de argumentos como matriz
function sumar2(...argumentos) {
	return argumentos.reduce((actual, total) => actual + total);
}

// Se puede usar spread varias veces
const numeros2 = [21, 22, 66];
console.log(sumar2(...numeros, ...[55], ...numeros2, 4, 88, 99));