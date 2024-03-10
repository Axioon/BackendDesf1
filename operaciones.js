const fs = require("fs");
let datosMascota = [];
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  

  //revisamos si existe un archivo  json donde almacenamos los registros

  try {
    if (fs.existsSync("./citas.json")) {
      const contenido = fs.readFileSync("./citas.json", "utf8");
      datosMascota = JSON.parse(contenido);
    }

    const nuevaMascota = {
      nombre: `${nombre}`,
      edad: `${edad}`,
      tipo: `${tipo}`,
      color: `${color}`,
      enfermedad: `${enfermedad}`,
    };

    //agregar

    datosMascota.push(nuevaMascota);

    // actualizar el array
    fs.writeFileSync(
      "../DESAFIOVETERINARIANODE/citas.json",
      JSON.stringify(datosMascota)
    );

    console.log("mascota registrada");
  } catch (error) {
    console.error("error al registrar mascota", error);
  }
};

const leer = () => {
  try {
    if (datosMascota.length == 0) {
      const lectura = fs.readFileSync("./citas.json");
      console.log(JSON.parse(lectura));
    } else {
      console.log("porfavor ingresar mascotas");
    }
  } catch (error) {
    console.error("error al leer citas", error);
  }
};

module.exports = { registrar, leer };
