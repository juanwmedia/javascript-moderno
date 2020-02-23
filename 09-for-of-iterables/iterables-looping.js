// for...of
const colores = ["Rojo", "Azul", "Verde", "Amarillo"];
for (let color of colores) {
  console.log(color);
}

const iterator = colores[Symbol.iterator]();

const persona = {
  nombre: "Juan",
  ciudad: "Valencia",
  color: "rojo"
};

// for (let prop of persona) {
//   console.log(prop);
// }

for (let [key, value] of Object.entries(persona)) {
  console.log(key, value);
}

const aprender = {
  // tecnologías y herramienta
  vue: ["Vue3", "Nuxt", "Grindsome"],
  js: ["ESNEXT", "Patterns", "Testing"],
  css: ["Tailwind", "BEM", "SubGRID"]
};

aprender[Symbol.iterator] = function() {
  // Por cada matriz con herramientas, ir retornando cada una de ella
  let indiceTecnologia = 0;
  let indiceHeramienta = 0;
  const tecnologias = Object.values(this);
  return {
    next() {
      const tecnologia = tecnologias[indiceTecnologia];

      // Comprobar que haya más herramientas
      if (!(indiceHeramienta < tecnologia.length)) {
        indiceTecnologia++;
        indiceHeramienta = 0;
      }

      // Comprobar que haya más tecnologías
      if (!(indiceTecnologia < tecnologias.length)) {
        return {
          value: undefined,
          done: true
        };
      }

      return {
        value: tecnologia[indiceHeramienta++],
        done: false
      };
    }
  };
};

for (let herramienta of aprender) {
  console.log(herramienta);
}
