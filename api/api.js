import axios from 'axios';
import { API_URL } from '@env';
import { resolveDiscoveryAsync } from 'expo-auth-session';

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
    let start = new Date();
    let postdiary;
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const res = await axios.post(`${API_URL}/diary/write`, {
            title: title,
            content: content,
        });
        postdiary = res.data;
    } catch (err) {
        throw err;
    }
    let end = new Date();
    console.log("time:",end-start);
    return postdiary;
}

export const getDiary = async (token, id) => {
    let diary;
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const res = await axios.get(`${API_URL}/diary/${id}`);
        diary = res.data;
    } catch (err) {
        throw err;
    }
    return diary;
}

export const getRecommends = async (token, id) => {
    let recommends;
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const res = await axios.get(`${API_URL}/diary/music/${id}`);
        recommends = res.data;
    } catch (err) {
        throw err;
    }
    return recommends;
}

export const deleteDiary = async (token, id) => {
    let result;
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const res = await axios.get(`${API_URL}/diary/${id}/delete`);
        result = res.data;
    } catch (err) {
        throw err;
    }
    return result;
}