import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import {ActionsTypes, PostType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {StoreType} from "../../../Redux/reduxStore";

type propsType = {
    // posts: Array<PostType>,
    // newPostText: string,
    // dispatch: (action: ActionsTypes) => void
}

export const MyPostsContainer = (props: propsType) => {

    // const addPost = () => {
    //     props.dispatch(addPostActionCreator());
    // }
    //
    // const onChangeHandler = (text: string) => {
    //     props.dispatch(updateNewPostTextActionCreator(text));
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onChangeHandler = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }
                    return (<MyPosts posts={state.posts}
                             newPostText={state.newPostText}
                             updateNewPostText={onChangeHandler}
                             addPost={addPost}/>)
                }
            }
        </StoreContext.Consumer>
    )
}