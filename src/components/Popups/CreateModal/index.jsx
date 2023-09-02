import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';

export default function CreateModal({ isVisible, saveTask }) {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    function handleNameChange(e) {
        setTaskName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleCreate() {
        let task = {};
        task.name = taskName;
        task.description = description;
        saveTask(task);
    }

    return (
        <Dialog open={isVisible} onClose={handleCreate}>
            <div className="text-2xl text-center font-bold px-4 py-2">Create Task</div>
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
                    onClick={handleCreate}
                >
                    create
                </button>
            </div>
        </Dialog>
    );
}