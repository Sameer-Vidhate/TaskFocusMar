import TaskForm from "./Components/Taskform";
import TaskList from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect } from "react";
import { useState } from "react";
import "./Style.css";

function App() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks))});

  const addTask = (task) => { setTasks([...tasks, task]);}

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  }

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <TaskForm addTask = {addTask} />
      <TaskList tasks = {tasks }
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
    </div>
  )
}
export default App;