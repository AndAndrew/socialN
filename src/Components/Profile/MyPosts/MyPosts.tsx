import React, {useRef} from "react";
import s from './MyPosts.module.css'
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../Redux/state";
import {Post} from "./Post/Post";

type propsType = {
    posts: Array<PostType>,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: propsType) => {

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                      likesCount={post.likesCount}/>);

    const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangeHandler = () => {
        const text = newPostElement.current?.value;
        if (text) {
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangeHandler}
                        ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}