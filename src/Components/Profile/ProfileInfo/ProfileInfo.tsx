import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg' alt='content image'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    )
}
