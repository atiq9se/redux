
import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks: ITask[];

}

const initialState: InitialState = {
   tasks: [
        {
            id: "3984kdj",
            title: "initialize",
            description: "Create home and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High",
    },
    {
            id: "3984kdj",
            title: "initialize frontend",
            description: "Create two and routing",
            dueDate: "2025-10",
            isCompleted: false,
            priority: "High",
    },
   ],
  
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
    }
})

export const selectTasks = (state: RootState)=>{
    return state.todo.tasks;
}


export default taskSlice.reducer;