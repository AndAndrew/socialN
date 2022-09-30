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
                ...action.payload.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data: {
                userId,
                email,
                login
            }
        }
    }
}