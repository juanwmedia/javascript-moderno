// var crea variables con ámbito global/funcional
var name = "Andrés"

function greetings() {
	var name = undefined
	
	return function() {
		// Closure
		console.log(name)	
	}
	
	name = "Juan"
	
}

//greetings()()

// let crea variables con ámbito de bloque
//var i = 1;
//for (i; i <= 10; i++) {
//	console.log(i)
//}

for (let i = 1; i <= 10; i++) {
	//console.log(i)
}

// console.log(i) // Ya no tenemos acceso

if (true) {
	let transform = name.toUpperCase();
}

// console.log(transform) // No tenemos acceso

// const crea constantes
const IVA = .21
// IVA = .16  // No se puede cambiar

const Person = {}
Person.name = name
console.log(Person) // No hay problema

const Person2 = Person
Person2.city = "Valencia"
console.log(Person) 