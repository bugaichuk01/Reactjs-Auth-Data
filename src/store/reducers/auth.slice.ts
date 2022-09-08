import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
    auth: boolean;
    login: string;
    password: string;
    inputLogin: string;
    inputPassword: string;
}

const initialState: IAuthState = {
    auth: false,
    login: 'user',
    password: '123',
    inputLogin: '',
    inputPassword: '',
};

export const authorizationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            (state.inputLogin === state.login && state.inputPassword === state.password)
                ? state.auth = true
                : state.auth = false;
        },
        onLoginChange: (state, action: PayloadAction<string>) => {
            state.inputLogin = action.payload;
        },
        onPasswordChange: (state, action: PayloadAction<string>) => {
            state.inputPassword = action.payload;
        },
        logout: (state) => {
            state.auth = false;
/*            state.inputLogin = initialState.inputLogin;
            state.inputPassword = initialState.inputLogin;*/
        },
    },
});

export const {
    login,
    onLoginChange,
    onPasswordChange,
    logout,
} = authorizationSlice.actions;

export default authorizationSlice.reducer;