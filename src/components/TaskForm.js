import React from "react"


const TaskForm = () => {
    
    return (
    <form className="form">
        <input type="text" placeholder="Add Task" required className="task-input" />
        <div className="buttons">
            <button type="submit" className="btn add-task-btn">Add Task</button>
            <button type="submit" className="btn clear-btn">Clear Task</button>
        </div>
    </form>
    )
}

export default TaskForm