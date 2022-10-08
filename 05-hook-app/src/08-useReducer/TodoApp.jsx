// import { useEffect, useReducer } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./complements/TodoAdd";
import { TodoList } from "./complements/TodoList";
// import { todoReducer } from "./todoReducer";

// const initialState = [];

// const init = () => {
//   return JSON.parse(localStorage.getItem("todos")) || [];
// };
export const TodoApp = () => {

  const {todos,handleDeleteTodo,handleNewTodo,handleToggleTodo}= useTodo();
//   const [todos, dispatch] = useReducer(todoReducer, initialState, init);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleNewTodo = (todo) => {
//     const action = {
//       type: "[TODO] Add Todo",
//       payload: todo,
//     };

//     dispatch(action);
//   };

//   const handleDeleteTodo = (id) => {
//     // console.log(id);
//     const action = {
//       type:'[TODO] Remove Todo',
//       payload: id,
//     };
//     dispatch(action)
//   }
//   //dispatchTodoAction mas de un reduce

//   const handleToggleTodo = (id) => {
//     const action = {
//       type:"[TODO] Toggle Todo",
//       payload: id,
//     };
//     dispatch(action)
//   }
  return (
    <>
      <h1>
        TodoApp: {todos.length} <small>pendientes: {todos.filter(({done})=>!done).length}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos} 
          onDeleteTodo = {(event)=>handleDeleteTodo(event)}
          onToggleTodo= {handleToggleTodo}
          />
        </div>
        <div className="col-5"></div>
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd 
        onNewTodo={(event) => handleNewTodo(event)} />
      </div>
    </>
  );
};
