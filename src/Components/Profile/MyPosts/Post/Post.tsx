import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src='https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg'
                alt='avatar'/>
            {props.message}
            <div>
                <span>likes</span> {props.likeCount}
            </div>
        </div>
    )
}