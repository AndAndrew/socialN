import React from "react";
import s from './MyPosts.module.css'
import {MyPostsType} from "../../../Redux/state";
import {Post} from "./Post/Post";

export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                      likesCount={post.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}