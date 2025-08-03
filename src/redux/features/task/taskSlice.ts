

import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { S } from "node_modules/react-router/dist/development/route-data-CqEmXQub.d.mts";


interface InitialState{
    tasks: ITask[];

}

const initialState: InitialState = {
   tasks: [
    {
        id:"67jvEPF-TZx6DqYk8OzkM",
        isCompleted:false,
        title:"erter",
        description:"fdf",
        priority:"medium",
        dueDate:"2025-08-26T18:00:00.000Z",
    }
   ],
  
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask):ITask=>{
    return {id: nanoid(), isCompleted:false, ...taskData}
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask> )=>{
            const taskData = createTask(action.payload)

            state.tasks.push(taskData)
        },

        toggleCompleteState: (state, action: PayloadAction<string>)=>{
             state.tasks.forEach((task)=>
                task.id === action.payload ? (task.isCompleted = !task.isCompleted): task
            )
        },

        deleteTask: (state, action: PayloadAction<string>)=>{
            state.tasks= state.tasks.filter((task)=> task.id !== action.payload)
        }
        
    }
})

export const selectTasks = (state: RootState)=>{
    return state.todo.tasks;
}

export const {addTask, toggleCompleteState, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;