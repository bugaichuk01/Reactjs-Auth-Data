import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IPost} from "../../types/Post";
import {getPosts} from "../actionCreators/posts";

export interface IPostsState{
    posts: IPost[];
    loading: boolean;
    error: string | null;
}

const initialState: IPostsState = {
    posts: [],
    loading: false,
    error: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
                .filter((post: IPost, index: number) =>
                    action.payload.findIndex((item: IPost) => item.userId === post.userId) === index);
            state.loading = false;
        },
        [getPosts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.posts = [];
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default postsSlice.reducer;