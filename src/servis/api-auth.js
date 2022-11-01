import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const signupApi = async (signupData) => {
    const { data } = await axios.post("/users/signup", signupData);
    setAuthHeader(data.token);
    return data;
}

export const loginApi = async (loginData) => {
    const { data } = await axios.post("/users/login", loginData);
    setAuthHeader(data.token);
    return data;
}
export const logoutApi = async () => {
    await axios.post("/users/logout");
    clearAuthHeader();
}
