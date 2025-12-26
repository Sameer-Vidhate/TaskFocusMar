import { useState } from "react";

function TaskForm({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('medium');
    const[category, setCategory] = useState('general');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority, category, completed: false});

        //to reset
        setTask('');
        setPriority('medium');
        setCategory('general');
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" id="task" name="task" placeholder="Enter the task" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
                <h1>{task} {priority} {category}</h1>
            </div>
            <div>
                <select id="priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}
export default TaskForm;