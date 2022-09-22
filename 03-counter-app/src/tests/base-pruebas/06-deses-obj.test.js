import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Pruebas en 06 destructuring', () => { 
test('usContext should return a nested object', () => {    
const {clave} = 12245;
const {edad} = 25;
const {nombre} = "";
const {rango} ="";
const user = usContext ({ clave, nombre, edad, rango });
    expect(user).toEqual({
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    });
    });
});