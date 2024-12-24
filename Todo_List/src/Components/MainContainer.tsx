import { useMemo, useState , useEffect } from "react";
import Plusicon from "../icons/Plusicon";
import { Column , Id , Task } from "../type";
import ColumnContainer from "./ColumnContainer";
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function MainContainer() {
    
    // Load data from localStorage on initial render
    const loadSavedData = () => {
        const savedColumns = localStorage.getItem("kanban-columns");
        const savedTasks = localStorage.getItem("kanban-tasks");
        return {
            columns: savedColumns ? JSON.parse(savedColumns) : [],
            tasks: savedTasks ? JSON.parse(savedTasks) : []
        };
    };

    // Initialize state with saved data
    const [columns, setColumns] = useState<Column[]>(() => loadSavedData().columns);
    const [tasks, setTasks] = useState<Task[]>(() => loadSavedData().tasks);

    // Save to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem("kanban-columns", JSON.stringify(columns));
        localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
    }, [columns, tasks]);

    // Notifications
    const notifyAddColumn = () => toast.success("Column Added",
    {
        style:{
            backgroundColor:"#161C22",
            color:'white',
        }
    });

    const notifyDeleteColumn = () => toast.success("Column Deleted",
    {
        style:{
            backgroundColor:"#161C22",
            color:'white',
        }
    });     
    
    const notifyTaskAdded = () => toast.success("Task Added" ,
    {   
        icon:"📝",
        style:{
            backgroundColor:"#161C22",
            color:'white',
        }
    });

    const notifyTaskDeleted = () => toast.success("Task Deleted" ,
    {
        style:{
            backgroundColor:"#161C22",
            color:'white',
        }
    });

    // Active Columns while Drag
    const [activeColumns,setActiveColumns] = useState<Column|null>(null);

    // Active Tasks while Drag
    const [activeTasks,setActiveTasks] = useState<Task|null>(null);

    // Columns Id
    const columnsId = useMemo(() => columns.map((col) => col.id),[columns]);

    // Sensors
    const sensors = useSensors(
        useSensor(PointerSensor,{
            activationConstraint:{
                distance:1,
            },
        }),
        useSensor(KeyboardSensor)
    );

    // Add Columns
    const createNewColumn = () => {
        notifyAddColumn();
        const columnToadd:Column = {
            id:generateId(),
            title:`Column ${columns.length+1} `
        };
       setColumns([...columns,columnToadd]);
    }

    // Generate Randome ID b/w 0 and 10000
    const generateId = () => {
        return Math.floor(Math.random()*10001);
    }

    // Delete Column 
    const handleDelete = (id:Id) => {
        notifyDeleteColumn();
        const filterColumn = columns.filter((col) => col.id !== id );
        setColumns(filterColumn);
        const newTasks = tasks.filter((task) => task.columnId !== id );
        setTasks(newTasks);
    }

    // Update Column Title
    const handleUpdateColumn = (id:Id,title:string) => {
        const newColumns = columns.map((col) => {
            if( col.id !== id ) return col;
            return {...col,title};
        });
        setColumns(newColumns);
    }   

    // Drag Start
    const handleDragStart = (event:DragStartEvent) => {
        if( event.active.data.current?.type === 'Column' ){
            setActiveColumns(event.active.data.current.column); 
            return;  
        }

        if( event.active.data.current?.type === 'Task' ){
            setActiveTasks(event.active.data.current.task);
            return;
        }
    }

    // Drag End
    const handleDragEnd = (event:DragEndEvent) => {
        setActiveColumns(null);
        setActiveTasks(null);

        const {active,over} = event;
        if( !over ) return;

        const activeColumnId = active.id;
        const overColumnId = over.id;

        // Same Position
        if( activeColumnId === overColumnId ) return;

        // Different Position
        setColumns((columns) => {
            const overColumnIndex = columns.findIndex((col) => col.id === overColumnId);
            const activeColumnIndex = columns.findIndex((col) => col.id === activeColumnId);
            return arrayMove(columns,activeColumnIndex,overColumnIndex);
        });
    }

    // Drag Over
    const handleDragOver = (event:DragOverEvent) => {
        const {active,over} = event;
        if( !over ) return;
        
        const activeColumnId = active.id;
        const overColumnId = over.id;

        // Same Position
        if( activeColumnId === overColumnId ) return;

        const isActiveTask = active.data.current?.type === "Task";
        const isOverTask = over.data.current?.type === "Task";

        if(!isActiveTask) return;

        // Over Another Task
        if( isActiveTask && isOverTask ){
            setTasks(tasks => {
                const activeTaskIndex = tasks.findIndex((t) => t.id === activeColumnId);
                const overTaskIndex = tasks.findIndex((t) => t.id === overColumnId);
                tasks[activeTaskIndex].columnId = tasks[overTaskIndex].columnId;
                return arrayMove(tasks,activeTaskIndex,overTaskIndex);
            });
        }

        // Over Another Column
        const isOverColumn = over.data.current?.type === "Column";

        if( isActiveTask && isOverColumn ){
            setTasks(tasks => {
                const activeTaskIndex = tasks.findIndex((t) => t.id === activeColumnId);
                tasks[activeTaskIndex].columnId = overColumnId;
                return arrayMove(tasks,activeTaskIndex,activeTaskIndex);
            });
        }
    }

    // Create Task
    const handleCreateTask = (columnId:Id) => {
        notifyTaskAdded();
        const newTask : Task = {
            id:generateId(),
            columnId,
            content:`Task ${tasks.length + 1}`,
        }
        setTasks([...tasks,newTask]);
    };

    // Delete Task
    const handleDeleteTask = (id:Id) => {
        notifyTaskDeleted();
        const newTasks = tasks.filter((task) => task.id !== id );
        setTasks(newTasks);
    }

    // Update Task
    const handleUpdateTask = (id:Id,content:string) => {
        const updateTask = tasks.map((task) => {
            if( task.id !== id ) return task;
            return{...task,content};
        });
        setTasks(updateTask);
    }

    return (
        <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
            <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
                <div className="m-auto flex gap-4">
                    <div className="flex gap-4">
                        <SortableContext items={columnsId}>
                        {
                            columns.map((col) => (
                                <ColumnContainer 
                                column={col} 
                                key={col.id} 
                                deleteColumn={handleDelete} 
                                createTask={handleCreateTask} 
                                updateColumn={handleUpdateColumn} 
                                deleteTask={handleDeleteTask}
                                updateTask={handleUpdateTask}
                                tasks={tasks.filter(task => task.columnId === col.id)}
                                />
                            ))
                        }
                        </SortableContext>
                    </div>
                    <button onClick={() => createNewColumn()} className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBgClr border-2 border-mainColumnBgClr p-4 ring-purple-700 hover:ring-2 outline-none flex gap-2">
                        <Plusicon/>
                        Add Column
                    </button>
                </div>
                {createPortal(
                    <DragOverlay>
                    {activeColumns && <ColumnContainer 
                        column={activeColumns}
                        deleteColumn={handleDelete} 
                        createTask={handleCreateTask} 
                        updateColumn={handleUpdateColumn}
                        deleteTask={handleDeleteTask}
                        updateTask={handleUpdateTask}
                        tasks={tasks.filter(task => task.columnId === activeColumns.id)}
                    />}
                    {activeTasks && <TaskCard task={activeTasks} deleteTask={handleDeleteTask} updateTask={handleUpdateTask}/>}
                    </DragOverlay>, document.body
                )}
            </DndContext>
            <Toaster/>
        </div>
    )
}