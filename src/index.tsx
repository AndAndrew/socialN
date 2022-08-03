import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./Components/Profile/MyPosts/Post/Post";
import {MessageType} from "./Components/Dialogs/Message/Message";
import {DialogItemType} from "./Components/Dialogs/DialogItems/DialogItem";

let posts: Array<PostType> = [
    {id: 1, message: "It's my first post", likesCount: 5},
    {id: 2, message: "It's my second post", likesCount: 7},
    {id: 3, message: "It's my third post", likesCount: 2}
]

let dialogsData: Array<DialogItemType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Den'},
    {id: 4, name: 'Max'},
    {id: 5, name: 'Kate'},
    {id: 6, name: 'Mike'},
    {id: 7, name: 'Lucy'}
]

let messages: Array<MessageType> = [
    {id: 1, message: 'Yo!'},
    {id: 2, message: 'What\'s hap?'},
    {id: 3, message: 'How are your job?'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'I\'m still learning'},
    {id: 6, message: 'But the way will over'},
    {id: 7, message: 'Ah, shit!'}
]

ReactDOM.render(
    <App posts={posts} messages={messages} dialogs={dialogsData}/>,
  document.getElementById('root')
);