import React from 'react';
import CustomCard from "../CustomCard";

export default function CardContainer({tasks,deleteTask,updateTaskList})
{
    return (
       <>
            {
            tasks.length!==0?
               (<div className='px-4 py-2'>
                    <div className='text-xl font-semibold py-2'>Tasks Container</div>
                    <div className='flex flex-wrap justify-center gap-4 '>
                        {tasks &&
                            tasks.map((task,index ) => {
                                return (
                                    <CustomCard
                                        index={index}
                                        task={task}
                                        deleteTask={deleteTask}
                                        updateTaskList={updateTaskList}
                                    />
                                );
                            })
                        }
                    </div>
                </div>)
                    :
                <div>no tasks to display</div>

            }
            
        </>
    );
}