import React, {useContext} from "react"
import {TaskListContext} from "../context/TaskListContext"


const Task = ({task}) => {

    const {removeTask, findItem, editTask, editItem} = useContext(TaskListContext)

    return <li className="list-item">
        <span>{task.title}</span>
        <div>
            <button  onClick={findItem(task.id)} className="btn-added task-btn">
                <i className="fas fa-pen-alt"></i>
            </button>
            <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    </li>
}

export default Task