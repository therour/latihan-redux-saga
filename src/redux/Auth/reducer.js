import { GET_USER_SUCCESS, SET_USER, TOGGLE_LOADING } from "./constants";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    loading: false,
};

export default function AuthReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case GET_USER_SUCCESS:
            return {...state, user: action.payload};

        case TOGGLE_LOADING:
            if (action.payload) {
                return {...state, loading: action.payload};
            }
            return {...state, loading: !state.loading}

        case SET_USER:
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {...state, user: action.payload};

        default:
            return state;
    }
};
