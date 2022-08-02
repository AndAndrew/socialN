import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: "It's my first post", likesCount: 5},
        {id: 2, message: "It's my second post", likesCount: 7},
        {id: 3, message: "It's my third post", likesCount: 2},
    ]

    let postsElements = posts.map(post => <Post message={post.message} likeCount={post.likesCount}/>);

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
                { postsElements }
            </div>
        </div>
    )
}