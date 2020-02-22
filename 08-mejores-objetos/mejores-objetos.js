const nombre = "Juan";
const color = "rojo";
const ciudad = "Valencia";
const lenguaje = "JavaScript";

const persona = {
  nombre,
  color,
  ciudad,
  lenguaje,
  [ciudad + "CP"]: 46006,
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
};
const [nombre2, color2, ciudad2, lenguaje2] = Object.values(persona);

Object.entries(persona).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});
