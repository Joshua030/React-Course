export const TodoList = ({todos, onDeleteTodo,onToggleTodo }) => {
  return (
    <ul className="List-group">
    { todos.map(({description,id,done}) => 
    <li key={id} className="list-group-item d-flex justify-content-between">
      <span 
      className={`align-self-center ${ done ? 'text-decoration-line-through' : '' }`}
      onClick={()=>onToggleTodo(id)}
      >{description}</span>

    <button 
    className="btn btn-danger"
    onClick={()=>onDeleteTodo(id)}
    >Borrar</button>
    </li>
)}
  </ul>
  )
}
