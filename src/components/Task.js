import React from "react"



const Task = ({task}) => {
    return <li className="list-item">
        <span>{task.title}</span>
        <div>
            <button className="btn-delete task-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
            <button className="btn-added task-btn">
                <i className="fas fa-pen-alt"></i>
            </button>
        </div>
    </li>
}

export default Task