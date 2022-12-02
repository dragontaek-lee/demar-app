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
        console.log(err);
        console.error(err);
        console.log("sign-up error", err);
    }
    return accessToken;
}