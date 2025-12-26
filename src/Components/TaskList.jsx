export default function TaskList({tasks, updateTask, deleteTask}) {
    const toggleComplete = (index) => {
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }

    return(
        <ul className="unordered-container">
            {tasks.map((task, index) => (
                <li className="task-list" key={index}>
                    <div className="task-list-attributes">
                        <span>{task.text}
                            <small>({task.priority},{task.category})</small>
                        </span>
                    </div>
                    <div className="task-list-buttons">
                        <button onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Completed"}</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}