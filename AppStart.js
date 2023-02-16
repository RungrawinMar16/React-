import "./App.css";
import Title from './Title.js'
import LoadList from './LoadList.js';
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const initTasks = [
  { id: 'todo-0', content: "Do Homework", completed: false },
  { id: 'todo-1', content: "Write a report", completed: true },
  { id: 'todo-2', content: "Hangout with friends", completed: true },
  { id: 'todo-3', content: "HELlOW ORLD", completed: true }

];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: initTasks, filter: "all" }
    this.onFilter = this.onFilter.bind(this)
    this.onCheckBox = this.onCheckBox.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }


  onFilter = function (e) {
    e.preventDefault();
    console.log(e.target, e.target.value)
    this.setState({ filter: e.target.value })
  }

  onCheckBox = id => {
    console.log("Appstart checkbox", id );

    let updateTasks = this.state.tasks.map(
      e => {
        if (e.id === id){
          e.completed = !e.completed
          return e

        }
        else {
          return e
        }

      }
    )

    this.setState({tasks: updateTasks})
    console.log(this.state.tasks)

  }

  onDelete = id =>{
   let updateTasks = this.state.tasks.filter(e => e.id !== id )
   this.setState({tasks: updateTasks})
  }




  render() {
    return (
      <div className="container">

        <Title title="To-do List" style={{ color: "red" }} />
        <AddTodo />

        <span>
          <label htmlFor="filter">Filter</label>
          <select name="filter" onChange={this.onFilter}>
            <option value="all">...</option>
            <option value="done">Done</option>
            <option value="active">Not Done Yet</option>
          </select>
        </span>


        <Todo taskList={this.state.tasks} filter={this.state.filter} onCheckBox = {this.onCheckBox} onDelete={this.onDelete}  />



      </div>
    );
  }
}



export default App;
