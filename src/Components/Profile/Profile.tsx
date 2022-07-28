import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
        <img src='https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg' alt='content image'/>
        </div>
        <div>
            ava+descr
        </div>
        <MyPosts/>
    </div>
}

export default Profile;