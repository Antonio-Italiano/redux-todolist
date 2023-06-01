export default function FilterTodo({onFilter, filter}) {
  return (

    <div className="row">
        <div className="col-sm-4">
            <button disabled={ filter ==='ALL' } onClick={() => onFilter('ALL')} className={filter ==='ALL'? "btn btn-info" : "btn btn-outline-info"}>ALL</button>            
        </div>

        <div className="col-sm-4">
            <button disabled={ filter ==='TO DO' } onClick={onFilter.bind(null, 'TO DO')} className={filter ==='TO DO'? "btn btn-info" : "btn btn-outline-info"}>TO DO</button>
        </div>

        <div className="col-sm-4">
            <button disabled={ filter ==='COMPLETED' } onClick={onFilter.bind(null, 'COMPLETED')} className={filter ==='COMPLETED'? "btn btn-info" : "btn btn-outline-info"}>COMPLETED</button>
        </div>
    </div>
  )
}
