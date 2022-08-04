import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsType} from "../../Redux/state";

const Profile = (props: { state: MyPostsType }) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
    </div>
}

export default Profile;