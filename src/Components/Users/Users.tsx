import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import photo from "../../Assets/Images/user.png";
import React from "react";

export class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : photo} className={s.userPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
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