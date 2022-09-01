export type MessageType = {
    id: number,
    message: string
}
export type DialogItemType = {
    name: string,
    id: number
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type MyPostsType = {
    posts: Array<PostType>,
    newPostText: string
}
export type StateType = {

    profilePage: {
        posts: Array<PostType>
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessageType>
    }
}

export type StoreType = {
    _state: StateType,
    _callSubscriber: (store: StoreType) => void,
    getState: () => StateType,
    subscribe: (callback: (store: StoreType) => void) => void,
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST',
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string,
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's my first post", likesCount: 5},
                {id: 2, message: "It's my second post", likesCount: 7},
                {id: 3, message: "It's my third post", likesCount: 2}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Den'},
                {id: 4, name: 'Max'},
                {id: 5, name: 'Kate'},
                {id: 6, name: 'Mike'},
                {id: 7, name: 'Lucy'}
            ],
            messages: [
                {id: 1, message: 'Yo!'},
                {id: 2, message: 'What\'s hap?'},
                {id: 3, message: 'How are your job?'},
                {id: 4, message: 'Hello'},
                {id: 5, message: 'I\'m still learning'},
                {id: 6, message: 'But the way will over'},
                {id: 7, message: 'Ah, shit!'}
            ]
        }
    },
    _callSubscriber(store: StoreType) {
    },
    getState() {
        return this._state
    },

    subscribe(observer: (store: StoreType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this)
        }
    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}