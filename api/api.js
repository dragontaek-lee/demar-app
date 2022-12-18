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
        throw err;
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
        throw err;
    }
    return accessToken;
}

export const DiaryList = async (token) => {
    let diarylist;
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const res = await axios.get(`${API_URL}/diary/`);
        diarylist = res.data;
    } catch (err) {
        throw err;
    }
    return diarylist;
}

export const PostDiary = async (title, content, token) => {
    let postdiary;
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const res = await axios.post(`${API_URL}/diary/write/`, {
            title: title,
            content: content,
        });
        postdiary = res.data;
    } catch (err) {
        throw err;
    }
    return postdiary;
}