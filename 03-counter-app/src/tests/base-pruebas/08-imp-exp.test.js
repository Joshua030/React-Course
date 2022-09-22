import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('08-imp-exp tests', () => { 

    test('getHeroeById should return a heroe by id', () => { 
      const id = 1;
      const hero = getHeroeById( id);
      
      expect( hero ).toEqual(  { id: 1, name: 'Batman', owner: 'DC' } )
     })

     test('getHeroeById should return undefined', () => {
        const id = 100;
        const hero = getHeroeById( id);

        expect( hero ).toBe( undefined );
        expect(hero).toBeFalsy();
     });

     test('getHeroesByOwner should return a list of DC heroes', () => { 
        const owner = 'DC' ;
        const HeroesByOwner = getHeroesByOwner(owner);

        expect( HeroesByOwner.length).toBe( 3 );
        expect( HeroesByOwner).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
          expect( HeroesByOwner).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
      });

      test('getHeroesByOwner should return a list of Marvel heroes', () => { 
        const owner = 'Marvel' ;
        const HeroesByOwner = getHeroesByOwner(owner);
        console.log(getHeroesByOwner(owner));

        expect( HeroesByOwner.length).toBe( 2 );
        expect( HeroesByOwner).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])
      });
      
 });