import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./reducers/auth.slice";
import postsReducer from "./reducers/posts.slice";
import usersReducer from "./reducers/users.slice";
import photosReducer from "./reducers/photos.slice";

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    photos: photosReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>