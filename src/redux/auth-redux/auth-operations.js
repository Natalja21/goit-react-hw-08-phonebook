import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupApi, loginApi, logoutApi, currentUserApi } from '../../servis/api-auth';

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const result = await signupApi(data);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            return rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const result = await loginApi(data);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            return rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await logoutApi()
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            return rejectWithValue(error);
        }
    }
);

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            if (auth.token === null) {
                return
            }
            const result = await currentUserApi(auth.token);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)