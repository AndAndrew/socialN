import React from "react";
import {DialogsPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);