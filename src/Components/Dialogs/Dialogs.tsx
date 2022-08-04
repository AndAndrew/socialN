import React from "react";
import s from './Dialogs.module.css';
import {DialogItemType, MessageType} from "../../Redux/state";
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props: { state: { dialogs: Array<DialogItemType>, messages: Array<MessageType> } }) => {

    let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

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