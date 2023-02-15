import React from "react";

function LoadList ({id,completed,content}) {
  console.log(id+completed+content+"Hello");
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