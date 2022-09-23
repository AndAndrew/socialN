const FOLLOW = 'FOLLOW' as const;
const UNFOLLOW = 'UNFOLLOW' as const;
const SET_USERS = 'SET-USERS' as const;
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE' as const;
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT' as const;
const TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING' as const;


export type UserType = {
    id: string,
    photos: {
        small: string,
        large: string
    }
    photoURL: string,
    followed: boolean,
    name: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}

export type usersPageType = typeof initialState

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export type UsersActionTypes = followACType | unfollowACType
    | setUsersACType | setCurrentPageACType
    | setTotalUsersCountACType | toggleIsFetchingACType

const initialState = {
    users: <Array<UserType>>[
        // {
        //     id: '1',
        //     photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
        //     followed: false, fullName: "Andrew", status: "I'm developer", location: {city: "Samara", country: "Russia"}
        // },
        // {
        //     id: '2',
        //     photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
        //     followed: false, fullName: "Alexander", status: "ah, shit!", location: {city: "Moscow", country: "Russia"}
        // },
        // {
        //     id: '3',
        //     photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
        //     followed: true,
        //     fullName: "Artem",
        //     status: "London is the capital of Great Britain",
        //     location: {city: "St.Petersberg", country: "Russia"}
        // },
        // {id: 4,
        // photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
        // followed: true, fullName: "Kate", status: "I'm so tired", location: {city: "Samara", country: "Russia"}},
        ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: false
};

export const usersReducer = (state: usersPageType = initialState, action: UsersActionTypes): usersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: true} : user)
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: false} : user)
            };
        case SET_USERS:
            return {...state, users: action.payload.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.payload.totalUsersCount};
        case TOGGLE_ISFETCHING:
            return {...state, isFetching: action.payload.isFetching};
        default:
            return state;
    }
}

export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    }
}

export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    }
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    }
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    }
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalUsersCount
        }
    }
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_ISFETCHING,
        payload: {
            isFetching
        }
    }
}