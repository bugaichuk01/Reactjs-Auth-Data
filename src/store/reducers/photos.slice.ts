import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getPhotos} from "../actionCreators/photos";
import {IPhoto} from "../../types/Photo";

interface IPhotosState {
    photos: IPhoto[];
    loading: boolean;
    error: string | null;
}

const initialState: IPhotosState = {
    photos: [],
    loading: false,
    error: null
};

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: {
        [getPhotos.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getPhotos.fulfilled.type]: (state, action: PayloadAction<IPhoto>) => {
            const array = state.photos.concat(action.payload);
            state.photos = array
                .filter((photo: IPhoto, index: number) =>
                    array.findIndex((a: IPhoto) => a.id === photo.id) === index,
            );
            state.loading = false;
        },
        [getPhotos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.photos = [];
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default photosSlice.reducer;