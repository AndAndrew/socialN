import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message="It's my first post" likeCount={5}/>
                <Post message="It's my second post" likeCount={7}/>
                <Post message="It's my third post" likeCount={2}/>
            </div>
        </div>
    )
}