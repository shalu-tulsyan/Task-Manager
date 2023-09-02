import React,{useEffect, useState} from "react";
import TaskContainer from "../TaskContainer";
import Header from "../Header";
import CreateModal from "../Popups/CreateModal";


export default function HomePage() {

    const [isVisible, setIsVisible] = useState(false);
    const [tasks, setTasks] = useState([]);

    function handleClick() {
        setIsVisible(true);
    }

    function deleteTask(index) {
        const arr = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
        localStorage.setItem("tasks", JSON.stringify(arr));
        setTasks(arr);

        //Another way of removing items from the array. 

        // const tempData = tasks;
        // tempData.splice(index, 1);
        // localStorage.setItem("tasks", JSON.stringify(tempData));
        // setTasks(prevState => prevState.filter((val, idx) => idx !== index));
    }

    // call this method on every re-render to fetch the 
    // tasks stored in the localStorage and update it 
    // into the tasks state 
    useEffect(() => {
        const arr = localStorage.getItem("tasks");
        if(arr)
            setTasks(JSON.parse(arr));
    }, [])

    // use of localStorage to store the tasks in the 
    // browser window
    function saveTask(obj) {
        let tempData = tasks;
        console.log(tempData);
        if (obj.name || obj.description)
        {
            tempData.push(obj); 
            localStorage.setItem("tasks", JSON.stringify(tempData));
        }
        setIsVisible(false);
    }

    function updateTaskList(object, index) {
        const data = tasks.map((dt,id) => {
            if (id === index)
            {
                return { name: object.name, description: object.description }; 
            }
            return dt;
        })
        localStorage.setItem("tasks", JSON.stringify(data));
        setTasks(data);
    }
    
    return (
        <div className="h-screen w-screen">
            <Header handleClick={handleClick} />
            <CreateModal isVisible={isVisible} saveTask={saveTask} />
            <TaskContainer
                tasks={tasks}
                deleteTask={deleteTask}
                updateTaskList={updateTaskList}
            />
        </div>
    );
} 