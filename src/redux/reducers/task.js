import { GET_USER_TASKS, CREATE_NEW_TASK, GET_ALL_TASKS, UPDATE_TASK, DELETE_TASK } from './types';

const initialState = {
    userTasks: [],
    allTasks: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TASKS:
            return {
                ...state,
                allTasks: action.payload,
            };

        case CREATE_NEW_TASK:
            return {
                ...state,
                allTasks: [action.payload, ...state.allTasks],
            };

        case GET_USER_TASKS:
            return {
                ...state,
                userTasks: action.payload,
            };

        case UPDATE_TASK:
            return {
                ...state,
                allTasks: action.payload
            }

        case DELETE_TASK:
            return {
                ...state,
                allTasks: action.payload
            }

        default:
            return state;
    }
};