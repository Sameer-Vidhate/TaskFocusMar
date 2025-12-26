import TaskForm from "./Components/Taskform";
import TaskList from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";

function App() {
  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
    </div>
  )
}
export default App;