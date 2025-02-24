import { useReducer, useState } from "react";

const HookeUseReducer = () => {
  // 1 - começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando com useReducer
  const initialTasks = [
    { id: 1, text: "Tarefa 1" },
    { id: 2, text: "Tarefa 2" },
    { id: 3, text: "Tarefa 3" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const newTask = {
                id: Math.random(),
                text: taskText,
            };

            setTaskText();

            return [...state, newTask];
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);


  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTasks({ type: "ADD" });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tasks</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id}> Nome: {task.text} </li>
      ))}
      <hr />
    </div>
  );
};

export default HookeUseReducer;
