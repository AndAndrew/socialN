import {connect} from "react-redux";
import {Users} from "./Users";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    usersPageType
} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import React from "react";
import {Preloader} from "../Common/Preloader/Preloader";

type MapStateToPropsType = {
    usersPage: usersPageType,
    isFetching: boolean,
    followingInProgress: Array<string>,
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
    }

    onPageClick = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.usersPage.totalUserCount}
                   pageSize={this.props.usersPage.pageSize}
                   currentPage={this.props.usersPage.currentPage}
                   onPageClick={this.onPageClick}
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers: getUsersThunkCreator
})(UsersContainer);