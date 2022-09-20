import React, {useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";

export const MyPosts = (props: ProfilePropsType) => {

    let postsElements = props.profilePage.posts.map(post => <Post id={post.id} message={post.message}
                                                      likesCount={post.likesCount}/>);

    const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const onAddPost = () => {
        props.addPost();
    }

    const onChangeHandler = () => {
        const text = newPostElement.current?.value;
        if (text) {
            props.updateNewPostText(text)
        }
        ;
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangeHandler}
                        ref={newPostElement}
                        value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}