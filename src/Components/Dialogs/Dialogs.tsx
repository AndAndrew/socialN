import React from "react";
import s from './Dialogs.module.css';
import {DialogItem, DialogItemType} from "./DialogItems/DialogItem";
import {Message, MessageType} from "./Message/Message";

export const Dialogs = (props: {messages: Array<MessageType>, dialogsData: Array<DialogItemType>}) => {

    let messagesElements = props.messages.map(message => <Message message={message.message} id={message.id}/>);
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

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