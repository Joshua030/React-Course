import { useCallback, useState } from "react"
import { ShowIncrement } from "./Showincrement";

export const CallbackHook = () => {

  const [counter, setcounter] = useState(10);

  const increment = useCallback(
    () => {
      setcounter((value)=> value + 1)
    },
    [],
  )
  

  // const increment = () => {
  //   setcounter (counter + 1);
  // }

  return (
    <>
    <h1> useCallback Hokk: {counter} </h1>
    <hr />

    < ShowIncrement 
    increment={increment}
    />
    </>
  )
}
