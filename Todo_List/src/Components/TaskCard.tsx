import { Task , Id } from "../type";
import Trashicon from "../icons/Trashicon";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  task:Task;
  deleteTask : (id:Id) => void;
  updateTask : (id:Id,content:string) => void;
}

export default function TaskCard({task,deleteTask,updateTask}:Props) {

  const [isMouseOver,setIsMouseOver] = useState<boolean>(false);

  const [editTask,setEditTask] = useState<boolean>(false);

  const {
    setNodeRef,
    attributes, 
    listeners, 
    transform, 
    transition, 
    isDragging} = useSortable({ id:task.id, data:{type:'Task',task,},disabled:editTask,});
    
    const style = {
        transition,
        transform : CSS.Transform.toString(transform)
    }

  // Toggle Task
  const toggleEditTask = () => {
    setEditTask((prev) => !prev);
    setIsMouseOver(false);
  }

  if( isDragging ){
    return (
      <div ref={setNodeRef} style={style} className="cursor-grab relative outline-none bg-slate-950 p-2.5  h-[100px] min-h-[100px] items-center flex text-left rounded-xl ring-2 ring-inset ring-purple-700 opacity-80"/>
    )
  }

  if(editTask){
    return(
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className="cursor-grab outline-none bg-mainBgClr p-2.5  h-[100px] min-h-[100px] items-center flex justify-between text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-purple-700">
        <textarea 
          autoFocus
          placeholder="task content her"
          onBlur={toggleEditTask}
          onKeyDown={e => {if(e.key === "Enter" && e.shiftKey) toggleEditTask();}}
          onChange={(e) => updateTask(task.id,e.target.value)}
          value={task.content}
          className="text-wrap h-[90%] w-full resize-none border-none outline-none rounded bg-transparent text-white focus:outline-none">
        </textarea>
    </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      onClick={toggleEditTask}
      onMouseEnter={() => {setIsMouseOver(true);}}
      onMouseLeave={() => {setIsMouseOver(false);}} 
      className="cursor-grab relative outline-none bg-mainBgClr p-2.5  h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-purple-700">
      <p className="m-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">{task.content}</p>
      { isMouseOver && 
        <button 
        onClick={() => {deleteTask(task.id)}}
        className="stroke-gray-500 absolute right-4 top-1/2 -translate-y-1/2 hover:stroke-white hover:bg-mainColumnBgClr rounded px-1 py-2">
        <Trashicon/>
      </button> }
    </div>
  )
}