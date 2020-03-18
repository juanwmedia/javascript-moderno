const myColors = ["purple", "cyan"];
const colors = new Set(myColors);

// Añadir al set
colors.add("red");
colors.add("green");
colors.add("white");
colors.add("yellow");
// No permite duplicados
colors.add("yellow");
colors.add("yellow");
colors.add("yellow");
colors.add("yellow");

// Iterar sobre el set
for (let color of colors) {
  console.log(color);
}

// Eliminar elementos del set
console.log(colors.size);
console.log(colors.delete("yellow"));
console.log(colors.size);

const text = "Welcome to the jungle!";
console.log(text.length);
console.log(new Set(text).values());

// Acceder a elementos del set
console.log(colors.has("green"));

// Limpiar el set
colors.clear();
