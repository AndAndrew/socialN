const FOLLOW = 'FOLLOW' as const;
const UNFOLLOW = 'UNFOLLOW' as const;
const SET_USERS = 'SET-USERS' as const;

export type UserType = {
    id: string,
    photoURL: string,
    followed: boolean,
    fullName: string,
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
export type UsersActionTypes = followACType
    | unfollowACType | setUsersACType

const initialState = {
    users: [
        {
            id: '1',
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
            followed: false, fullName: "Andrew", status: "I'm developer", location: {city: "Samara", country: "Russia"}
        },
        {
            id: '2',
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
            followed: false, fullName: "Alexander", status: "ah, shit!", location: {city: "Moscow", country: "Russia"}
        },
        {
            id: '3',
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
            followed: true,
            fullName: "Artem",
            status: "London is the capital of Great Britain",
            location: {city: "St.Petersberg", country: "Russia"}
        },
        // {id: 4,
        // photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWH4wT9bBqKNfbAghGhseZngde-a_wQhPQw&usqp=CAU",
        // followed: true, fullName: "Kate", status: "I'm so tired", location: {city: "Samara", country: "Russia"}},
    ] as Array<UserType>,
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
            return {...state, users: action.payload.users}
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