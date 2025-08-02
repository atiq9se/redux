import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
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
    FormDescription,  
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { addTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form"





export function AddTaskModal() {
 
    const form = useForm();
    const dispatch = useAppDispatch();

    const onSubmit = (data)=>{
        console.log(data)
        dispatch(addTask(data))
    }

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                <FormItem className="mt-5">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input {...field} value={field.value || ""} />
                    </FormControl>
                </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="description"
                render={({field}) => (
                <FormItem className="mt-5">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Textarea {...field} value={field.value || ""} />
                    </FormControl>
                </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mt-5">
                        <FormLabel>Email</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select verify a Priority display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="w-100">
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                     
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duedate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col mt-5">
                        <FormLabel>Due Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  formatDate(field.value, "PPP")
                                ) : (
                                  <span>Due Date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              // disabled={(date) =>
                              //   date > new Date() || date < new Date("1900-01-01")
                              // }
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 
                <DialogFooter>
                    <Button type="submit" className="mt-5">Save changes</Button>
                </DialogFooter>
            </form>
          </Form>
         
          

        </DialogContent>
    </Dialog>
  )
}



