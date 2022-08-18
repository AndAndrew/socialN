import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsType} from "../../Redux/state";

type propsType = {
    state: MyPostsType,
    addPost: (postMessage: string) => void
}

const Profile = (props: propsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
}

export default Profile;