import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: any,
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.image}*/}
            {/*         src='https://blog.ostrovok.ru/wp-content/uploads/2020/01/ostrovok-filters-4-123456-2.png'*/}
            {/*         alt='content image'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
