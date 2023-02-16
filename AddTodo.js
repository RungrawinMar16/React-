import React from "react"

function AddTodo(){



    return(
        <React.Fragment>
             <h2>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2>
      <input type="text" id="new-todo-input" placeholder="Your task" name="text" autoComplete="off" />
      <button type="submit" className="btn"  >
        Add
      </button>
        </React.Fragment>
    )
}

export default AddTodo