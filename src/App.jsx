import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [todo, setTodo] = useState([]);

  const saveTask = (e) => {
    e.preventDefault();

    let task = e.target.taskname.value.trim();

    if (!task) return;

    if (!todo.some(item => item.text === task)) {

      setTodo([
        ...todo,
        { text: task, completed: false }
      ]);

      e.target.reset();

    } else {
      alert("Task already added!!");
    }
  };


  const deleteTask = (index) => {

    const updatedTodo = todo.filter((_, i) => i !== index);

    setTodo(updatedTodo);

  };


  const toggleTask = (index) => {

    const updatedTodo = todo.map((item, i) =>

      i === index
        ? { ...item, completed: !item.completed }
        : item

    );

    setTodo(updatedTodo);

  };


  return (

    <div className="main-container">

      <h1>My Todo List ✅</h1>

      <form onSubmit={saveTask}>

        <input
          type="text"
          name="taskname"
          placeholder="Enter your task..."
        />

        <button>ADD</button>

      </form>


      <div className="outer">

        <ul>

          {todo.length === 0 && (
            <p className="empty-msg">
              No tasks yet ✍️
            </p>
          )}

          {todo.map((task, index) => (

            <li key={index}>

              <span
                className={
                  task.completed
                    ? "task completed"
                    : "task"
                }

                onClick={() =>
                  toggleTask(index)
                }
              >

                {task.text}

              </span>


              <span
                className="delete-btn"
                onClick={() =>
                  deleteTask(index)
                }
              >

                &times;

              </span>

            </li>

          ))}

        </ul>

      </div>

    </div>

  );

};

export default App;