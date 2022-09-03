import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {
    ActionsTypes,
    DialogItemType,
    MessageType
} from "../../Redux/store";
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogsReducer";

type PropsType = {
    state: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessageType>,
        newMessageBody: string
    },
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: PropsType) => {

    let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>);
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const newMessageBody = props.state.newMessageBody;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}