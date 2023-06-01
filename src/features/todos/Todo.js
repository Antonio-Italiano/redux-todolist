export default function Todo({todo, onRemoveTodo, onToggleTodo}) {
const completeIcon = todo.completed? <i className="bi bi-check-square"></i> : <i className="bi bi-square"></i>

return (
    <li className='list-group-item d-flex justify-content-between'>
        <div className="pointer" onClick={() => onToggleTodo(todo)}>
            {completeIcon}
        </div>
        {todo.name}
        <button onClick={() => onRemoveTodo(todo)} className='ms-5 btn btn-danger p-1'>
            <i className="bi bi-trash"></i>
        </button>
    </li>
  )
}
