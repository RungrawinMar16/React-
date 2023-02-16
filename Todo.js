import React from "react"


function Todo(props) {

    const classList = props.taskList
    const filter = props.filter
    const onCheckBox = props.onCheckBox
    const onDelete = props.onDelete


    const onCheckBoxChange = (id, e) => {
        e.preventDefault();
        console.log("todo checkbox change : ", e.target.value)
        onCheckBox(id)
    }



    const showData = classList
        .filter(e => {
            if (filter === "done") return e.completed;
            if (filter === "active") return !e.completed;
            return true;
        })
        .map(e => {
            return (
             
                <li key={e.id} className="list-group-item">
                    <div className="list-item">
                        
                        <input id={e.id} type="checkbox" defaultChecked={e.completed} onChange={
                            (event) => {console.log(e.id,"hello"); onCheckBoxChange(e.id, event)}
                        } />

                        <label htmlFor={e.id}>{e.content}</label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn__danger" onClick={()=> onDelete(e.id)} >
                            Delete
                        </button>
                    </div>
                </li>


            )
        })


    return (
        <React.Fragment>
            <h2 id="list-heading"> tasks remaining</h2>
            <ul className="list-group">
                {showData}

                {/* <li className="list-group-item">
            <div className="list-item">
              <input id="todo-0" type="checkbox" defaultChecked={false} />
              <label htmlFor="todo-0">Do Homework</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn__danger">
                Delete
              </button>
            </div>
    </li>*/}

            </ul>
        </React.Fragment>

    )
}

export default Todo