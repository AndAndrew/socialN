import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage
}
export const getUsers = createSelector(getUsersSelector,
    (usersPage) => {
    return {...usersPage, users: usersPage.users.filter(u => true)}
    })
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
