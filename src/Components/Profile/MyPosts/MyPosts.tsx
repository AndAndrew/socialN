import React, {useRef} from "react";
import s from './MyPosts.module.css'
import {PostType} from "../../../Redux/state";
import {Post} from "./Post/Post";

type propsType = {
    posts: Array<PostType>,
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: propsType) => {

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                      likesCount={post.likesCount}/>);

    const newPostElement = useRef<HTMLTextAreaElement | null>(null);
    const addPost = () => {
        let text = newPostElement.current!.value;
        props.addPost(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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