import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {logout} from "../../Redux/authReducer";

type PropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void
}

export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrtme6vxfY4sq5qAIViyyTzfVjjOUgkQVxw&usqp=CAU'
                alt='header image'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}