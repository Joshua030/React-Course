import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('09-promesas tests', () => { 

    test('getHeroeByIdAsync should return a hero', (done) => { 

        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero => {

            expect( hero ).toEqual( {
           id: 1,
           name:'Batman',
           owner: 'DC'
        });

        done();

        });
     });

     test('getHeroeByIdAsync should return a error', (done) => { 

        const id = 100;
        getHeroeByIdAsync( id )
        .catch( error => {

            expect( error ).toBe(`No se pudo encontrar el héroe ${id}`);

        done();

        });
     });
});
 