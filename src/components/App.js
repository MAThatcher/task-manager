import React from "react"
import TaskList from "./taskList"
import TaskListContextProvider from "../context/TaskListContext"
import "../App.css"
import TaskForm from "./TaskForm"
import Header from "./Header"

class App extends React.Component {
    render(){
        return (
            <TaskListContextProvider >
                <div className="container">
                    <div className="app-wrapper">
                        <Header />
                        <div className="main">
                            <TaskForm />
                            <TaskList />
                        </div>
                    </div>                    
                </div>
            </TaskListContextProvider>
        )
    }
}

export default App