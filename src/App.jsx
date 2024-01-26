import { useState } from "react";
import "./App.css";

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // todos:- created as Array
  function handleInputChange(e) {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  }
  const handleAddTodos = () => {
    if (inputValue !== " ") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      // console.log(newTodo);

      // In Array (todos):- we store old obj(...todos) and also new obj(newTodo)
      setTodos([...todos, newTodo]);
      setInputValue("");
      // console.log(todos);
    }
  };
  // particular todo ko update kr rhe h
  const handleToggleChange = (id) => {
    // console.log(id);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        <div className="todo-container">
          <h1> Todo List</h1>

          <input
            type="text"
            value={inputValue}
            placeholder="Enter a New Todo List"
          ></input>
        </div>;
        return { ...todo, completed: !todo.completed };
      }
      // update hone ke bad todo return ho rha h
      return todo;
    });
    setTodos(updatedTodos);
    // console.log(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    // console.log(filteredTodos);
    setTodos(filteredTodos);
  };

  return (
    <div className="main-container">
      <div className="todo-container">
        <h1 className="todo-list text-center text-4xl text-red-600">
          {" "}
          Todo List
        </h1>

        <div className="todo-input">
          <input
            className=" "
            type="text"
            value={inputValue}
            placeholder="Enter a New Todo List"
            onChange={handleInputChange}
          ></input>

          <button onClick={handleAddTodos}> Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((todos) => (
            <li
              // string ke andr var ko add kiye and use ternary operator
              className={`todo-item ${
                todos.completed == true ? "completed" : ""
              } `}
            >
              <input
                type="checkbox"
                onChange={() => handleToggleChange(todos.id)}
              />
              <span className="todo-text">{todos.text}</span>

              <button onClick={() => handleRemoveTodo(todos.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
