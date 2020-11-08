import { DO_LOGIN, GET_USER, SET_USER, TOGGLE_LOADING } from "./constants";

export function toggleLoading(isLoading = null) {
    if (isLoading === null) {
        return { type: TOGGLE_LOADING };
    }
    return { type: TOGGLE_LOADING, payload: isLoading };
}


export function getUser() {
    return { type: GET_USER }
}

export function login({ username, password }) {
    return { type: DO_LOGIN, payload: { username, password }};
}

export function setAuthenticatedUser(user) {
    return { type: SET_USER, payload: user }
}

