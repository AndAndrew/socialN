import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Den'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Kate'},
        {id: 6, name: 'Mike'},
        {id: 7, name: 'Lucy'}
    ]

    let messages = [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'What\'s hap?'},
        {id: 3, message: 'How are your job?'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'I\'m still learning'},
        {id: 6, message: 'But the way will over'},
        {id: 7, message: 'Ah, shit!'}
    ]

    let messagesElements = messages.map(message => <Message message={message.message}/>);
    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}