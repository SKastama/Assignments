import React, { useState } from 'react';

const Tasks = (props) => {
    const [newTask, setNewTask] = useState("");
    const [task, setTasks] = useState([]);
    const [newTaskError, setNewTaskError] = useState("");

    const createTask = (e) => {
        e.preventDefault();
        const addNewTask = {newTask}
        setNewTask("");
    }

    const valTask = (e) => {
        setNewTask(e.target.value);
        setTasks([...Tasks, newTask]);
        if (e.target.value.length < 1) {
            setNewTaskError("Task is required");
        } else {
            setNewTaskError("");
        }
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <input type="text" onChange={ valTask }  value={newTask}/>
                {
                    newTaskError ?
                    <p style={{color:"red"}}>{ newTaskError }</p> :
                    ""
                }
            </div>
            <input type="submit" onClick={createTask} value="Add"/>
        </form>
    );
}

export default Tasks;