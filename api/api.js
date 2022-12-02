import axios from 'axios';
import { API_URL } from '@env';

export const signUp = async (email, password, name, token) => {
    let accessToken;
    try {
        const res = await axios.post(`${API_URL}/sign/signup`, {
            email: email,
            password: password,
            name: name,
            sp_token: token
        });
        accessToken = res.data;
    } catch (err) {
        console.error(err);
        console.log("sign-up error", err);
    }
    return accessToken;
}


export const processLogind = async (email, password) => {
    let accessToken;
    try {
        const res = await axios.post(`${API_URL}/sign/login`, {
            email: email,
            password: password,
        });
        accessToken = res.data;
    } catch (err) {
        console.error(err);
        console.log("login error", err);
    }
    return accessToken;
}