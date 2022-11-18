import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA' as const;


type AuthType = typeof initialState

type setUserDataACType = ReturnType<typeof setAuthUserData>
type AuthActionTypes = setUserDataACType

const initialState = {
    userId: <string | null>null,
    email: <string | null>null,
    login: <string | null>null,
    isAuth: false
};

export const authReducer = (state: AuthType = initialState, action: AuthActionTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    });
}
export const logout = () => (dispatch: any) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}