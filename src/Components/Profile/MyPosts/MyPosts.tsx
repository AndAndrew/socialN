import React, {useRef} from "react";
import s from './MyPosts.module.css'
import {PostType, state} from "../../../Redux/state";
import {Post} from "./Post/Post";

type propsType = {
    posts: Array<PostType>,
    newPostText: string,
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: propsType) => {

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                      likesCount={post.likesCount}/>);

    const newPostElement = useRef<HTMLTextAreaElement | null>(null);
    const addPost = () => {
        props.addPost();
    }

    const onChangeHandler = () => {
        const text = newPostElement.current!.value;
        props.updateNewPostText(text);
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