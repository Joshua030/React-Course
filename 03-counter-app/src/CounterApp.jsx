import {useState} from 'react'
import PropTypes from 'prop-types'

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
export const CounterApp = ({value})=> {
    const [ counter , setCounter] = useState (value);
    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter(c=>c+1);
    }
    const handleSubtract = () => {
        // setCounter(counter + 1);
        setCounter(c=>c-1);
    }
    const handleReset = () => {
        // setCounter(counter + 1);
        setCounter(value);
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2> {counter}</h2>
        <TypesOfFruit/>
        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSubtract}> -1 </button>
        <button onClick={handleReset} > reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}