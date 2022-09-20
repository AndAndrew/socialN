import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, usersPageType, UserType} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/reduxStore";

type MapStateToPropsType = {
    usersPage: usersPageType,
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);