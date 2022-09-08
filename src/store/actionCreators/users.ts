import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";

export const getUsers = createAsyncThunk(
    'users/getALl',
    async () => {
        const response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
);