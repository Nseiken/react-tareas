import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          id="title"
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          id="description"
          value={description}
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
