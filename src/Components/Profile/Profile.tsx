import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, MyPostsType} from "../../Redux/store";

type propsType = {
    profilePage: MyPostsType,
    dispatch: (action: ActionsTypes) => void,
}

const Profile = (props: propsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
        />
    </div>
}

export default Profile;