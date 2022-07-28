import React from "react";
import s from './Content.module.css'

const Content = () => {
    return <div className={s.content}>
        <div>
        <img src='https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg' alt='content image'/>
        </div>
        <div>
            ava+descr
        </div>
        <div>
            my posts
            <div>
            new post
            </div>
            <div>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
                <div className={s.item}>
                    post3
                </div>
            </div>
        </div>
    </div>
}

export default Content;