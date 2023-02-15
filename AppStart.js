import "./App.css";
import Title from './Title.js'
import LoadList from './LoadList.js';
import { useState,useEffect } from "react";


function App() {

  const initTasks = [
    { id: 'todo-0', content: "Do Homework", completed:false },
    { id: 'todo-1', content: "Write a report", completed:true },
    { id: 'todo-2', content: "Hangout with friends", completed:true },
  ];

  const [todo,setTodo] = useState(initTasks)
  
  const newTask = ()=>{
    let states = false
   
    if(document.querySelector(".select").value === "true"){
       states = true  
    }
   
    const newT = {
       id: `todo-${initTasks.length+1}`,
       content: document.getElementById("new-todo-input").value,
       completed: states
    }

    initTasks.push(newT)
   

  }



  return (
    <div className="container">
      
      <Title title = "To-do List" style = {{color : "red"}} />
      <h1>Todo List</h1>




      <h2>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2>
      <input type="text" id="new-todo-input" placeholder="Your task" name="text" autoComplete="off" />
      <button type="submit" className="btn" onClick={newTask} >
        Add
      </button>
      

      <span>
      <label htmlFor="filter">Filter</label>
      <select name="filter" className="select" id = "filter">
        <option value="false">...</option>
        <option value="true">Done</option>
        <option value="false">Not Done Yet</option>
      </select>
      </span>
      
    {console.log(todo)}
    <ul className="list-group">
      {  todo.map(element =>{
        console.log(element.id+element.completed+element.content);
         <LoadList id = {element.id} content = {element.content} completed={element.completed}/>
      })}
     
    </ul>
        

       {/*initTasks.map((element)=>{
        return  <LoadList id = {element.id} content = {element.content} completed = {element.completed}/>
       })*/}

     
      

      





      {/* make a Todos to display tasks from the given initTasks object 
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="list-item">
            <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label htmlFor="todo-0">Do Homework</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
        <li className="list-group-item">
          <div className="list-item">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label htmlFor="todo-0">Write a report</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
        <li className="list-group-item">
          <div className="list-item">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label htmlFor="todo-0">Hang out with friends</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
      </ul>
       Todos end here */}

    </div>
  );
}
export default App;
