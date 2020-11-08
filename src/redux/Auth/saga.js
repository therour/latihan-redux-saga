import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { setAuthenticatedUser, toggleLoading } from "./actions";
import { DO_LOGIN, GET_USER, GET_USER_SUCCESS } from "./constants";

async function fetchUser ({ username, password}) {
    console.log(`login with username: ${username} password: ${password}`);

    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
}

// User
function* getUser (action) {
    yield put(toggleLoading(true));
    const user = yield call(fetchUser);
    yield put({ type: GET_USER_SUCCESS, payload: user });
    yield put(toggleLoading(false));
}

function* watchGetUser() {
    yield takeEvery(GET_USER, getUser)
}

function* submitLoginData(action) {
    yield put(toggleLoading(true));
    const user = yield call(fetchUser, action.payload);
    yield put(setAuthenticatedUser(user));
    yield put(toggleLoading(false));
}


// Login
function* watchLogin() {
    yield takeEvery(DO_LOGIN, submitLoginData)
}



function *authSaga() {
    yield all([
        fork(watchGetUser),
        fork(watchLogin)
    ])
}


export default authSaga;
