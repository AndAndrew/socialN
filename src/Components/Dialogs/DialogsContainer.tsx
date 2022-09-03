import React from "react";
import {ActionsTypes} from "../../Redux/store";
import {DialogsPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    state: DialogsPageType,
    dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: PropsType) => {

    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return <Dialogs dialogsPage={props.state} updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}/>
}