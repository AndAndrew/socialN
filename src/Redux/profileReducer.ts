const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = typeof initialState

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type PostActionTypes = AddPostActionType | UpdateNewPostTextActionType

const initialState = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 5},
        {id: 2, message: "It's my second post", likesCount: 7},
        {id: 3, message: "It's my third post", likesCount: 2}
    ] as Array<PostType>,
    newPostText: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: PostActionTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}