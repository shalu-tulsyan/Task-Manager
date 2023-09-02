import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';

export default function EditModal({task, isEditPopupVisible, editTask }) {
    const [taskName, setTaskName] = useState(task.name);
    const [description, setDescription] = useState(task.description);

    function handleNameChange(e) {
        setTaskName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleEdit() {
        let task = {};
        task.name = taskName;
        task.description = description;
        editTask(task);
    }

    return (
        <Dialog open={isEditPopupVisible} onClose={handleEdit}>
            <div className="text-2xl text-center font-bold px-4 py-2">Edit Task</div>
            <form className="flex flex-col gap-3 m-2">
                <div>
                    <div>Task Name:</div>
                    <input
                        className="border border-neutral-500"
                        value={taskName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <div>Task Description:</div>
                    <textarea
                        className=" w-full border border-neutral-500"
                        rows={4}
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </form>
            <div className="flex justify-center items-center my-2">
                <button
                    className="bg-blue-500 text-white font-bold rounded py-2 px-4"
                    onClick={handleEdit}
                >
                    edit
                </button>
            </div>
        </Dialog>
    );
}