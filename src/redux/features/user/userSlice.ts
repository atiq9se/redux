
import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState{
    users: IUser[];
}

const initialState: InitialState= {
    users: [
        {
            id: "lkdjfkldsj",
            name: "atiq"
        },
    ],
}

type DraftUser = Pick<IUser,"name">;

const createUser = (userData: DraftUser): IUser=>{
    return {id:nanoid(), ...userData}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftUser> )=>{
            const userData = createUser(action.payload)

            state.users.push(userData)
        },
    }
})

export const selectUsers = (state: RootState)=>{
    return state.user.users;
}

export const {addUser,} = userSlice.actions;

export default userSlice.reducer;