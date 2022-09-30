import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean,
    login: string | null
    setAuthUserData: (userId: string, email: string, login: string) => void
}

export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrtme6vxfY4sq5qAIViyyTzfVjjOUgkQVxw&usqp=CAU'
                alt='header image'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}