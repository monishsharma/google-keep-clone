import * as actionTypes from "./types";

const initialState = {
    user: {},
    loading: false,
    accesstoken: null
}

const authDispatcher = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INIT_SIGNIN_WITH_GOOGLE: {
            return {
                ...state,
                loading:  action.flag
            }
        }

        case actionTypes.STORE_USER_DATA: {
            return {
                ...state,
                user:  action.user.user,
                credential: action.user.credential,
                accesstoken: action.user.credential.accessToken
            }
        }

        case actionTypes.LOGOUT_USER: {
            return {
                ...state,
                user:  {},
                accesstoken: null,
                loadig: false
            }
        }

        default: {
            return state;
        }
    }
}

export default authDispatcher;