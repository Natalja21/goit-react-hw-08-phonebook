import axios from "axios";
const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

const setToken = (token) => {
    if (token) {
        return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.Authorization = "";
}

export const signupApi = async (signupData) => {
    const { data } = await instance.post("/users/signup", signupData);

    instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
}

export const loginApi = async (loginData) => {
    const { data } = await instance.post("/users/login", loginData);
    instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    return data;
}
export const logoutApi = async () => {
    const { data } = await instance.post("/users/logout");
    instance.defaults.headers.common.Authorization = "";
    return data

}
export const currentUserApi = async (token) => {
    try {
        setToken(token);
        const { data } = await instance.get("/users/current");
        return data;
    } catch (error) {
        setToken();
        throw error;
    }
}
export default instance