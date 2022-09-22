import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 
    test('getImagen should return a url of the image', async() => { 

        const url= await getImagen();
        console.log(url);

        expect( typeof url ).toBe( 'string' );
     })
 });