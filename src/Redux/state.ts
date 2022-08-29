let rerenderEntireTree = (state: StateType) => {
}

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

export let state: StateType = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}