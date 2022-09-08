import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';

export const getPhotos = createAsyncThunk(
    'photos/getALl',
    async (id: number) => {
        const response: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        return response.data;
    }
);