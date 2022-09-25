import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iteratioNumber=100) => {
  for (let index = 0; index < iteratioNumber.length; index++) {
    console.log('Ahi vamos...');
    
  }
  return `${iteratioNumber} iterations done` ;
}

export const MemoHook = () => {
   const {counter, increment} = useCounter(10);
   const [show, setShow ] = useState(true);
   const memorizedValue = useMemo ( () => heavyStuff(counter), [counter])
  return (
    <>
    <h1>Counter: <small>{counter}</small> </h1>
    <hr />
    
    <h4>{memorizedValue}</h4>

    <button
    className="btn btn-primary mt-2"
    onClick={() => increment()}
    >
        +1
    </button>

    <button
    className="btn btn-primary mt-2"
    onClick={() => setShow(!show)}
    >
        Show/Hide {JSON.stringify(show)}
    </button>
    </>
  )
}
