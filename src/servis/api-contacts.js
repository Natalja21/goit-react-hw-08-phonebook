import instance from './api-auth';

export const getContactsApi = async () => {
    const { data } = await instance.get('/contacts');
    return data;
};

export const addContactApi = async data => {
    const { data: result } = await instance.post('/contacts', data);
    return result;
};

export const removeContactApi = async id => {
    await instance.delete(`/contacts/${id}`);
    return id;
};
