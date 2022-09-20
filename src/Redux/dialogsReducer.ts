
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type DialogItemType = {
    name: string,
    id: number
}

export type MessageType = {
    id: number,
    message: string
}

export type DialogsPageType = typeof initialState

type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>
type MessageActionTypes = SendMessageActionType | UpdateNewMessageBodyActionType

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Den'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Kate'},
        {id: 6, name: 'Mike'},
        {id: 7, name: 'Lucy'}
    ] as Array<DialogItemType>,
    messages: [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'What\'s hap?'},
        {id: 3, message: 'How are your job?'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'I\'m still learning'},
        {id: 6, message: 'But the way will over'},
        {id: 7, message: 'Ah, shit!'}
    ] as Array<MessageType>,
    newMessageBody: ''
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: MessageActionTypes): DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
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