export default function AddTodo({todoEl, manageClick}) {
  return (
    <form onSubmit={manageClick} className='mt-5'>
        <div className='form-group'>
            <input ref={todoEl} className='form-firld' name="todo" id='todo'/>
            <button className='mx-1 btn btn-success py-1 mb-1'>ADD</button>
        </div>
    </form>
  )
}
