import { Button } from "@/components/ui/button";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

interface IProps{
    user: IUser;
}

export default function UserCard({user}:IProps) {
    const dispatch = useDispatch();
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <h1 className="">{user.name}</h1>
                </div>
                <div className="flex gap-3 items-center">
                   <Button variant="link"  className="p-0 text-red-500" onClick={()=>dispatch(deleteTask(user.id))}><Trash2></Trash2></Button>
                </div>

            </div>
        </div>
    );
}
