import { useState } from "react";
import axios from "axios";

export default function Create() {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="create-form">
      <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
