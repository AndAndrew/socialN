import React from "react";
import {
    addPostActionCreator, ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

export type ProfilePropsType = MapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);