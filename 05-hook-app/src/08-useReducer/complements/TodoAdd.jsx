import { useState } from "react";

export const TodoAdd = ({onNewTodo}) => {
    const [message, setMessage] = useState('');
    const [InputValue, setInputValue] = useState({
        id: new Date().getTime(),
        description: "",
        done: false,
      });
    const onInputChange = ({ target }) => {
      setInputValue({
        id: new Date().getTime(),
        description: target.value,
        done: false,
      })
      setMessage(target.value)
    }

    const addNewTodo = (event) =>{
    event.preventDefault();
    if(InputValue.description.length <= 1) return;
    onNewTodo(InputValue);
    setInputValue({
        id: new Date().getTime(),
        description: "",
        done: false,
      });
      setMessage('')
      
  }
    
  return (
    <form>
          <input
          onChange={onInputChange}
            type="text"
            placeholder="¿Que hay que hacer?"
            className="form-control"
            value={message}
          />
          <button onClick={addNewTodo} type="submit" className="btn btn-outline-primary mt-1">
            Agregar
          </button>
        </form>
  )
}
