const map = new Map()

map.set(1, "Number");
map.set("1", "String");
map.set(true, "Boolean");

console.log(map.get(1))

console.log(typeof(map));
console.log(map instanceof Map);

//for (let key of map.keys()) {
//	console.log(key)
//}
//
//for (let val of map.values()) {
//	console.log(val)
//}
//
//for (let data of map.entries()) {
//	let [key, value] = data;
//	console.log(key, value);
//}

const person = {
	name: "Juan",
	city: "Valencia",
	color: "red"
}

const personMap = new Map(Object.entries(person));
//console.log(personMap.get("city"))

const personClone = Object.fromEntries(personMap);

let juan = {name: 'Juan'}, nino ={name: 'Nino'}, guizmo ={name: 'Guizmo'};

let otro = {name: 'Otro'}

const admins = new Map()
	
admins
	.set(juan, 'superadmin')
	.set(nino, 'admin')
	.set(guizmo, 'editor')

function doAdmin(user) {
	if (admins.has(user)) {
		console.info(`User ${user.name} is doing ${admins.get(user)} stuff!`)
	} else {
		console.error("User not found on admin list!")
	}
}

juan = null;
doAdmin(juan);