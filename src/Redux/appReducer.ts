import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS' as const

type AppType = typeof initialState

type initializedSuccessType = ReturnType<typeof initializedSuccess>
type AppActionTypes = initializedSuccessType

let initialState = {
    initialized: false
}

export const appReducer = (state: AppType = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializeApp = () => (dispatch: any) => {
    Promise.all([dispatch(getAuthUserData())]).then(() => {
        dispatch(initializedSuccess())
    })
}