import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import {ActionsTypes, PostType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";

type propsType = {
    posts: Array<PostType>,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: propsType) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangeHandler = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts posts={props.posts}
                    newPostText={props.newPostText}
                    updateNewPostText={onChangeHandler}
                    addPost={addPost}/>
}