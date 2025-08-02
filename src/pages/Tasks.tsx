import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"

export default function Tasks(){
    const tasks = useAppSelector(selectTasks);
    // console.log(tasks);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-2">
                <h1>Task List</h1>
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
