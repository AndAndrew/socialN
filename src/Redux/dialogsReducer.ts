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
type MessageActionTypes = SendMessageActionType

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
    ] as Array<MessageType>
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: MessageActionTypes): DialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}