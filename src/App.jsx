import TaskForm from "./Components/Taskform";
import TaskList from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks))});

  const addTask = (task) => { setTasks([...tasks, task]);}

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <TaskForm addTask = {addTask}/>
      <TaskList />
      <ProgressTracker />
    </div>
  )
}
export default App;