import s from './Users.module.css';
import photo from "../../Assets/Images/user.png";
import React from "react";
import {UserType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageClick: (page: number) => void,
    users: Array<UserType>,
    follow: (id: string) => void,
    unfollow: (id: string) => void
}

export const Users = (props: PropsType) => {
    {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageClick(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : photo} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8f1da31f-2ec3-4f0d-8757-bcc4266dd215'
                                    },
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id);
                                    }
                                });
                            }}>unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8f1da31f-2ec3-4f0d-8757-bcc4266dd215'
                                    },
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id);
                                    }
                                });
                            }}>follow</button>}
                    </div>
                </span>
                    <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                    <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
                </div>)
            }
        </div>
    }
}