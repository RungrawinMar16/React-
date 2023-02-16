import React from "react";

function LoadList (props) {
  console.log(props)
  const {id,content,completed} = props
   return( 
      <li className="list-group-item">
        <div className="list-item">
          <input id={id} type="checkbox" defaultChecked={completed} />
          <label htmlFor={id}>{content}</label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn__danger">
            Delete
          </button>
        </div>
      </li>
    
    );
}

export default LoadList;