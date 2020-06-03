import axios from 'axios';
import { GET_USER_TASKS, CREATE_NEW_TASK, GET_ALL_TASKS, UPDATE_TASK, DELETE_TASK } from './types';

const URL_API = 'http://localhost:8080';

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
    },
};

export const getAllTasks = () => async (dispatch) => {

    try {
        const res = await axios.get(`${URL_API}/rest/task/`, config);

        dispatch({
            type: GET_ALL_TASKS,
            payload: res.data,
        });

    } catch (err) {
        console.error();
    };
};

export const getUserTasks = (userId) => async (dispatch) => {
    try {
        const res = await axios.get(`${URL_API}/rest/task/`, config); // missing api 

        dispatch({
            type: GET_USER_TASKS,
            payload: res.data,
        });

    } catch (err) {
        console.error();
    };
};

export const createTask = (taskData) => async (dispatch) => {

    try {
        const res = await axios.post(`${URL_API}/rest/task/save`, taskData, config);

        dispatch({
            type: CREATE_NEW_TASK,
            payload: res.data,
        });

    } catch (err) {
        console.error();
    };
};

export const updateTask = (taskData) => async (dispatch) => {

    try {
        const res = await axios.post(`${URL_API}/rest/task/save`, taskData, config);

        dispatch({
            type: UPDATE_TASK,
            payload: res.data,
        });

    } catch (err) {
        console.error();
    };
};

export const deleteTask = (taskId) => async (dispatch) => {

    try {
        const res = await axios.delete(`${URL_API}/rest/task/save`, config); // missing api

        dispatch({
            type: DELETE_TASK,
            payload: res.data,
        });

    } catch (err) {
        console.error();
    };
};