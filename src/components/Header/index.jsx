import React from "react";

export default function Header({handleClick}) {
    return (
            <div className="h-48 w-full flex flex-col gap-y-3 justify-center items-center bg-slate-200">
                <h1 className="text-3xl font-bold ">Task Manager</h1> 
                <button
                    className="bg-blue-500 text-white font-bold rounded py-2 px-4"
                    onClick={handleClick}
                >
                    create task
                </button>
            </div> 
    );
}