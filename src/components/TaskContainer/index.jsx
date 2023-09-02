import React from 'react';
import CardContainer from '../CardContainer';

export default function TaskContainer({tasks,deleteTask,updateTaskList}) {
    return (
        <div className='w-full bg-neutral-100'>
            <CardContainer tasks={tasks} deleteTask={deleteTask} updateTaskList={updateTaskList} />
        </div>
    );
}