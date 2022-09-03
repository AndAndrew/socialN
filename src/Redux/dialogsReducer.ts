import {DialogItemType, MessageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

type StateType = {
    dialogs: Array<DialogItemType>,
    messages: Array<MessageType>,
    newMessageBody: string
}

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>

export type MessageActionTypes = SendMessageActionType | UpdateNewMessageBodyActionType

export const dialogsReducer = (state: StateType, action: MessageActionTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}