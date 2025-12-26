import TaskForm from "./Components/Taskform";
import TaskList from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect } from "react";
import { useState } from "react";
import "./Style2.css";

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

  const clearTasks = () => {
    setTasks([]);
  }

  return(
    <div className="app-shell">
      <div className="heading">
        <h1>Task Focus</h1>
        <p>Our friendly Task Manager</p>
      </div>
      <TaskForm addTask = {addTask} />
      <TaskList tasks = {tasks }
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
      <button onClick={clearTasks}>Clear All Tasks</button>
    </div>
  )
}
export default App;