import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactApi, removeContactApi } from '../../servis/api-contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await getContactsApi();
            return contacts;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            };
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, { rejectWithValue }) => {
        try {
            const result = await addContactApi(data);
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

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (id, { rejectWithValue }) => {

        try {
            const result = await removeContactApi(id);
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