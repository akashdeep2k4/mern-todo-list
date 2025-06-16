import { useState } from "react";
import Create from "./Create";
import { useEffect } from "react";
import axios from "axios";

import { BsFillTrashFill, BsCircleFill, BsCheckCircleFill } from "react-icons/bs";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://mern-todo-list-mf4p.onrender.com/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("https://mern-todo-list-mf4p.onrender.com/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
      .delete("https://mern-todo-list-mf4p.onrender.com/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? <BsCheckCircleFill className="icon" /> : <BsCircleFill className="icon" />}
              <p className={todo.done ? "line-through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
