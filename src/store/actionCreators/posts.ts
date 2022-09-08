import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from "axios";

export const getPosts = createAsyncThunk(
    'posts/getAll',
    async () => {
        const response: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
);