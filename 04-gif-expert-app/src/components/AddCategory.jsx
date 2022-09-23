import { useState } from "react"
import { titleCase } from "../helperes/titleCase";

export const AddCategory = ({onNewCategory}) => {

  const [InputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(titleCase(target.value))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(InputValue.trim().length <=1) return;
    // setCategories(categories =>[InputValue,...categories]);
    onNewCategory(InputValue.trim());
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
    <input type="text"
      placeholder="Search Gifs"
      value={InputValue}
      onChange={onInputChange}
      
    />
    </form>
  )
}
