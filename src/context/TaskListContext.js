import React, {createContext, useState} from "react"

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const [tasks, setTask] = useState([
        {title: "Read the book" , id:1},
        {title: "Wash Car" , id:2},
        {title: "Code" , id:3}
    ])

    return <div><TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider></div>
}

export default TaskListContextProvider