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
import { formatDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form"





export function AddTaskModal() {
 
    const form = useForm();

    const onSubmit = (data)=>{
        console.log(data)
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
                <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input {...field} value={field.value || ""} />
                    </FormControl>
                </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                <FormItem>
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
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Priority" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
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
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  formatDate(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
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
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Your date of birth is used to calculate your age.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </form>
          </Form>
         
          

        </DialogContent>
    </Dialog>
  )
}



