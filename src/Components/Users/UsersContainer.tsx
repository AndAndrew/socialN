import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersPageType,
    UserType
} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/reduxStore";
import React from "react";
import axios from "axios";

type MapStateToPropsType = {
    usersPage: usersPageType,
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    }

    onPageClick = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <Users totalUsersCount={this.props.usersPage.totalUserCount}
                      pageSize={this.props.usersPage.pageSize}
                      currentPage={this.props.usersPage.currentPage}
                      onPageClick={this.onPageClick}
                      users={this.props.usersPage.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);