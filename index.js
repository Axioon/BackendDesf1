const { registrar, leer } = require('../DESAFIOVETERINARIANODE/operaciones.js');


const accion= process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const tipo= process.argv[5];
const color = process.argv[6];
const enfermedad= process.argv[7];

console.log(accion)

try{

    if(accion === "registrar"){

        registrar(nombre,edad,tipo,color,enfermedad)
    
    }else if (accion === 'leer') {
    
        leer()
    
    }

} catch(error){

    console.error('ingresar operacion correcta',error)
}
