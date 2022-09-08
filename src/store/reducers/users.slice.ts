import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUser} from "../../types/User";
import {getUsers} from "../actionCreators/users";

export interface IUsersState {
    users: IUser[];
    loading: boolean;
    error: string | null;
}

const initialState: IUsersState = {
    users: [],
    loading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getUsers.fulfilled.type]: (state, action : PayloadAction<IUser[]>) => {
            state.users = action.payload;
            state.loading = false;
        },
        [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.users = [];
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default usersSlice.reducer;