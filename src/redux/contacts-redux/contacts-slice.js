import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contacts-operations';
const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.isLoading = true;
        },
        [fetchContacts.fulfilled]: (store, { payload }) => {
            store.isLoading = false;
            store.error = null;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, { payload }) => {
            store.isLoading = false;
            store.error = payload;
        },
        [addContact.pending]: (store) => {
            store.isLoading = true;
        },
        [addContact.fulfilled]: (store, { payload }) => {
            store.isLoading = false;
            store.error = null;
            store.items.push(payload);
        },
        [addContact.rejected]: (store, { payload }) => {
            store.isLoading = false;
            store.error = payload;
        },
        [removeContact.pending]: (store) => {
            store.isLoading = true;
        },
        [removeContact.fulfilled]: (store, { payload }) => {
            store.isLoading = false;
            store.error = null;
            store.items = store.items.filter(item => item.id !== payload);
        },
        [removeContact.rejected]: (store, { payload }) => {
            store.isLoading = false;
            store.error = payload;
        },
    },
});