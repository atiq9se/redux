
import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function Users(){
    const users = useAppSelector(selectUsers);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-end items-center mb-2 gap-4">
                <h1 className="mr-auto">User List</h1>
                <AddUserModal></AddUserModal>
            </div>
            
            <div>
                {
                    users.map((user)=>(<UserCard user={user} key={user.id}/>))
                }
            </div>
        </div>
    )
}
