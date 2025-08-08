
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";


export default function Tasks(){


    const {data, isLoading} = useGetTasksQuery(undefined);

    if(isLoading){
        return <p>Loading ...</p>
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-end items-center mb-2 gap-4">
                <h1 className="mr-auto">Task List</h1>
               
                <Tabs defaultValue="all">
                    <TabsList>
                    <TabsTrigger  value="all">All</TabsTrigger>
                    <TabsTrigger value="low">Low</TabsTrigger>
                    <TabsTrigger  value="medium">Medium</TabsTrigger>
                    <TabsTrigger  value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                 <AddTaskModal></AddTaskModal>
            </div>
            <div>
                {/* {
                    !isLoading && data.tasks.map((task:ITask)=>(<TaskCard task={task} key={task.id}/>))
                } */}
            </div>
            
        </div>
        )
}
