import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    return <div>
        {
            props.usersPage.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoURL} className={s.userPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={()=>{props.unfollow(user.id)}}>unfollow</button>
                            : <button onClick={()=>{props.follow(user.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
                </div>)
        }
    </div>
}