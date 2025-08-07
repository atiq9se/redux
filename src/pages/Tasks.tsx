
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";


export default function Tasks(){


    const {data, isLoading, isError} = useGetTasksQuery(undefined);
    console.log({data, isLoading, isError});

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
                
            </div>
            
            <div>
                
            </div>
        </div>
    )
}
