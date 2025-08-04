import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook"

export default function Tasks(){
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-end items-center mb-2 gap-4">
                <h1 className="mr-auto">Task List</h1>
                <Tabs defaultValue="all">
                    <TabsList>
                    <TabsTrigger onClick={()=>dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
                    <TabsTrigger onClick={()=>dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
                    <TabsTrigger onClick={()=> dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
                    <TabsTrigger onClick={()=>dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal></AddTaskModal>
            </div>
            
            <div>
                {
                    tasks.map((task)=>(<TaskCard task={task} key={task.id}/>))
                }
            </div>
        </div>
    )
}
