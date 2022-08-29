import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src='https://blog.ostrovok.ru/wp-content/uploads/2020/01/ostrovok-filters-4-123456-2.png'
                     alt='content image'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    )
}
