import { LOGIN, LOGOUT } from "../Action/authAction";

const initialState = {
    user: null,
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    let dataUser = action.payload;
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: dataUser,
                isAuthenticated: true
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
}


export default authReducer;