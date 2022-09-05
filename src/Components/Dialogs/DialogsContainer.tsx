import React from "react";
import {ActionsTypes} from "../../Redux/store";
import {DialogsPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type PropsType = {
    // state: DialogsPageType,
    // dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: PropsType) => {

    // const onSendMessageClick = () => {
    //     props.dispatch(sendMessageActionCreator())
    // }
    //
    // const onNewMessageChange = (body: string) => {
    //     props.dispatch(updateNewMessageBodyActionCreator(body));
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(body));
                    }
                    return (<Dialogs dialogsPage={state}
                             updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}/>)
                }
            }
        </StoreContext.Consumer>
    )
}