import {connect} from "react-redux";
import {Users} from "./Users";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    usersPageType
} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import React from "react";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors";

type MapStateToPropsType = {
    users: usersPageType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
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
        this.props.getUsers(this.props.users.currentPage, this.props.users.pageSize);
    }

    onPageClick = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.users.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.users.totalUserCount}
                   pageSize={this.props.users.pageSize}
                   currentPage={this.props.users.currentPage}
                   onPageClick={this.onPageClick}
                   users={this.props.users.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers
    })
)(UsersContainer);