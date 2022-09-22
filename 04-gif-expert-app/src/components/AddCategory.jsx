import { useState } from "react"

export const AddCategory = ({setCategories}) => {

  const [InputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(InputValue.trim().length <=1) return;
    setCategories(categories =>[InputValue,...categories]);
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
