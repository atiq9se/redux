import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, 
    FormControl,  
    FormField, 
    FormItem, 
    FormLabel, 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";


import { addTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import type { ITask } from "@/types";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddUserModal() {
    const form = useForm();
    const dispatch = useAppDispatch();
    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        dispatch(addTask(data as ITask));
    }

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add user</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                <FormItem className="mt-5">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input {...field} value={field.value || ""} />
                    </FormControl>
                </FormItem>
                )}
                />
                
                <DialogFooter>
                    <Button type="submit" className="mt-5">Save</Button>
                </DialogFooter>
            </form>
          </Form>
         
        </DialogContent>
    </Dialog>
  )
}



