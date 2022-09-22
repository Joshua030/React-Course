import { render } from "@testing-library/react"

describe('Pruebas en <FirstApp />', () => {

    test('should match with the snapshot', () => { 
       const title = 'Hola soy Goku';
        render( <FirstApp title={title}/>)
     })
})