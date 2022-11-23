import s from './Users.module.css';
import photo from "../../Assets/Images/user.png";
import React from "react";
import {UserType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageClick: (page: number) => void,
    users: Array<UserType>,
    follow: (id: string) => void,
    unfollow: (id: string) => void,
    followingInProgress: Array<string>
}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageClick(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : photo} className={s.userPhoto}
                             alt={'avatar'}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {
                                              props.unfollow(user.id)
                                          }}>unfollow</button>
                                : <button disabled={props.followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {
                                              props.follow(user.id)
                                          }}>follow</button>
                        }
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