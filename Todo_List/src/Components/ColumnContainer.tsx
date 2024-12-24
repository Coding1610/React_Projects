import { Column , Id , Task } from "../type"
import Trashicon from "../icons/Trashicon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState, useMemo } from "react";
import AddTask from "../icons/AddTask";
import TaskCard from "./TaskCard";
import { SortableContext } from "@dnd-kit/sortable";

interface Props {
    column:Column;
    deleteColumn : (id:Id) => void;
    updateColumn : (id:Id,title:string) => void;
    createTask : (columnId:Id) => void;
    deleteTask : (id:Id) => void;
    updateTask : (id:Id,content:string) => void;
    tasks:Task[];

}

export default function ColumnContainer(props:Props) {

    const {column,deleteColumn,updateColumn,createTask,deleteTask,updateTask,tasks} = props;

    const [editMode,setEditMode] = useState(false);

    const {setNodeRef, attributes, listeners, transform, transition, isDragging} = useSortable({ 
        id:column.id, 
        data:{
            type:'Column',
            column,
        },
        disabled:editMode,
    });
    
    const style = {
        transition,
        transform : CSS.Transform.toString(transform)
    }

    const taskIds = useMemo(() => {
        return tasks.map((task) => task.id);
    },[tasks]);


    if( isDragging ){
        return (
            <div ref={setNodeRef} style={style} className="bg-gray-950 w-[350px] h-[500px] max-h-[600px] rounded-md flex flex-col border-2 border-purple-700"></div>
        )
    }

    return (
        <div ref={setNodeRef} style={style} className="bg-mainColumnBgClr w-[350px] h-[500px] max-h-[600px] rounded-md flex flex-col ">
            
            {/* Column Title*/}
            <div onClick={() => setEditMode(true)} {...attributes} {...listeners} className="bg-mainBgClr text-md h-[60px] cursor-grab rounded-lg p-3 font-semibold border-mainColumnBgClr border-4 flex items-center justify-between outline-none">
                <div className="flex gap-2">
                    {/* <div className="flex justify-center items-center bg-mainColumnBgClr px-2 py-1 text-sm rounded-full">
                        0
                    </div> */}
                    {!editMode && column.title}
                    {editMode && <input 
                                className="bg-black py-1 px-2 focus:border-purple-700 outline-none border-[1px] rounded-lg"  
                                value={column.title}
                                onChange={(e) => updateColumn(column.id,e.target.value)}
                                autoFocus 
                                onBlur={() => {setEditMode(false);}} 
                                onKeyDown={(e) => {
                                    if(e.key !== "Enter") return; 
                                    setEditMode(false);
                                }}
                                />}
                </div>
                <button onClick={() => {deleteColumn(column.id)}} className="stroke-gray-500 hover:stroke-white hover:bg-mainColumnBgClr rounded px-1 py-2">
                    <Trashicon/>
                </button>
            </div>

            {/* Column Task Container*/}
            <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
                <SortableContext items={taskIds}>
                {tasks.map((task) => (
                    <TaskCard 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                        />
                ))}
                </SortableContext>
            </div>

            {/* Column Footer*/}
            <div className="p-[2px] w-full">
                <button
                    onClick={() => {createTask(column.id)}}
                    className="w-full stroke-white hover:stroke-purple-600 flex gap-2 items-center border-mainColumnBgClr border-2 rounded-md p-4 border-x-mainColumnBgClr hover:bg-mainBgClr hover:text-purple-600 active:bg-black">
                    <AddTask /> 
                    Add New Task
                </button>
            </div>

        </div>
    )
}
