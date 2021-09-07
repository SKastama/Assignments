import React, { useState } from 'react';

const Tasks = (props) => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    

    const createTask = (e) => {
        e.preventDefault();
        if (newTask.length < 1) {
            return;
        }
        const taskItem = {
            text: newTask,
            complete: false
        };
        setTasks([...tasks, taskItem]);
        setNewTask("");
    }
    const taskComplete = (idx) => {
        const updatedTasks = tasks.map((task, i) =>{
            if (idx === i) {
                task.complete = !task.complete;
                // const updatedTask = {...task, complete: !task.complete};
                // return updatedTask;
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    const deleteTask = (delIdx) => {
        const filteredTasks = tasks.filter((task, i) => {
            return i !== delIdx;
        });
        setTasks(filteredTasks);
    }

    return (
        <div>
            <form onSubmit={ (e) => createTask(e) }>
                <div>
                    <input type="text" value={newTask} onChange={ (e) => {
                        setNewTask(e.target.value);
                    }}/>
                </div>
                <input type="submit" onClick={createTask} value="Add"/>
            </form>
            {tasks.map((task, i) => {
                return (
                    <div key={i}>
                        {
                            task.complete ?
                            <span style={{ textDecoration: "line-through" }}>{task.text} </span> :
                            <span>{task.text} </span>
                        }
                        <input type="checkbox" checked={task.complete} onChange={(e) => {
                            taskComplete(i);
                        }}/>
                        <button onClick={(e) => {
                            deleteTask(i);
                        }}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Tasks;