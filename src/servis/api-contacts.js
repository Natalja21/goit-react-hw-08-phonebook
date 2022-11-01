import axios from "axios";
const URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
    baseURL: URL,
});

export const getContactsApi = async () => {
    const { data } = await instance.get('/contacts');
    return data;
}

export const addContactApi = async (data) => {
    const { data: result } = await instance.post('/contacts', data);
    return result;
}

export const removeContactApi = async (contactId) => {
    await instance.delete(`/contacts/${contactId}`);
    return contactId;
}

