import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout } from 'redux/auth-redux/auth-operations';
const initialState = {
    user: {},
    token: null,
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signup.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [signup.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signup.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
        [login.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [login.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [login.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
        [logout.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logout.fulfilled]: (store) => {
            store.loading = false;
            store.user = {};
            store.token = null;
            store.isLogin = false

        },
        [logout.rejected]: (store) => {
            store.loading = false;
            store.error = null;
        },
        // [register.fulfilled](state, action) {
        //     state.user = action.payload.user;
        //     state.token = action.payload.token;
        //     state.isLoggedIn = true;
        // },
        // [logIn.fulfilled](state, action) {
        //     state.user = action.payload.user;
        //     state.token = action.payload.token;
        //     state.isLoggedIn = true;
        // },
        // [logOut.fulfilled](state) {
        //     state.user = { name: null, email: null };
        //     state.token = null;
        //     state.isLoggedIn = false;
        // },
        // [refreshUser.pending](state) {
        //     state.isRefreshing = true;
        // },
        // [refreshUser.fulfilled](state, action) {
        //     state.user = action.payload;
        //     state.isLoggedIn = true;
        //     state.isRefreshing = false;
        // },
        // [refreshUser.rejected](state) {
        //     state.isRefreshing = false;
        // },
    },
});

export const authReducer = authSlice.reducer;
