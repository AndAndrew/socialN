import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, MyPostsType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type propsType = {
    profilePage: MyPostsType,
    dispatch: (action: ActionsTypes) => void,
}

const Profile = (props: propsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer posts={props.profilePage.posts}
                          newPostText={props.profilePage.newPostText}
                          dispatch={props.dispatch}
        />
    </div>
}

export default Profile;