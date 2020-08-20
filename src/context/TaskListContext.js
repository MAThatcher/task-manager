import React, {createContext, useState} from "react"
import uuid from 'uuid'
export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: "Read the book" , id:1},
        {title: "Wash Car" , id:2},
        {title: "Code" , id:3}
    ])

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const [editItem, setEditItem] = useState(null)

    const clearList = () => {
        setTasks ([])
    }

    const addTask = title => {
        setTasks([...tasks, {title, id : uuid() }])
    }

    const findItem = id => {
        const item = tasks.find( task => task.id === id)
        setEditItem(item)
    }

    const editTask = (title,id) => {
        const newTasks = tasks.map(task => (tasks.id === id ? {title, id} : task))

        setTasks(newTasks)
    }
    return <div><TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}
        </TaskListContext.Provider></div>
}

export default TaskListContextProvider